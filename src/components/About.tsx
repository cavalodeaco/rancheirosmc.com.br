import {
  Container,
  Grid,
  Highlight,
  Text,
  Title,
  createStyles,
} from "@mantine/core";

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
      <Grid>
        <Grid.Col lg={6}>
          <Title order={2}>
            Boas-vindas ao <br />
            <span className={classes.highlight}>RANCHEIROS Moto Clube!</span>
          </Title>
          <Text color="dimmed" mt="md">
            Somos um clube de motociclistas cristãos fundado em 2023 em Cambira,
            Paraná. Nosso objetivo principal é, com Jesus, ensinar as pessoas a
            pilotarem com segurança, otimismo e liberdade suas motos e suas
            vidas.
          </Text>
          <Text color="dimmed" mt="md">
            Vivemos o discipulado cristão, buscando verdadeiramente partilhar
            vida na vida. Estamos comprometidos em ser parceiros contínuos, não
            importa as circunstâncias que nos cercam. Celebramos e agradecemos
            tanto os sucessos quanto os fracassos, pois encontramos
            contentamento naquele que nos criou.
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
        </Grid.Col>
        <Grid.Col md={6}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
          provident reiciendis hic nostrum, deserunt ratione voluptatum eos
          consequuntur? Labore rerum veniam quam! Suscipit temporibus facilis
          nobis reprehenderit cum rem debitis.
        </Grid.Col>
      </Grid>
    </Container>
  );
}
