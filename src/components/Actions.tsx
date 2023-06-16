import {
  Anchor,
  Box,
  Card,
  Container,
  Flex,
  Image,
  Text,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import prosa from "./img/prosa.webp";
import comitiva from "./img/comitiva.webp";
import mpv from "./img/mpv.webp";

const useStyles = createStyles((theme) => ({
  image: {
    filter: "sepia(1)",
  },
  card: {
    width: rem(280),
  },
  cardImage: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    padding: theme.spacing.sm,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .8) 100%)",
    display: "flex",
    flexDirection: "column-reverse",
    color: "white",
  },
  title: {
    marginTop: "-50px",
    position: "absolute",
    zIndex: 1,
  },
}));

export default function Actions() {
  const { classes } = useStyles();
  return (
    <Container>
      <Box py={"calc(60px + 2rem)"}>
        <Title order={2}>Atividades</Title>
        <Flex justify={"center"} gap={"xl"} wrap={"wrap"} mt={"xl"}>
          <Card shadow="xl" className={classes.card} padding={"md"} withBorder>
            <Card.Section className={classes.cardImage}>
              <Image
                className={classes.image}
                src={mpv}
                height={rem(280)}
                alt="Manobras Para Vida"
              />
              <div className={classes.overlay}>
                <Title order={3}>Manobras Para Vida</Title>
              </div>
            </Card.Section>
            <Card.Section p={"md"}>
              <Text color="dimmed" size={"sm"}>
                Curso gratuito, que visa dotar seus participantes de
                conhecimentos teóricos e práticos que possibilitem um pilotar
                mais seguro nos deslocamentos diários.{" "}
              </Text>
              <Anchor
                href="https://mpv.rancheirosmc.com.br/#inscricao"
                target="_blank"
              >
                Inscreva-se!
              </Anchor>
            </Card.Section>
          </Card>
          <Card shadow="xl" className={classes.card} padding={"md"} withBorder>
            <Card.Section className={classes.cardImage}>
              <Image
                className={classes.image}
                src={prosa}
                height={rem(280)}
                alt="Prosa"
              />
              <div className={classes.overlay}>
                <Title order={3}>Prosa</Title>
              </div>
            </Card.Section>
            <Card.Section p={"md"}>
              <Text color="dimmed" size={"sm"}>
                Encontro semanal de confraternização entre membros e amigos, que
                inclui um estudo bíblico, momentos de comunhão e cuidado mútuo.{" "}
              </Text>
              <Anchor href="#contato">Entre em contato e participe!</Anchor>
            </Card.Section>
          </Card>
          <Card shadow="xl" className={classes.card} padding={"md"} withBorder>
            <Card.Section className={classes.cardImage}>
              <Image
                className={classes.image}
                src={comitiva}
                height={rem(280)}
                alt="Comitiva"
              />
              <div className={classes.overlay}>
                <Title order={3}>Comitiva</Title>
              </div>
            </Card.Section>
            <Card.Section p={"md"}>
              <Text color="dimmed" size={"sm"}>
                Realizamos viagens com o objetivo de impactar positivamente a
                vida das pessoas. Visitamos cidades, locais e eventos, incluindo
                igrejas de diferentes denominações, para momentos de culto e
                celebração a Deus.
              </Text>
            </Card.Section>
          </Card>
        </Flex>
      </Box>
    </Container>
  );
}