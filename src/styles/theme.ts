import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    violet: {
      600: "#7C3AED",
      200: "#DDD6FE",
      100: "#EDE9FE",
    },
    rose: "#F43F5E",
    lime: "#BEF264",
    amber: "#92400E",
    slate: {
      900: "#0F172A",
      800: "#1E293B",
      500: "#64748B",
      400: "#94A3B8",
      300: "#CBD5E1",
      200: "#E2E8F0",
      100: "#F1F5F9",
    },
  },
  fonts: {
    bold20: `
      font-family: "NanumSquare";
      font-weight: 700;
      font-size: 20px;
    `,
    bold18: `
      font-family: "NanumSquare";
      font-weight: 700;
      font-size: 18px;
    `,
    bold16: {
      800: `
      font-family: "NanumSquare";
      font-weight: 800;
      font-size: 16px;
    `,
      700: `
      font-family: "NanumSquare";
      font-weight: 700;
      font-size: 16px;
    `,
    },
    regular16: `
      font-family: "NanumSquare";
      font-weight: 400;
      font-size: 16px;
    `,
  },
};
