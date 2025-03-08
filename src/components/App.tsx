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
          mb={"540px"}
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
            <Linkable id="endereco">
              <div
                style={{
                  width: "100vw",
                  height: "66vh",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1105.640117612078!2d-51.57976813036294!3d-23.60037406973828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ec9149ebe08c03%3A0x79debe9d00839b9e!2sR.%20Para%C3%ADba%2C%2080%2C%20Cambira%20-%20PR%2C%2086890-000!5e1!3m2!1spt-BR!2sbr!4v1741463804683!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </Linkable>
            <Linkable id="contato">
              <ContactUs />
            </Linkable>
          </Box>
        </AppShell>
      </DatesProvider>
    </MantineProvider>
  );
}
