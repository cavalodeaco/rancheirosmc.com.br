import { MantineProvider } from "@mantine/styles";
import { theme } from "../utils/theme";
import { CustomFonts } from "../fonts/CustomFonts";
import { AppShell, Center, Title } from "@mantine/core";
import { HeaderResponsive } from "./HeaderResponsive";

export default function App() {
  return (
    <MantineProvider theme={{ ...theme }} withGlobalStyles withNormalizeCSS>
      <CustomFonts />
      <AppShell header={<HeaderResponsive />} padding={0}>
        <Center
          style={{
            minHeight: "100%",
          }}
        >
          <Title
            variant="gradient"
            gradient={{ from: "brand.6", to: "brand.2" }}
            order={1}
            size={"10em"}
          >
            RANCHEIROS MC
          </Title>
        </Center>
      </AppShell>
    </MantineProvider>
  );
}
