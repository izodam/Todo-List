import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      violet: {
        600: string;
        100: string;
      };
      rose: string;
      lime: string;
      amber: string;
      slate: {
        900: string;
        800: string;
        500: string;
        400: string;
        300: string;
        200: string;
        100: string;
      };
    };
    fonts: {
      bold20: string;
      bold18: string;
      bold16: {
        800: string;
        700: string;
      };
      regular16: string;
    };
  }
}
