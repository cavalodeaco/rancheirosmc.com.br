import { MantineProvider } from "@mantine/styles";
import { theme } from "../utils/theme";
import {
  AppShell,
  Center,
  Container,
  Footer,
  Space,
  Title,
} from "@mantine/core";
import { HeaderResponsive } from "./HeaderResponsive";
import Linkable from "./Linkable";
import Banner from "./Banner";
import { CommitmentCards } from "./CommitmentCards";
import About from "./About";
import ContactUs from "./ContactUs";
import Command from "./Command";
import Actions from "./Actions";

export default function App() {
  document.title = "RANCHEIROS MC";
  return (
    <MantineProvider theme={{ ...theme }} withGlobalStyles withNormalizeCSS>
      <AppShell
        fixed={false}
        header={<HeaderResponsive />}
        footer={
          <Footer height={"100%"} py={"xl"}>
            <Container>
              <Title order={4} transform="uppercase" color="gray.4">
                <Center>
                  <img
                    sizes="32px"
                    src="https://d2er8q8v25uk9z.cloudfront.net/rancheiro/rancheiro_w64.webp"
                    alt="RANCHEIROS MC"
                    width={32}
                    height={34}
                  />
                  <Space w="xs" />
                  RANCHEIROS MC
                </Center>
              </Title>
            </Container>
          </Footer>
        }
        padding={0}
      >
        <Linkable id="">
          <Banner />
        </Linkable>
        <Linkable id="sobre">
          <About />
        </Linkable>
        <Linkable id="compromisso">
          <CommitmentCards />
        </Linkable>
        <Linkable id="comando">
          <Command />
        </Linkable>
        <Linkable id="acoes">
          <Actions />
        </Linkable>
        <Linkable id="contato">
          <ContactUs />
        </Linkable>
      </AppShell>
    </MantineProvider>
  );
}
