import {
  ActionIcon,
  Anchor,
  Blockquote,
  Center,
  Container,
  Flex,
  Footer,
  Group,
  Space,
  Text,
  Title,
} from "@mantine/core";
import classes from "./Footer.module.css";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandFacebook,
} from "@tabler/icons-react";

export default function RancheirosFooter() {
  return (
    <Footer
      height={"100vh"}
      fixed={true}
      zIndex={-1}
      style={{
        border: "none",
        display: "flex",
        flexDirection: "column-reverse",
        backgroundColor: "light-dark(#f8f9fa, #25262b)",
      }}
    >
      <div className={classes.footer}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ md: "center" }}
          align={"center"}
          rowGap={"xl"}
          mb={"xl"}
        >
          <Center w={"100%"}>
            <div className={classes.logo}>
              <Blockquote
                cite="– Zacarias 4:6"
                className={classes.description}
                color="brand.6"
                c={"dimmed"}
                fz={"sm"}
              >
                "Não por força nem por poder, mas pelo meu Espírito", diz o
                Senhor dos Exércitos.
              </Blockquote>
            </div>
          </Center>
          <Center w={"100%"}>
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
          </Center>
          <Center w={"100%"}>
            <Group spacing={"sm"} className={classes.social} position="right">
              <Anchor
                href={
                  /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(
                    navigator.userAgent
                  )
                    ? "whatsapp://wa.me/5543991636339"
                    : "https://wa.me/5543991636339"
                }
                target="_blank"
              >
                <ActionIcon size="lg" color="gray" variant="subtle">
                  <IconBrandWhatsapp size={18} stroke={1.5} />
                </ActionIcon>
              </Anchor>
              <Anchor
                href="https://www.facebook.com/rancheirosmc"
                target="_blank"
              >
                <ActionIcon size="lg" color="gray" variant="subtle">
                  <IconBrandFacebook size={18} stroke={1.5} />
                </ActionIcon>
              </Anchor>
              <Anchor
                href="https://www.instagram.com/rancheirosmc/"
                target="_blank"
              >
                <ActionIcon size="lg" color="gray" variant="subtle">
                  <IconBrandInstagram size={18} stroke={1.5} />
                </ActionIcon>
              </Anchor>
            </Group>
          </Center>
        </Flex>

        <Container className={classes.afterFooter}>
          <Text c="dimmed" size="xs">
            CAVALO DE ACO SISTEMAS LTDA © 2025
          </Text>
        </Container>
      </div>
    </Footer>
  );
}
