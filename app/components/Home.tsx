import React from "react";
import {
  Box,
  rem,
  MantineSize,
  Image,
  Flex,
  Text,
  Title,
  useMantineTheme,
  Anchor,
  List,
  SimpleGrid,
} from "@mantine/core";
import { useTranslation } from "next-i18next";
import { useMediaQuery } from "@mantine/hooks";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import BlurText from "./Ui/BlurText/BlurText";
import CountUp from "./Ui/CountUp/CountUp";

interface Slide {
  image: string;
  headline: string;
  paragraph: string;
  description: string;
  headlineSize?: MantineSize | (string & {});
  paragraphSize?: MantineSize | (string & {});
  descriptionSize?: MantineSize | (string & {});
  animationType?: "fade" | "slide" | "zoom";
  animationDuration?: number;
}

interface TextTypeProps {
  text: string;
  speed?: number;
  style?: React.CSSProperties;
}

const TextType: React.FC<TextTypeProps> = ({ text, speed = 50, style }) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span style={style}>{displayedText}</span>;
};

const Home = () => {
  const { t } = useTranslation(["home", "common"]);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const theme = useMantineTheme();
  const { scrollYProgress } = useViewportScroll();

  const slides: Slide[] = [
    {
      image: "images/influencer/1.jpg",
      headline: t("slide1.headline"),
      paragraph: t("slide1.paragraph"),
      description: t("slide1.description"),
      headlineSize: isMobile ? rem(32) : rem(56),
      paragraphSize: isMobile ? rem(18) : rem(22),
      descriptionSize: isMobile ? rem(16) : rem(18),
      animationType: "slide",
      animationDuration: 800,
    },
    {
      image: "images/influencer/2.jpg",
      headline: t("slide2.headline"),
      paragraph: t("slide2.paragraph"),
      description: t("slide2.description"),
      headlineSize: isMobile ? rem(32) : rem(56),
      paragraphSize: isMobile ? rem(18) : rem(22),
      descriptionSize: isMobile ? rem(16) : rem(18),
      animationType: "slide",
      animationDuration: 800,
    },
    {
      image: "images/influencer/3.jpg",
      headline: t("slide3.headline"),
      paragraph: t("slide3.paragraph"),
      description: t("slide3.description"),
      headlineSize: isMobile ? rem(32) : rem(56),
      paragraphSize: isMobile ? rem(18) : rem(22),
      descriptionSize: isMobile ? rem(16) : rem(18),
      animationType: "slide",
      animationDuration: 800,
    },
    {
      image: "images/influencer/4.jpg",
      headline: t("slide4.headline"),
      paragraph: t("slide4.paragraph"),
      description: t("slide4.description"),
      headlineSize: isMobile ? rem(32) : rem(56),
      paragraphSize: isMobile ? rem(18) : rem(22),
      descriptionSize: isMobile ? rem(16) : rem(18),
      animationType: "slide",
      animationDuration: 800,
    },
    {
      image: "images/influencer/5.jpg",
      headline: t("slide5.headline"),
      paragraph: t("slide5.paragraph"),
      description: t("slide5.description"),
      headlineSize: isMobile ? rem(32) : rem(56),
      paragraphSize: isMobile ? rem(18) : rem(22),
      descriptionSize: isMobile ? rem(16) : rem(18),
      animationType: "slide",
      animationDuration: 800,
    },
    {
      image: "images/influencer/6.jpg",
      headline: t("slide6.headline"),
      paragraph: t("slide6.paragraph"),
      description: t("slide6.description"),
      headlineSize: isMobile ? rem(32) : rem(56),
      paragraphSize: isMobile ? rem(18) : rem(22),
      descriptionSize: isMobile ? rem(16) : rem(18),
      animationType: "slide",
      animationDuration: 800,
    },
    {
      image: "images/influencer/7.jpg",
      headline: t("slide7.headline"),
      paragraph: t("slide7.paragraph"),
      description: t("slide7.description"),
      headlineSize: isMobile ? rem(32) : rem(56),
      paragraphSize: isMobile ? rem(18) : rem(22),
      descriptionSize: isMobile ? rem(16) : rem(18),
      animationType: "slide",
      animationDuration: 800,
    },
  ];

  const socialMediaLinks = [
    {
      platform: t("common:social.instagram"),
      url: "https://www.instagram.com/mixmaqableh?utm_source=ig_web_button_share_sheet&igsh=aGt4MDJzOTUybjQ5",
      icon: "📷",
    },
    {
      platform: t("common:social.twitter"),
      url: "https://x.com/Mixmaqableh",
      icon: "🐦",
    },
    {
      platform: t("common:social.youtube"),
      url: "https://www.youtube.com/@Mixmaqb",
      icon: "▶️",
    },
    {
      platform: t("common:social.tiktok"),
      url: "https://www.tiktok.com/@mix_151?is_from_webapp=1&sender_device=pc",
      icon: "🎵",
    },
  ];

  const mostUsedWords = [
    { word: t("words.amazing"), count: 1245 },
    { word: t("words.love"), count: 10000 },
    { word: t("words.follow"), count: 500 },
    { word: t("words.check"), count: 765 },
    { word: t("words.out"), count: 654 },
    { word: t("words.round"), count: 7000 },
  ];

  return (
    <Box
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      {/* Slides Section */}
      {slides.map((slide, i) => {
        const start = i / slides.length;
        const end = (i + 1) / slides.length;

        const yImage = useTransform(scrollYProgress, [start, end], [0, -50]);
        const yText = useTransform(scrollYProgress, [start, end], [0, 50]);
        const opacity = useTransform(scrollYProgress, [start, end], [1, 0.8]);
        const scale = useTransform(scrollYProgress, [start, end], [1, 1.05]);

        return (
          <Box
            key={`slide-${i}`}
            style={{
              height: "100vh",
              width: "100%",
              scrollSnapAlign: "start",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
              }}
            />

            <Flex
              justify="space-between"
              align="center"
              direction={isMobile ? "column" : "row"}
              style={{
                height: "100%",
                width: "100%",
                padding: isMobile ? rem(20) : rem(40),
                position: "relative",
                zIndex: 2,
              }}
            >
              {!isMobile && (
                <motion.div
                  style={{
                    y: yText,
                    opacity,
                    width: "40%",
                  }}
                >
                  <Title
                    order={1}
                    size={slide.headlineSize}
                    mb="xl"
                    style={{
                      lineHeight: 1.2,
                      fontWeight: 800,
                    }}
                  >
                    <BlurText
                      text={slide.headline}
                      delay={50}
                      animateBy="words"
                      direction="top"
                    />
                  </Title>

                  <Text
                    size={slide.paragraphSize}
                    mb="md"
                    style={{
                      lineHeight: 1.6,
                    }}
                  >
                    <BlurText
                      text={slide.paragraph}
                      delay={50}
                      animateBy="words"
                      direction="top"
                    />
                  </Text>

                  <Text
                    size={slide.descriptionSize}
                    style={{
                      lineHeight: 1.6,
                      opacity: 0.9,
                    }}
                  >
                    <BlurText
                      text={slide.description}
                      delay={50}
                      animateBy="words"
                      direction="top"
                    />
                  </Text>
                </motion.div>
              )}

              <motion.div
                style={{
                  y: yImage,
                  scale,
                  borderRadius: rem(20),
                  overflow: "hidden",
                  boxShadow: theme.shadows.xl,
                  width: isMobile ? "100%" : "50%",
                  height: isMobile ? "60vh" : "70vh",
                  position: "relative",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={slide.image}
                  width="100%"
                  height="100%"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  alt={slide.headline}
                />

                {isMobile && (
                  <Box
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: rem(20),
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    }}
                  >
                    <Title order={2} size={slide.headlineSize} mb="sm">
                      <BlurText
                        text={slide.headline}
                        delay={50}
                        animateBy="words"
                        direction="top"
                      />
                    </Title>
                    <Text size={slide.paragraphSize} color="white">
                      <BlurText
                        text={slide.paragraph}
                        delay={50}
                        animateBy="words"
                        direction="top"
                      />
                    </Text>
                  </Box>
                )}
              </motion.div>
            </Flex>
          </Box>
        );
      })}

      {/* Followers Section */}
      <Box
        style={{
          height: "100vh",
          width: "100%",
          scrollSnapAlign: "start",
          position: "relative",
          background: theme.colors.dark[8],
          color: theme.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: rem(40),
        }}
      >
        <Title order={2} size={isMobile ? rem(32) : rem(48)} mb="xl">
          {t("followers.title")}
        </Title>

        <SimpleGrid
          cols={isMobile ? 2 : 4}
          spacing="xl"
          mt="xl"
          style={{ width: "100%" }}
        >
          <Box style={{ textAlign: "center" }}>
            <Title order={3} size={rem(36)}>
              <CountUp to={3000000} duration={3} separator="," />
            </Title>
            <Text>{t("followers.instagram")}</Text>
          </Box>
          <Box style={{ textAlign: "center" }}>
            <Title order={3} size={rem(36)}>
              <CountUp to={856000} duration={3} separator="," />
            </Title>
            <Text>{t("followers.youtube")}</Text>
          </Box>
          <Box style={{ textAlign: "center" }}>
            <Title order={3} size={rem(36)}>
              <CountUp to={17000000} duration={3} separator="," />
            </Title>
            <Text>{t("followers.tiktok")}</Text>
          </Box>
          <Box style={{ textAlign: "center" }}>
            <Title order={3} size={rem(36)}>
              <CountUp to={500000} duration={3} separator="," />
            </Title>
            <Text>{t("followers.twitter")}</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Most Used Words Section */}
      <Box
        style={{
          height: "100vh",
          width: "100%",
          scrollSnapAlign: "start",
          position: "relative",
          background: theme.colors.gray[1],
          color: theme.black,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: rem(40),
        }}
      >
        <Title order={2} size={isMobile ? rem(32) : rem(48)} mb="xl">
          {t("words.title")}
        </Title>

        <Box style={{ maxWidth: rem(600), textAlign: "center" }}>
          <TextType
            text={t("words.subtitle")}
            speed={50}
            style={{ fontSize: rem(24), marginBottom: rem(40) }}
          />

          <List spacing="md" size="lg" center>
            {mostUsedWords.map((word, idx) => (
              <List.Item key={idx}>
                {word.word} - {t("words.used")}
                <CountUp to={word.count} duration={1} /> {t("words.times")}
              </List.Item>
            ))}
          </List>
        </Box>
      </Box>

      {/* Social Media Section */}
      <Box
        style={{
          height: "100vh",
          width: "100%",
          scrollSnapAlign: "start",
          position: "relative",
          background: theme.colors.dark[8],
          color: theme.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: rem(40),
        }}
      >
        <Title order={2} size={isMobile ? rem(32) : rem(48)} mb="xl">
          {t("social.title")}
        </Title>
        <SimpleGrid
          cols={isMobile ? 2 : 4}
          spacing="xl"
          style={{ width: "100%", maxWidth: rem(800) }}
        >
          {socialMediaLinks.map((social, idx) => (
            <Anchor
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textAlign: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Box
                style={{
                  fontSize: rem(48),
                  marginBottom: rem(10),
                  transition: "transform 0.3s",
                  ":hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                {social.icon}
              </Box>
              <Text size="lg">{social.platform}</Text>
            </Anchor>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Home;
