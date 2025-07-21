import { Stack, Text } from "@mantine/core";
import React from "react";
import LanguageSwitcher from "../blocks/LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "next-i18next";

function Menu() {
  const { t } = useTranslation("home");

  return (
    <Stack align="center">
      <Text>{t("made_by")}</Text>
      <LanguageSwitcher />
    </Stack>
  );
}

export default Menu;
