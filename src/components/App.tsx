import { MantineProvider } from "@mantine/styles";
import { theme } from "../utils/theme";
import { CustomFonts } from "../fonts/CustomFonts";
import { AppShell, Center, Title } from "@mantine/core";
import { HeaderResponsive } from "./HeaderResponsive";
import Linkable from "./Linkable";
import Banner from "./Banner";
import { CommitmentCards } from "./CommitmentCards";

export default function App() {
  document.title = "RANCHEIROS MC";
  return (
    <MantineProvider theme={{ ...theme }} withGlobalStyles withNormalizeCSS>
      <CustomFonts />
      <AppShell header={<HeaderResponsive />} padding={0}>
        <Linkable id="">
          <Banner />
        </Linkable>
        <Linkable id="sobre">
          <CommitmentCards />
        </Linkable>
        <Linkable id="compromisso">
          <CommitmentCards />
        </Linkable>
      </AppShell>
    </MantineProvider>
  );
}
