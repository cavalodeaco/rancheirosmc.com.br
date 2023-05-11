import { MantineProvider, Title } from '@mantine/core';
import { theme } from "./theme";
import { CustomFonts } from './fonts/CustomFonts';

export default function App() {
  document.title = "RANCHEIROS MC";
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ ...theme}}>
      <CustomFonts/>
      <Title color='brand'>RANCHEIROS MC</Title>
    </MantineProvider>
  );
}
