import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "dark",
  primaryShade: { light: 6, dark: 8 },
  colors: {
    dark: [
      "#C1C2C5",
      "#A6A7AB",
      "#909296",
      "#5C5F66",
      "#373A40",
      "#2C2E33",
      "#25262B",
      "#1A1B1E",
      "#141517",
      "#101113",
    ],
    gray: [
      "#f8fafc",
      "#f1f5f9",
      "#e2e8f0",
      "#cbd5e1",
      "#94a3b8",
      "#64748b",
      "#475569",
      "#334155",
      "#1e293b",
      "#0f172a",
    ],
  },

  /** Font sizes */
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "22px",
    xxl: "26px",
    xxxl: "30px",
  },

  /** Border radius */
  radius: {
    sm: "6px",
    md: "10px",
    lg: "14px",
  },

  /** Spacing system */
  spacing: {
    xs: "6px",
    sm: "12px",
    md: "20px",
    lg: "28px",
    xl: "36px",
  },

  /** Gradient settings */
  defaultGradient: {
    from: "gray",
    to: "black",
    deg: 135,
  },

  /** Shadow settings */
  shadows: {
    xs: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    sm: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    md: "0px 6px 18px rgba(0, 0, 0, 0.25)",
    lg: "0px 8px 20px rgba(0, 0, 0, 0.3)",
  },

  headings: {
    sizes: {
      h1: { fontSize: "2.5rem", lineHeight: "1.2" },
      h2: { fontSize: "2rem", lineHeight: "1.3" },
      h3: { fontSize: "1.5rem", lineHeight: "1.4" },
    },
  },
});
