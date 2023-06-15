import {
  ActionIcon,
  Anchor,
  Avatar,
  Box,
  Button,
  ButtonProps,
  Card,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  Highlight,
  Image,
  List,
  MantineProvider,
  Paper,
  Spoiler,
  Table,
  Text,
  ThemeIcon,
  Title,
  clsx,
  createStyles,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconCheck,
  IconLink,
} from "@tabler/icons-react";

export function RancheirosText({
  children,
  highlight = [],
}: {
  children: string;
  highlight?: string[];
}) {
  return (
    <Text color="dimmed" mt="md">
      <Highlight
        highlight={highlight}
        highlightStyles={(theme) => ({
          backgroundColor: theme.colors.brand[5],
          fontWeight: 700,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        })}
      >
        {children}
      </Highlight>
    </Text>
  );
}

const useStyles = createStyles((theme) => ({
  highlight: {
    position: "relative",
    color: theme.colors.dark,
    backgroundColor: theme.colors.brand[5],
    borderRadius: theme.radius.xs,
    padding: `2px 6px`,
  },
}));

export default function About() {
  const { classes } = useStyles();
  return (
    <Container>
      <Box py={"calc(60px + 2rem)"}>
        <Title order={2}>
          Boas-vindas ao <br />
          <span className={classes.highlight}>RANCHEIROS Moto Clube!</span>
        </Title>
        <Grid gutter={"xl"} grow={true} align="center" justify="center">
          <Grid.Col lg={6}>
            <Spoiler
              maxHeight={450}
              showLabel="Mostrar mais"
              hideLabel="Ocultar"
            >
              <RancheirosText highlight={["com Jesus"]}>
                Somos um clube de motociclistas cristãos fundado em 2023 em
                Cambira, Paraná. Nosso propósito é, com Jesus, ensinar as
                pessoas a pilotarem com segurança, otimismo e liberdade suas
                motos e suas vidas.
              </RancheirosText>
              <RancheirosText highlight={["vida na vida"]}>
                Vivemos o discipulado cristão, buscando verdadeiramente
                partilhar vida na vida. Estamos comprometidos em ser parceiros
                contínuos, não importando as circunstâncias que nos cercam.
                Celebramos e agradecemos tanto os sucessos quanto os fracassos,
                pois encontramos contentamento naquele que nos criou.
              </RancheirosText>
              <RancheirosText highlight={["ministério da reconciliação"]}>
                Rodamos seguindo a ordem de Jesus Cristo de sermos embaixadores
                Dele, trabalhando ativamente no ministério da reconciliação.
                Acreditamos que, não por nossa própria força ou poder, mas pelo
                Espírito Santo, somos capacitados a sermos agentes na
                maravilhosa obra de espalhar o Evangelho de Cristo.
              </RancheirosText>
              <RancheirosText highlight={["RANCHEIROS"]}>
                Somos orgulhosamente conhecidos como os RANCHEIROS! Nossa paixão
                pela cruz e nossa devoção a Jesus são a essência do que nos
                define. Junte-se a nós e seja parte de um ambiente onde
                compartilhamos nossa fé e a alegria de pilotar.
              </RancheirosText>
            </Spoiler>
          </Grid.Col>
          <Grid.Col md={6}>
            <Center>
              <Title order={3}>
                SOMOS RANCHEIROS! <br /> RANCHEIROS PELA CRUZ! <br /> RANCHEIROS
                POR JESUS!
              </Title>
            </Center>
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
                Conheça nosso{" "}
                <Anchor href="https://mpv.rancheirosmc.com.br/" target="_blank">
                  treinamento de pilotagem defensiva gratuito
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="#contato">
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
              </List.Item>
            </List>
          </Grid.Col>
        </Grid>
      </Box>
      <Box py={"calc(60px + 2rem)"}>
        <Grid gutter={"xl"} grow={true}>
          <Grid.Col lg={6}>
            <Box pb={"2rem"}>
              <Title order={2} align="center">
                Visão
              </Title>
              <p>
                <Text align="center">
                  <RancheirosText highlight={["reconciliados com Deus"]}>
                    Contribuir com a construção de uma sociedade onde todos
                    entendam a importância de caminhar juntos, reconciliados com
                    Deus, sentindo a completude que vem de Cristo.
                  </RancheirosText>
                </Text>
              </p>
              <Title order={2} pt={"2rem"} align="center">
                Missão
              </Title>
              <p>
                <Text align="center">
                  <RancheirosText highlight={["Com Jesus", "vidas"]}>
                    Com Jesus, ensinar as pessoas a pilotarem com segurança,
                    otimismo e liberdade, suas motos e suas vidas.
                  </RancheirosText>
                </Text>
              </p>
              <Title order={3} pt={"2rem"} align="center">
                Curso de pilotagem defensiva: Manobras Para Vida
              </Title>
              <p>
                <Text align="center">
                  <RancheirosText
                    highlight={["gratuito", "pilotar mais seguro"]}
                  >
                    Curso gratuito, que visa dotar seus participantes de
                    conhecimentos teóricos e práticos que possibilitem um
                    pilotar mais seguro nos deslocamentos diários.
                  </RancheirosText>
                  <Button
                    mt={"md"}
                    color="brand.6"
                    component="a"
                    href="https://mpv.rancheirosmc.com.br/#inscricao"
                    target="_blank"
                  >
                    Inscreva-se
                  </Button>
                </Text>
              </p>
            </Box>
          </Grid.Col>
          <Grid.Col lg={6}>
            <Title order={2}>
              <span className={classes.highlight}>História</span>
            </Title>
            <Spoiler
              maxHeight={450}
              showLabel="Mostrar mais"
              hideLabel="Ocultar"
            >
              <RancheirosText highlight={["direção divina"]}>
                A história do RANCHEIROS MC é relativamente recente. Essa
                jornada teve início em 2020, na cidade de Curitiba, quando, como
                membros de outro moto clube, guiados pela direção divina,
                decidimos expandir nossa missão para a cidade de Cambira, no
                interior do Paraná. Aos poucos, oito famílias se mudaram para a
                região centro-norte do estado, estabelecendo-se e dando
                continuidade aos treinamentos de pilotagem defensiva, que haviam
                iniciado na capital, ainda no ano de 2017. Ao longo de 2022 e
                2023, as cidades de Cambira, Maringá e Jandaia do Sul foram
                contempladas com o treinamento.
              </RancheirosText>
              <RancheirosText
                highlight={["RANCHEIROS MC", "apaixonados por Jesus Cristo"]}
              >
                Após divergências administrativas com o antigo clube, surge em 6
                de maio de 2023 o RANCHEIROS MC. O nome faz referência ao
                rancho, destino inicial das oito famílias que vieram de
                Curitiba. Somos uma reunião de pessoas simples e trabalhadoras,
                motociclistas ou simpatizantes, que amam uma prosa, se movem em
                comitiva, respeitando tradições e, acima de tudo, apaixonados
                por Jesus Cristo.
              </RancheirosText>
            </Spoiler>
          </Grid.Col>
        </Grid>
      </Box>
    </Container>
  );
}
