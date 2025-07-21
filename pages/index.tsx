// pages/index.tsx
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Home from "@/app/components/Home";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "home",
        "menuComponent",
        "common",
        "contactForm",
      ])),
    },
  };
};

export default Home;
