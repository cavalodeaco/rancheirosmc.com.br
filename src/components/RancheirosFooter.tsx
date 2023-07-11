import { Center, Container, Footer, Space, Title } from "@mantine/core";

export default function RancheirosFooter() {
  return (
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
  );
}
