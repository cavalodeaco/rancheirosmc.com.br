import {
  ActionIcon,
  Anchor,
  Button,
  ButtonProps,
  Center,
  Container,
  Grid,
  Group,
  Highlight,
  List,
  Spoiler,
  Text,
  ThemeIcon,
  Title,
  createStyles,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconCheck,
  IconLink,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  highlight: {
    position: "relative",
    color: theme.colors.dark,
    backgroundColor: theme.fn.variant({
      variant: "dark",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.xs,
    padding: `2px 6px`,
  },
}));

export default function About() {
  const { classes } = useStyles();
  return (
    <Container py={"calc(60px + 2rem)"}>
      <Title order={2}>
        Boas-vindas ao <br />
        <span className={classes.highlight}>RANCHEIROS Moto Clube!</span>
      </Title>
      <Grid gutter={"xl"} grow={true}>
        <Grid.Col lg={6}>
          <Spoiler
            maxHeight={450}
            showLabel="Mostrar mais"
            hideLabel="Ocultar"
          >
            <Text color="dimmed" mt="md">
              Somos um clube de motociclistas cristãos fundado em 2023 em
              Cambira, Paraná. Nosso objetivo principal é, com Jesus, ensinar as
              pessoas a pilotarem com segurança, otimismo e liberdade suas motos
              e suas vidas.
            </Text>
            <Text color="dimmed" mt="md">
              Vivemos o discipulado cristão, buscando verdadeiramente partilhar
              vida na vida. Estamos comprometidos em ser parceiros contínuos,
              não importa as circunstâncias que nos cercam. Celebramos e
              agradecemos tanto os sucessos quanto os fracassos, pois
              encontramos contentamento naquele que nos criou.
            </Text>
            <Text color="dimmed" mt="md">
              Nossa principal missão é seguir a ordem de Jesus Cristo de sermos
              embaixadores Dele, trabalhando ativamente no ministério da
              reconciliação. Acreditamos que, não por nossa própria força ou
              poder, mas pelo Espírito Santo, somos capacitados a sermos agentes
              na maravilhosa obra de espalhar o Evangelho de Cristo.
            </Text>

            <Text color="dimmed" mt="md">
              <Highlight
                highlight={["RANCHEIROS", "Jesus"]}
                highlightStyles={(theme) => ({
                  backgroundImage: theme.fn.linearGradient(
                    45,
                    theme.colors.orange[5],
                    theme.colors.yellow[5]
                  ),
                  fontWeight: 700,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                })}
              >
                Somos orgulhosamente conhecidos como os RANCHEIROS! Nossa paixão
                pela cruz e nossa devoção a Jesus são a essência do que nos
                define. Junte-se a nós e seja parte de um ambiente onde
                compartilhamos nossa fé e a alegria de pilotar.
              </Highlight>
            </Text>
          </Spoiler>
        </Grid.Col>
        <Grid.Col md={6}>
          <List
            mt={30}
            spacing="xl"
            size="md"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconLink />
              </ThemeIcon>
            }
          >
            <List.Item>
              Conheça nosso{" "}
              <Anchor href="https://mpv.rancheirosmc.com.br/" target="_blank">
                treinamento de pilotagem defensiva gratuito
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor href="https://wa.me/554195310076" target="_blank">
                Entre em contato.
              </Anchor>{" "}
              Estamos ansiosos para conhecer você e compartilhar a estrada da
              vida juntos.
            </List.Item>
            <List.Item>
              Conecte-se conosco nas redes sociais onde compartilhamos nossos
              eventos e mensagens de sabedoria e inspiração:
              <Group my={"xl"} position={"center"} spacing={"xl"} noWrap>
                <Anchor
                  href="https://www.facebook.com/rancheirosmc"
                  target="_blank"
                >
                  <ActionIcon size="lg">
                    <IconBrandFacebook size="2rem" stroke={2} />
                  </ActionIcon>
                </Anchor>
                <Anchor
                  href="https://www.instagram.com/rancheirosmc/"
                  target="_blank"
                >
                  <ActionIcon size="lg">
                    <IconBrandInstagram size="2rem" stroke={2} />
                  </ActionIcon>
                </Anchor>
              </Group>
            </List.Item>
          </List>
          <Center>
            <Title order={3}>
              SOMOS RANCHEIROS! <br /> RANCHEIROS PELA CRUZ! <br /> RANCHEIROS
              POR JESUS!
            </Title>
          </Center>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
