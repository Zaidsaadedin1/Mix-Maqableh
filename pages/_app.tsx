import React, { useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { MantineProvider, Stack } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { theme } from "../theme";
import { useRouter } from "next/router";
import { Playpen_Sans } from "next/font/google";
import Menu from "@/app/components/Menu";

const playpen_Sans = Playpen_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--knewaveFont-font",
});

function App({
  Component,
  pageProps,
}: {
  readonly Component: React.ElementType;
  readonly pageProps: Readonly<Record<string, unknown>>;
}) {
  const router = useRouter();
  const dir = router.locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = router.locale ?? "en";
  }, [dir, router.locale]);
  const isErrorPage =
    router.pathname === "/404" ||
    router.pathname === "/500" ||
    router.pathname === "/400";

  return (
    <MantineProvider
      theme={theme}
      withCssVariables
      cssVariablesSelector="html"
      getRootElement={() => document.documentElement}
    >
      <Head>
        <title>Mix Maqableh</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <Stack
        className={playpen_Sans.className}
        style={{
          direction: dir,
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        {!isErrorPage && <Menu />}
        <Component {...pageProps} />
      </Stack>
    </MantineProvider>
  );
}

export default appWithTranslation(App);
