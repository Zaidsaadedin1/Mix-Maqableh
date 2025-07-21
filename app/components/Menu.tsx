import React, { useEffect, useState } from "react";
import { Button, Group, Text, Image, Menu, Flex, Box } from "@mantine/core";
import {
  IconDeviceMobileMessage,
  IconInfoCircle,
  IconWalk,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import LanguageSwitcher from "../blocks/LanguageSwitcher/LanguageSwitcher";

const MenuComponent = () => {
  const { t, i18n } = useTranslation("menuComponent");
  const currentLang = i18n.language;
  const router = useRouter();
  const isRTL = currentLang === "ar";

  const isMobileOrTablet = useMediaQuery("(max-width: 1200px)");
  const isSmallMobile = useMediaQuery("(max-width: 480px)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const renderMainMenu = () =>
    isMobileOrTablet ? (
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button
            size="12"
            variant="subtle"
            style={{ direction: isRTL ? "rtl" : "ltr" }}
            ff="Oswald, sans-serif"
          >
            {t("menu")}
          </Button>
        </Menu.Target>
        <Menu.Dropdown ff="Oswald, sans-serif">
          {[
            { path: "/whosMix", icon: IconInfoCircle, text: t("whos_mix") },
            {
              path: "/howItsAllStarted",
              icon: IconWalk,
              text: t("how_its_all_started"),
            },
            {
              path: "/sendMessageToMix",
              icon: IconDeviceMobileMessage,
              text: t("send_message_to_mix"),
            },
          ].map((item) => (
            <Menu.Item
              key={item.path}
              onClick={() => router.push(`/${currentLang}/${item.path}`)}
              style={{ direction: isRTL ? "rtl" : "ltr" }}
            >
              <Group>
                <item.icon size={12} />
                <Text size="sm">{item.text}</Text>
              </Group>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    ) : (
      <Group
        wrap="nowrap"
        gap={5}
        style={{
          fontFamily: "Oswald, sans-serif",
          flexDirection: isRTL ? "row-reverse" : "row",
        }}
      >
        {[
          { path: "/whosMix", icon: IconInfoCircle, text: t("whos_mix") },
          {
            path: "/howItsAllStarted",
            icon: IconWalk,
            text: t("how_its_all_started"),
          },
          {
            path: "/sendMessageToMix",
            icon: IconDeviceMobileMessage,
            text: t("send_message_to_mix"),
          },
        ].map((item) => (
          <Button
            key={item.path}
            variant="subtle"
            onClick={() => router.push(`/${currentLang}/${item.path}`)}
            style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
          >
            <Group
              gap={2}
              wrap="nowrap"
              style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
            >
              <item.icon size={12} />
              <Text size="sm">{item.text}</Text>
            </Group>
          </Button>
        ))}
      </Group>
    );

  return (
    <Box
      component="nav"
      style={{
        position: "static",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: 0,
        margin: 0,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backdropFilter: "blur(4px)",
          zIndex: -1,
        },
      }}
    >
      <Flex
        align="center"
        justify="space-between"
        direction={isRTL ? "row-reverse" : "row"}
        style={{
          padding: 0,
          margin: 0,
          minHeight: isSmallMobile ? "48px" : isMobile ? "56px" : "64px",
          backgroundColor: scrolled ? "white" : "transparent",
        }}
        p={0}
      >
        {/* Logo */}
        {isRTL ? (
          <Flex
            align="center"
            gap={isSmallMobile ? "xs" : "sm"}
            direction={isRTL ? "row-reverse" : "row"}
            justify="flex-start"
            style={{ flexShrink: 0 }}
          >
            <LanguageSwitcher />
            {renderMainMenu()}
          </Flex>
        ) : (
          <Flex
            align="center"
            gap={isSmallMobile ? "xs" : "md"}
            justify={isRTL ? "flex-end" : "flex-start"}
            dir={isRTL ? "rtl" : "ltr"}
            style={{ flexShrink: 0 }}
          >
            <Image
              src={"/images/logo.png"}
              alt="Logo"
              w={80}
              h={80}
              style={{ cursor: "pointer" }}
              onClick={() => router.push(`/${currentLang}/`)}
            />
          </Flex>
        )}

        {/* Right Side Actions */}
        {isRTL ? (
          <Image
            src={"/images/logo.png"}
            alt="Logo"
            w={80}
            h={80}
            style={{ cursor: "pointer" }}
            onClick={() => router.push(`/${currentLang}/`)}
          />
        ) : (
          <Flex
            align="center"
            gap={isSmallMobile ? "xs" : "sm"}
            direction={isRTL ? "row-reverse" : "row"}
            justify="flex-end"
            style={{ flexShrink: 0 }}
          >
            {renderMainMenu()}
            <LanguageSwitcher />
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default MenuComponent;
