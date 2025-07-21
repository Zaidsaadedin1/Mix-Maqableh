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
  Card,
  Badge,
  SimpleGrid,
  Avatar,
  Box,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandSnapchat,
} from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Home = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isSmallScreen = useMediaQuery("(max-width: 576px)");
  const { t, i18n } = useTranslation("home");
  const isRTL = i18n.language === "ar";
  const router = useRouter();
  // Updated stats with 22M+ followers
  const stats = [
    {
      value: "12.5M+",
      label: t("about.stats.tiktok"),
      icon: <IconBrandTiktok size={24} />,
    },
    {
      value: "7.3M+",
      label: t("about.stats.instagram"),
      icon: <IconBrandInstagram size={24} />,
    },
    {
      value: "2.2M+",
      label: t("about.stats.snapchat"),
      icon: <IconBrandSnapchat size={24} />,
    },
    { value: "22M+", label: t("about.stats.total"), icon: null },
  ];

  return (
    <Container mt={"2rem"} size="lg" py="xl" dir={isRTL ? "rtl" : "ltr"}>
      <Group
        align="center"
        justify="space-between"
        gap="xl"
        style={{ minHeight: isMobile ? "auto" : `calc(100vh - ${rem(100)})` }}
        wrap={isMobile ? "wrap" : "nowrap"}
      >
        <Stack
          gap="md"
          style={{ flex: 1, minWidth: isSmallScreen ? "100%" : undefined }}
        >
          <Title
            order={1}
            size={isMobile ? (isSmallScreen ? rem(32) : rem(42)) : rem(64)}
          >
            {t("hero.title")}
          </Title>
          <Text
            size={isMobile ? (isSmallScreen ? "sm" : "md") : "xl"}
            c="dimmed"
          >
            {t("hero.subtitle")}
          </Text>
          <Group
            mt="md"
            wrap={isSmallScreen ? "wrap" : "nowrap"}
            grow={isSmallScreen}
          >
            <Button
              size={isMobile ? "md" : "lg"}
              leftSection={<IconBrandInstagram size={20} />}
              color="pink"
              fullWidth={isMobile}
              onClick={() =>
                router.push(
                  "https://www.instagram.com/mixmaqableh?utm_source=ig_web_button_share_sheet&igsh=aGt4MDJzOTUybjQ5"
                )
              }
            >
              {t("hero.instagram_button")}
            </Button>
            <Button
              size={isMobile ? "md" : "lg"}
              leftSection={<IconBrandTiktok size={20} />}
              color="black"
              fullWidth={isMobile}
              onClick={() =>
                router.push(
                  "https://www.tiktok.com/@mix_151?is_from_webapp=1&sender_device=pc"
                )
              }
            >
              {t("hero.tiktok_button")}
            </Button>
            <Button
              size={isMobile ? "md" : "lg"}
              leftSection={<IconBrandSnapchat size={20} />}
              color="yellow"
              variant="outline"
              fullWidth={isMobile}
              onClick={() =>
                router.push(
                  "https://www.snapchat.com/add/mixmaqableh20?sender_web_id=82498340-a456-472a-bffe-00ffbc161205&device_type=desktop&is_copy_url=true"
                )
              }
            >
              {t("hero.snapchat_button")}
            </Button>
          </Group>

          {/* Social Badges */}
          <Group gap="sm" mt="xl" wrap="wrap">
            {Object.entries(
              t("hero.social_handles", { returnObjects: true })
            ).map(([platform, handle]) => (
              <Badge
                key={platform}
                leftSection={
                  platform === "instagram" ? (
                    <IconBrandInstagram size={16} />
                  ) : platform === "tiktok" ? (
                    <IconBrandTiktok size={16} />
                  ) : (
                    <IconBrandSnapchat size={16} />
                  )
                }
                variant="light"
                color={
                  platform === "instagram"
                    ? "pink"
                    : platform === "tiktok"
                    ? "dark"
                    : "yellow"
                }
              >
                {handle}
              </Badge>
            ))}
          </Group>
        </Stack>

        {!isMobile && (
          <Box
            style={{
              flex: 1,
              position: "relative",
              minWidth: isSmallScreen ? "100%" : undefined,
            }}
          >
            <Image
              src="/images/influencer/1.jpg"
              alt={t("hero.title")}
              radius="md"
              style={{
                border: `${rem(4)} solid ${theme.colors.pink[6]}`,
                boxShadow: theme.shadows.xl,
              }}
            />
            <Box
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
                <Text color="white" fw={500}>
                  {t("hero.social_handles.tiktok")}
                </Text>
              </Group>
            </Box>
          </Box>
        )}
      </Group>

      {/* Featured Content Section */}
      <Stack mt={isMobile ? rem(40) : rem(80)} gap="xl">
        <Title order={2} ta="center">
          {t("content.title")}
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
          {[3, 2, 4].map((item) => (
            <Card
              key={item}
              shadow="sm"
              padding="lg"
              radius="md"
              style={{
                width: "100%",
                aspectRatio: "9/16",
              }}
            >
              <Card.Section>
                <Image
                  src={`/images/influencer/${item}.jpg`}
                  height={"100%"}
                  alt={`Mix Maqableh content ${item}`}
                />
              </Card.Section>
              <Group justify="space-between" mt="md">
                <Text fw={500}>#{item} Viral Video</Text>
                <Badge color="pink" variant="light">
                  {item === 1
                    ? "12M views"
                    : item === 2
                    ? "8M views"
                    : "5M views"}
                </Badge>
              </Group>
            </Card>
          ))}
        </SimpleGrid>

        <Button
          onClick={() =>
            router.push(
              "https://www.tiktok.com/@mix_151?is_from_webapp=1&sender_device=pc"
            )
          }
          variant="light"
          size={isMobile ? "md" : "lg"}
          mx="auto"
          mt="xl"
        >
          {t("content.view_all")}
        </Button>
      </Stack>

      {/* About Section */}
      <Stack mt={isMobile ? rem(40) : rem(80)} gap="md">
        <Title order={2}>{t("about.title")}</Title>
        <Text size={isMobile ? "md" : "lg"}>{t("about.description")}</Text>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md" mt="xl">
          {stats.map((stat, index) => (
            <Card key={index} shadow="sm" padding="md" radius="md" withBorder>
              <Group>
                {stat.icon && (
                  <Avatar color={theme.primaryColor} radius="xl">
                    {stat.icon}
                  </Avatar>
                )}
                <Stack gap={0}>
                  <Text fw={700} size={isSmallScreen ? "md" : "xl"}>
                    {stat.value}
                  </Text>
                  <Text c="dimmed" size={isSmallScreen ? "xs" : "sm"}>
                    {stat.label}
                  </Text>
                </Stack>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default Home;
