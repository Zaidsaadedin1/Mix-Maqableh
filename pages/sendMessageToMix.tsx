// pages/index.tsx
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import SendMessageToMix from "@/app/components/SendMessageToMix";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "contactForm",
        "menuComponent",
        "common",
      ])),
    },
  };
};

export default SendMessageToMix;
