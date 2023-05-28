import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  ButtonProps,
  Center,
  Container,
  Grid,
  Group,
  Highlight,
  List,
  MantineProvider,
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
import { theme } from "../utils/theme";

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
    <Container>
      <Box py={"calc(60px + 2rem)"}>
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
                Cambira, Paraná. Nosso objetivo principal é, com Jesus, ensinar
                as pessoas a pilotarem com segurança, otimismo e liberdade suas
                motos e suas vidas.
              </Text>
              <Text color="dimmed" mt="md">
                Vivemos o discipulado cristão, buscando verdadeiramente
                partilhar vida na vida. Estamos comprometidos em ser parceiros
                contínuos, não importa as circunstâncias que nos cercam.
                Celebramos e agradecemos tanto os sucessos quanto os fracassos,
                pois encontramos contentamento naquele que nos criou.
              </Text>
              <Text color="dimmed" mt="md">
                Nossa principal missão é seguir a ordem de Jesus Cristo de
                sermos embaixadores Dele, trabalhando ativamente no ministério
                da reconciliação. Acreditamos que, não por nossa própria força
                ou poder, mas pelo Espírito Santo, somos capacitados a sermos
                agentes na maravilhosa obra de espalhar o Evangelho de Cristo.
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
                  Somos orgulhosamente conhecidos como os RANCHEIROS! Nossa
                  paixão pela cruz e nossa devoção a Jesus são a essência do que
                  nos define. Junte-se a nós e seja parte de um ambiente onde
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
      </Box>
      <Box py={"calc(60px + 2rem)"}>
        <Grid gutter={"xl"} grow={true} align="center" justify="center">
          <Grid.Col lg={6}>
            <Box pb={"2rem"}>
              <Title order={2} align="center">
                Visão
              </Title>
              <p>
                <Text fz={"lg"} align="center">
                  <Highlight
                    highlight={["juntos", "Deus"]}
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
                    Contribuir com a construção de uma sociedade onde todos
                    entendam a importância de caminhar juntos, reconciliados com
                    Deus, sentindo a completude que vem de Cristo.
                  </Highlight>
                </Text>
              </p>
              <Title order={2} pt={"2rem"} align="center">
                Missão
              </Title>
              <p>
                <Text fz={"lg"} align="center">
                  <Highlight
                    highlight={["Jesus", "vidas"]}
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
                    Com Jesus, ensinar as pessoas a pilotarem com segurança,
                    otimismo e liberdade, suas motos e suas vidas.
                  </Highlight>
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
              <Text color="dimmed" mt="md">
                Nossa história como RANCHEIROS é recente, mas nossa trajetória
                até a sua criação já conta alguns anos. Inicialmente, éramos
                membros de outro Moto Clube sediado em Curitiba. No ano de 2020,
                em meio à pandemia do COVID-19, por uma direção de Deus, fomos
                desafiados a sair daquela cidade e expandir a missão que já
                realizávamos lá.
              </Text>
              <Text color="dimmed" mt="md">
                Ao longo dos anos de 2020 a 2022, oito famílias foram se mudando
                e se instalando na região de Cambira, no Paraná. Em setembro de
                2022, realizamos o primeiro treinamento de pilotagem defensiva
                de moto na cidade de Cambira e, no mês seguinte, em Maringá,
                ainda como membros do Moto Clube da capital.
              </Text>
              <Text color="dimmed" mt="md">
                No ano de 2023, continuamos cumprindo a missão confiada por
                Deus. No entanto, devido a divergências em algumas visões
                administrativas, decidimos caminhar de forma totalmente
                independente, adotando o nome que revela o destino inicial das
                oito famílias.
              </Text>
              <Text color="dimmed" mt="md">
                <Highlight
                  highlight={["RANCHEIROS MC", "apaixonados por Jesus Cristo"]}
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
                  Foi assim, no dia 06 de maio de 2023, que nasceu o RANCHEIROS
                  MC. Somos um amontoado de gente simples e trabalhadora,
                  motociclistas ou simpatizantes, que amam uma boa prosa e se
                  movem em comitiva, respeitando tradições. Mas acima de tudo,
                  somos apaixonados por Jesus Cristo.
                </Highlight>
              </Text>
            </Spoiler>
          </Grid.Col>
        </Grid>
      </Box>
    </Container>
  );
}
