import React, { useState } from "react";
import {
  TextInput,
  Textarea,
  Select,
  Button,
  Stack,
  Title,
  Paper,
  LoadingOverlay,
  rem,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useTranslation } from "next-i18next";
import { showNotification } from "@mantine/notifications";
import { z } from "zod";
import { TFunction } from "i18next";

const schema = (t: TFunction) =>
  z.object({
    name: z.string().min(1, t("contactForm:validation.name_required")),
    email: z.string().email(t("contactForm:validation.email_invalid")),
    phone: z.string().min(5, t("contactForm:validation.phone_required")),
    service: z.string().min(1, t("contactForm:validation.service_required")),
    message: z.string().min(1, t("contactForm:validation.message_required")),
  });

type FormValues = z.infer<ReturnType<typeof schema>>;

function SendMessageToMix() {
  const { t } = useTranslation("contactForm");
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
    validate: zodResolver(schema(t)),
  });

  const handleSubmit = async (values: FormValues) => {
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      showNotification({
        title: t("notifications.success_title"),
        message: t("notifications.success_message"),
        color: "green",
      });

      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);

      showNotification({
        title: t("notifications.error_title"),
        message:
          error instanceof Error
            ? error.message
            : t("notifications.error_message"),
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

  const serviceTypes = t("service_types", { returnObjects: true }) as Record<
    string,
    string
  >;

  return (
    <Paper ml={100} mr={100} p="xl" radius="xl" shadow="lg" pos="relative">
      <LoadingOverlay visible={loading} zIndex={1000} />
      <Title order={3} mb="lg" ta="center">
        {t("contact_form_title")}
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput
            label={t("form_name_label")}
            placeholder={t("form_name_placeholder")}
            {...form.getInputProps("name")}
          />

          <TextInput
            label={t("form_email_label")}
            placeholder={t("form_email_placeholder")}
            type="email"
            {...form.getInputProps("email")}
          />

          <TextInput
            label={t("form_phone_label")}
            placeholder={t("form_phone_placeholder")}
            type="tel"
            {...form.getInputProps("phone")}
          />

          <Select
            label={t("form_service_label")}
            placeholder={t("form_service_placeholder")}
            data={Object.entries(serviceTypes).map(([value, label]) => ({
              value,
              label,
            }))}
            searchable
            nothingFoundMessage={t("form_service_placeholder")}
            maxDropdownHeight={280}
            styles={{
              dropdown: {
                fontSize: rem(14),
                minWidth: rem(300),
              },
              input: {
                fontSize: rem(14),
              },
            }}
            {...form.getInputProps("service")}
          />

          <Textarea
            label={t("form_message_label")}
            placeholder={t("form_message_placeholder")}
            autosize
            minRows={3}
            maxRows={8}
            {...form.getInputProps("message")}
          />

          <Button
            type="submit"
            variant="gradient"
            fullWidth
            mt="md"
            disabled={loading}
            loading={loading}
          >
            {loading ? t("form_submit_loading") : t("form_submit")}
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}

export default SendMessageToMix;
