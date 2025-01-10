import { AppShell, Box, Container } from "@mantine/core";
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
import { DatesProvider } from "@mantine/dates";
import "dayjs/locale/pt-br";

export default function App() {
  document.title = "RANCHEIROS MC";
  const sections = [
    { id: "sobre", component: <About /> },
    { id: "compromisso", component: <CommitmentCards /> },
    { id: "comando", component: <Command /> },
    { id: "acoes", component: <Actions /> },
    { id: "ranchos", component: <Ranchos /> },
    // { id: "foto", component: <Foto /> }, // remove fotos section for now
    { id: "agenda", component: <Schedule /> },
  ];
  return (
    <MantineProvider theme={{ ...theme }} withGlobalStyles withNormalizeCSS>
      <DatesProvider
        settings={{
          locale: "pt-br",
          firstDayOfWeek: 0,
        }}
      >
        <AppShell
          fixed={false}
          header={<HeaderResponsive />}
          footer={<RancheirosFooter />}
          padding={0}
          mb={"400px"}
        >
          <Box bg={"dark.7"}>
            <MPVAlert />
            <Linkable id="">
              <Banner />
            </Linkable>
            <Container bg={"dark.7"}>
              {sections.map((section) => (
                <Linkable id={section.id} key={section.id}>
                  {section.component}
                </Linkable>
              ))}
            </Container>
            <Linkable id="contato">
              <ContactUs />
            </Linkable>
          </Box>
        </AppShell>
      </DatesProvider>
    </MantineProvider>
  );
}
