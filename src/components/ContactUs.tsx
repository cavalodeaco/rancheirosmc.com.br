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
  IconLink,
} from "@tabler/icons-react";
import { theme } from "../utils/theme";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: "60px",
    marginTop: theme.spacing.xl,
    minHeight: 400,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][6]
    } 0%, ${theme.colors[theme.primaryColor][9]} 100%)`,
    padding: `calc(${theme.spacing.xl} * 2.5)`,
    color: theme.white,
    [theme.fn.smallerThan("sm")]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
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
                <ThemeIcon size={20} radius="xl">
                  <IconLink />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text color="white">
                  Conheça nosso{" "}
                  <Anchor
                    href="https://mpv.rancheirosmc.com.br/"
                    target="_blank"
                  >
                    treinamento de pilotagem defensiva gratuito
                  </Anchor>
                </Text>
              </List.Item>
              <List.Item>
                <Text color="white">
                  Conecte-se conosco nas redes sociais onde compartilhamos
                  nossos eventos e mensagens de sabedoria e inspiração:
                  <Group my={"xl"} position={"center"} spacing={"xl"} noWrap>
                    <Anchor
                      href="https://www.facebook.com/rancheirosmc"
                      target="_blank"
                    >
                      <ActionIcon size="xl" color="brand.4">
                        <IconBrandFacebook size="2.5rem" stroke={2} />
                      </ActionIcon>
                    </Anchor>
                    <Anchor
                      href="https://www.instagram.com/rancheirosmc/"
                      target="_blank"
                    >
                      <ActionIcon size="xl" color="brand.4">
                        <IconBrandInstagram size="2.5rem" stroke={2} />
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
