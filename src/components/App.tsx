import { MantineProvider } from "@mantine/styles";
import { theme } from "../utils/theme";
import { AppShell, Container } from "@mantine/core";
import { HeaderResponsive } from "./HeaderResponsive";
import Linkable from "./Linkable";
import Banner from "./Banner";
import { CommitmentCards } from "./CommitmentCards";
import About from "./About";
import ContactUs from "./ContactUs";
import Command from "./Command";
import Actions from "./Actions";
import MPVAlert from "./MPVAlert";
import Schedule from "./Schedule";
import RancheirosFooter from "./RancheirosFooter";

export default function App() {
  document.title = "RANCHEIROS MC";
  const sections = [
    { id: "sobre", component: <About /> },
    { id: "compromisso", component: <CommitmentCards /> },
    { id: "comando", component: <Command /> },
    { id: "acoes", component: <Actions /> },
    // { id: "ranchos", component: <Command /> },
    { id: "agenda", component: <Schedule /> },
  ];
  return (
    <MantineProvider theme={{ ...theme }} withGlobalStyles withNormalizeCSS>
      <AppShell
        fixed={false}
        header={<HeaderResponsive />}
        footer={<RancheirosFooter />}
        padding={0}
      >
        <MPVAlert />
        <Linkable id="">
          <Banner />
        </Linkable>
        <Container>
          {sections.map((section) => (
            <Linkable id={section.id}>{section.component}</Linkable>
          ))}
        </Container>
        <Linkable id="contato">
          <ContactUs />{" "}
        </Linkable>
      </AppShell>
    </MantineProvider>
  );
}
