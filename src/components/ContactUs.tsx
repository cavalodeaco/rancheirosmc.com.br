import {
  ActionIcon,
  Anchor,
  Button,
  Container,
  Group,
  List,
  MantineProvider,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
  ThemeIcon,
  Title,
  createStyles,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconLink,
} from "@tabler/icons-react";
import { theme } from "../utils/theme";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: "calc(60px + 2rem)",
    paddingBottom: `calc(${theme.spacing.xl} * 2.5)`,
    minHeight: 400,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][6]
    } 0%, ${theme.colors[theme.primaryColor][9]} 100%)`,
    color: theme.white,
    [theme.fn.smallerThan("sm")]: {
      paddingBottom: `calc(${theme.spacing.xl}  * 1.5)`,
    },
  },
  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },
}));

export default function ContactUs() {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      nome: "",
      contato: "",
      mensagem: "",
    },
  });
  return (
    <div className={classes.wrapper}>
      <Container>
        <SimpleGrid
          cols={2}
          spacing={50}
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <div>
            <Title color="white">Entre em contato</Title>
            <Text mt="sm" mb={30}>
              Estamos ansiosos para conhecer você e compartilhar a estrada da
              vida juntos.
            </Text>
            <List
              mt={"xl"}
              spacing="xl"
              size="md"
              icon={
                <ThemeIcon size={20} radius="xl" color="gray.1" c={"brand.6"}>
                  <IconLink size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text color="white">
                  Conheça nosso{" "}
                  <Anchor
                    href="https://mpv.rancheirosmc.com.br/"
                    target="_blank"
                    color="gray.1"
                    td="underline"
                  >
                    treinamento de pilotagem defensiva gratuito
                  </Anchor>
                </Text>
              </List.Item>
              <List.Item>
                <Text color="white">
                  Salve nosso contato no Whatsapp:{" "}
                  <Anchor
                    href={
                      /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(
                        navigator.userAgent
                      )
                        ? "whatsapp://wa.me/5543991636339"
                        : "https://wa.me/5543991636339"
                    }
                    target="_blank"
                    color="gray.1"
                    td="underline"
                  >
                    (43) 99163-6339
                  </Anchor>
                </Text>
              </List.Item>
              <List.Item>
                <Text color="white">
                  Conecte-se conosco nas redes sociais onde compartilhamos
                  nossos eventos e mensagens:
                  <Group my={"xl"} position={"center"} spacing={"xl"} noWrap>
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
                      <ActionIcon size="xl" color="gray.1">
                        <IconBrandWhatsapp size="2.5rem" stroke={1.5} />
                      </ActionIcon>
                    </Anchor>
                    <Anchor
                      href="https://www.facebook.com/rancheirosmc"
                      target="_blank"
                    >
                      <ActionIcon size="xl" color="gray.1">
                        <IconBrandFacebook size="2.5rem" stroke={1.5} />
                      </ActionIcon>
                    </Anchor>
                    <Anchor
                      href="https://www.instagram.com/rancheirosmc/"
                      target="_blank"
                    >
                      <ActionIcon size="xl" color="gray.1">
                        <IconBrandInstagram size="2.5rem" stroke={1.5} />
                      </ActionIcon>
                    </Anchor>
                  </Group>
                </Text>
              </List.Item>
            </List>
          </div>
          <MantineProvider
            theme={{ ...theme, colorScheme: "light" }}
            withNormalizeCSS
          >
            <form
              action="https://formspree.io/f/moqzgqqg"
              method="POST"
              className={classes.form}
            >
              <TextInput
                label="Nome:"
                placeholder="Seu Nome"
                required
                name="nome"
                {...form.getInputProps("nome")}
              />
              <TextInput
                mt="md"
                label="E-mail ou telefone para retorno:"
                placeholder="seu.email@exemplo.com"
                required
                name="contato"
                {...form.getInputProps("contato")}
              />
              <Textarea
                required
                label="Mensagem:"
                placeholder="Olá, gostaria de saber mais sobre o moto clube!"
                minRows={4}
                mt="md"
                name="mensagem"
                {...form.getInputProps("mensagem")}
              />
              <Group position="left" mt="md">
                <Button type="submit" variant="outline">
                  Enviar
                </Button>
              </Group>
            </form>
          </MantineProvider>
        </SimpleGrid>
      </Container>
    </div>
  );
}
