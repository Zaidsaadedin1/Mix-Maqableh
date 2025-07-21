import React from "react";
import {
  Container,
  Title,
  Text,
  Timeline,
  SimpleGrid,
  Card,
  Avatar,
  Group,
  Stack,
  useMantineTheme,
  rem,
  Badge,
  Anchor,
  Divider,
  Box,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "next-i18next";
import { IconBrandInstagram, IconBrandSnapchat } from "@tabler/icons-react";

// Define TypeScript interfaces for our data structures
interface BioData {
  birthday: string;
  birth_sign: string;
  birthplace: string;
  age: string;
  rank: string;
  followers: string;
}

interface SocialData {
  instagram: string;
  snapchat: string;
}

interface Milestone {
  year: string;
  title?: string;
  description: string;
}

function HowItsAllStarted() {
  const { t, i18n } = useTranslation("howItsAllStarted");
  const currentLang = i18n.language;
  const isRTL = currentLang === "ar";
  const theme = useMantineTheme();

  const isSmallMobile = useMediaQuery("(max-width: 480px)");

  // Add type annotations to the translation returns
  const bioData = t("bio", { returnObjects: true }) as BioData;
  const socialData = t("social", { returnObjects: true }) as SocialData;
  const milestones = t("milestones", { returnObjects: true }) as Milestone[];

  return (
    <Container size="lg" py="xl" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <Stack gap="xl" mb={rem(60)} align="center">
        <Avatar
          src="https://example.com/mix-profile.jpg" // Replace with actual image
          size={150}
          radius="50%"
          mb="md"
        />
        <Title order={1} ta="center" c={theme.primaryColor}>
          {t("page_title")}
        </Title>
        <Title order={3} ta="center" fw={500} c="dimmed">
          {t("section_title")}
        </Title>
      </Stack>

      {/* Bio Section */}
      <Card withBorder shadow="sm" radius="md" mb="xl">
        <SimpleGrid cols={isSmallMobile ? 1 : 2} spacing="lg">
          <Stack>
            <Text size="lg" fw={600}>
              {bioData.birthplace}
            </Text>
            <Text>{t("about")}</Text>
            <Badge variant="light" color="pink" size="lg">
              {bioData.followers}
            </Badge>
          </Stack>

          <Stack>
            <Group>
              <Text fw={600}>Birthday:</Text>
              <Text>{bioData.birthday}</Text>
            </Group>
            <Group>
              <Text fw={600}>Age:</Text>
              <Text>{bioData.age}</Text>
            </Group>
            <Group>
              <Text fw={600}>Birth Sign:</Text>
              <Text>{bioData.birth_sign}</Text>
            </Group>
            <Group>
              <Text fw={600}>Rank:</Text>
              <Text>{bioData.rank}</Text>
            </Group>
          </Stack>
        </SimpleGrid>
      </Card>

      {/* Story Section */}
      <Title order={3} mb="md">
        {t("before_fame")}
      </Title>
      <Text size="lg" mb="xl">
        {t("about")}
      </Text>

      {/* Milestones Timeline */}
      <Title order={2} mb="xl" ta="center">
        {t("milestones_title")}
      </Title>
      <Timeline
        active={3}
        bulletSize={24}
        lineWidth={2}
        color={theme.primaryColor}
        mb={rem(80)}
      >
        {milestones.map((milestone: Milestone, index: number) => (
          <Timeline.Item key={index} title={milestone.year}>
            {milestone.title && <Text fw={500}>{milestone.title}</Text>}
            <Text c="dimmed" size="sm">
              {milestone.description}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>

      {/* Social Media Section */}
      <Title order={2} mb="xl" ta="center">
        {t("social_title")}
      </Title>
      <SimpleGrid cols={isSmallMobile ? 1 : 2} spacing="xl" mb="xl">
        <Card shadow="sm" padding="lg" radius="md">
          <Group mb="sm">
            <IconBrandInstagram color={theme.colors.pink[6]} size={24} />
            <Text fw={700}>Instagram</Text>
          </Group>
          <Anchor
            href={`https://instagram.com/${socialData.instagram}`}
            target="_blank"
          >
            @{socialData.instagram}
          </Anchor>
        </Card>

        <Card shadow="sm" padding="lg" radius="md">
          <Group mb="sm">
            <IconBrandSnapchat color={theme.colors.yellow[6]} size={24} />
            <Text fw={700}>Snapchat</Text>
          </Group>
          <Text>{socialData.snapchat}</Text>
        </Card>
      </SimpleGrid>

      {/* Associations */}
      <Divider my="xl" />
      <Text ta="center" fs="italic" mb="xl">
        {t("associations")}
      </Text>

      {/* Gallery Placeholder */}
      <Box
        my="xl"
        style={{ height: 300, backgroundColor: theme.colors.gray[1] }}
      >
        {/* This would be replaced with actual image gallery */}
      </Box>
    </Container>
  );
}

export default HowItsAllStarted;
