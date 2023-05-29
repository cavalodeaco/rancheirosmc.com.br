import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "dark",
  colors: {
    brand: [
      "#E7E2D9",
      "#DAD1BD",
      "#D2C2A0",
      "#CFB682",
      "#D2AD60", // <- primary shade color
      "#BE9C55",
      "#A88B50",
      "#8F7B50",
      "#7B6C4D",
      "#6B604A",
    ]
  },
  primaryColor: 'brand',
  primaryShade: 4,
  headings: {
    fontFamily: 'Rye, cursive',
    fontWeight: 'normal',
  },
};