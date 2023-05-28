import { MantineProvider } from "@mantine/styles";
import { theme } from "../utils/theme";
import { AppShell, Center, Title } from "@mantine/core";
import { HeaderResponsive } from "./HeaderResponsive";
import Linkable from "./Linkable";
import Banner from "./Banner";
import { CommitmentCards } from "./CommitmentCards";
import About from "./About";

export default function App() {
  document.title = "RANCHEIROS MC";
  return (
    <MantineProvider theme={{ ...theme }} withGlobalStyles withNormalizeCSS>
      <AppShell header={<HeaderResponsive />} padding={0}>
        <Linkable id="">
          <Banner />
        </Linkable>
        <Linkable id="sobre">
          <About/>
        </Linkable>
        <Linkable id="compromisso">
          <CommitmentCards />
        </Linkable>
      </AppShell>
    </MantineProvider>
  );
}
