import { AppShell, Container } from "@mantine/core";
import { MantineProvider } from "@mantine/styles";
import { theme } from "../utils/theme";
import About from "./About";
import Actions from "./Actions";
import Banner from "./Banner";
import Command from "./Command";
import { CommitmentCards } from "./CommitmentCards";
import ContactUs from "./ContactUs";
import { HeaderResponsive } from "./HeaderResponsive";
import Linkable from "./Linkable";
import MPVAlert from "./MPVAlert";
import RancheirosFooter from "./RancheirosFooter";
import Ranchos from "./Ranchos";
import Schedule from "./Schedule";
import Foto from "./Foto";

export default function App() {
  document.title = "RANCHEIROS MC";
  const sections = [
    { id: "sobre", component: <About /> },
    { id: "compromisso", component: <CommitmentCards /> },
    { id: "comando", component: <Command /> },
    { id: "acoes", component: <Actions /> },
    { id: "ranchos", component: <Ranchos /> },
    { id: "foto", component: <Foto /> },
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
          <ContactUs />
        </Linkable>
      </AppShell>
    </MantineProvider>
  );
}
