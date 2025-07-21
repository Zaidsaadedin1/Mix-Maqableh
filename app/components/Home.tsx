import React from "react";
import {
  Container,
  Title,
  Text,
  Image,
  Button,
  Group,
  Stack,
  useMantineTheme,
  rem,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTiktok,
} from "@tabler/icons-react";
import { useTranslation } from "next-i18next";

const Home = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { t, i18n } = useTranslation("home");
  const isRTL = i18n.language === "ar";

  // Stats data (could also be moved to translations if dynamic)
  const stats = [
    { value: "2.7M+", label: t("about.stats.instagram") },
    { value: "500K+", label: t("about.stats.tiktok") },
    { value: "100+", label: t("about.stats.collaborations") },
  ];

  return (
    <Container size="lg" py="xl" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <Group
        align="center"
        justify="space-between"
        gap="xl"
        style={{ minHeight: `calc(100vh - ${rem(100)})` }}
        wrap="nowrap"
      >
        <Stack gap="md" style={{ flex: 1 }}>
          <Title order={1} size={isMobile ? rem(42) : rem(64)}>
            {t("hero.title")}
          </Title>
          <Text size={isMobile ? "md" : "xl"} c="dimmed">
            {t("hero.subtitle")}
          </Text>
          <Group mt="md">
            <Button
              size={isMobile ? "md" : "lg"}
              leftSection={<IconBrandInstagram size={20} />}
              color="pink"
            >
              {t("hero.instagram_button")}
            </Button>
            <Button
              size={isMobile ? "md" : "lg"}
              variant="outline"
              leftSection={<IconBrandYoutube size={20} />}
            >
              {t("hero.youtube_button")}
            </Button>
          </Group>
        </Stack>

        {!isMobile && (
          <div style={{ flex: 1, position: "relative" }}>
            <Image
              src="/mix-profile.jpg"
              alt={t("hero.title")}
              radius="md"
              style={{
                border: `${rem(4)} solid ${theme.colors.pink[6]}`,
                boxShadow: theme.shadows.xl,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: rem(-20),
                [isRTL ? "left" : "right"]: rem(-20),
                backgroundColor: theme.colors.dark[9],
                padding: rem(10),
                borderRadius: theme.radius.md,
                boxShadow: theme.shadows.md,
              }}
            >
              <Group gap="xs">
                <IconBrandTiktok color={theme.colors.blue[6]} />
                <Text fw={500}>{t("hero.tiktok_handle")}</Text>
              </Group>
            </div>
          </div>
        )}
      </Group>

      {/* Featured Content Section */}
      <Stack mt={rem(80)} gap="xl">
        <Title order={2} ta="center">
          {t("content.title")}
        </Title>

        <Group gap="md" justify="center">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              style={{
                width: isMobile ? "100%" : rem(300),
                aspectRatio: "9/16",
                backgroundColor: theme.colors.gray[2],
                borderRadius: theme.radius.md,
              }}
            >
              {/* Content placeholder */}
            </div>
          ))}
        </Group>

        <Button variant="light" size="lg" mx="auto" mt="xl">
          {t("content.view_all")}
        </Button>
      </Stack>

      {/* About Section */}
      <Stack mt={rem(80)} gap="md">
        <Title order={2}>{t("about.title")}</Title>
        <Text size="lg">{t("about.description")}</Text>
        <Group mt="md" gap="xl" justify={isMobile ? "center" : "flex-start"}>
          {stats.map((stat, index) => (
            <Stack key={index} gap={0}>
              <Text fw={700} size="xl">
                {stat.value}
              </Text>
              <Text c="dimmed">{stat.label}</Text>
            </Stack>
          ))}
        </Group>
      </Stack>
    </Container>
  );
};

export default Home;
