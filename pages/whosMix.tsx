// pages/index.tsx
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import WhosMix from "@/app/components/WhosMix";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "whosMix",
        "menuComponent",
        "common",
      ])),
    },
  };
};

export default WhosMix;
