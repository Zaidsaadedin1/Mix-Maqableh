// pages/index.tsx
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import HowItsAllStarted from "@/app/components/HowItsAllStarted";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "howItsAllStarted",
        "menuComponent",
        "common",
      ])),
    },
  };
};

export default HowItsAllStarted;
