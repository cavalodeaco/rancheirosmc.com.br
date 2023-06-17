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
import rancheirow_1209 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_1209.webp";
import rancheirow_1400 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_1400.webp";
import rancheirow_200 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_200.webp";
import rancheirow_458 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_458.webp";
import rancheirow_656 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_656.webp";
import rancheirow_826 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_826.webp";
import rancheirow_966 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_966.webp";
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
                    srcSet={`${rancheirow_200} 200w,
                    ${rancheirow_458} 458w,
                    ${rancheirow_656} 656w,
                    ${rancheirow_826} 826w,
                    ${rancheirow_966} 966w,
                    ${rancheirow_1209} 1209w,
                    ${rancheirow_1400} 1400w`}
                    src={rancheirow_1400}
                    alt="RANCHEIROS MC"
                    height={32}
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
