import { MantineProvider } from "@mantine/styles";
import { theme } from "../utils/theme";
import { CustomFonts } from "../fonts/CustomFonts";
import { AppShell, Center, Title } from "@mantine/core";
import { HeaderResponsive } from "./HeaderResponsive";
import Linkable from "./Linkable";
import Banner from "./Banner";
import { About } from "./About";
import { CommitmentCards } from "./CommitmentCards";

export default function App() {
  document.title = "RANCHEIROS MC";
  return (
    <MantineProvider theme={{ ...theme }} withGlobalStyles withNormalizeCSS>
      <CustomFonts />
      <AppShell header={<HeaderResponsive />} padding={0}>
        <Banner />
        <Linkable id="sobre">
          <About />
          <CommitmentCards />
        </Linkable>
      </AppShell>
    </MantineProvider>
  );
}
