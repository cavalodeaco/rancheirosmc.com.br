import {
  Anchor,
  Avatar,
  Box,
  Card,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  Modal,
  Paper,
  Text,
  Title,
  createStyles,
  getStylesRef,
  rem,
} from "@mantine/core";

import pinduca from "./img/pinduca.webp";
import giovanna from "./img/giovanna.webp";
import vital from "./img/vital.webp";
import dai from "./img/dai.webp";
import brito from "./img/brito.webp";
import gisele from "./img/gisele.webp";
import jane from "./img/jane.webp";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  verticalText: {
    transform: "rotate(-90deg)",
  },
  paulo: {
    backgroundImage: `url(https://res.cloudinary.com/ddmchwanw/image/upload/w_700/f_auto,q_auto/v1687040979/rancheirosmc.com.br/paulo_wbne9p.webp)`,
  },
  pinduca: {
    backgroundImage: `url(${pinduca})`,
  },
  sepia: {
    filter: "sepia(1)",
  },
  ranch: {
    position: "relative",
    height: rem(280),
    width: rem(280),
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    [`&:hover .${getStylesRef("image")}`]: {
      transform: "scale(1.03)",
    },
  },
  ranchImage: {
    ...theme.fn.cover(),
    ref: getStylesRef("image"),
    backgroundSize: "cover",
    transition: "transform 500ms ease",
  },
  overlay: {
    position: "absolute",
    top: "20%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .2) 100%)",
  },
  card: {
    flexGrow: 1,
    width: "50%",
    maxWidth: "clamp(280px, 50vw, 350px)",
    aspectRatio: "1/1",
    color: theme.colors.light,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column-reverse",
    padding: theme.spacing.xs,
  },
  ranchContent: {
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    zIndex: 1,
  },
  ranchTitle: {
    color: theme.white,
    marginBottom: rem(5),
  },
}));

export default function Command() {
  const { classes, cx } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Container>
      <Box py={"calc(60px + 2rem)"}>
        <Title order={2}>COMANDO NACIONAL</Title>
        <Grid gutter={"xl"} mt={"xl"} grow={true}>
          <Grid.Col sm={6}>
            <Group position="center">
              <Paper className={cx(classes.card, classes.paulo)}>
                <Flex justify={"space-between"} align={"end"}>
                  <Title order={3} align="center">
                    Capitão
                  </Title>
                  <Text align="center">(Presidente)</Text>
                </Flex>
              </Paper>
            </Group>
          </Grid.Col>
          <Grid.Col sm={6}>
            <Group position="left" pb={"sm"}>
              <Avatar
                className={classes.sepia}
                src={giovanna}
                component="span"
                alt="Giovanna"
                size="5rem"
              />
              <Flex direction={"column"}>
                <Title order={4}>Giovanna</Title>
                <Text>(Vice-presidente)</Text>
              </Flex>
            </Group>
            <Divider pb={"sm"} />
            <Group position="left" pb={"sm"}>
              <Avatar
                className={classes.sepia}
                src="https://d2er8q8v25uk9z.cloudfront.net/alex_dWR4rku7Th.webp"
                component="span"
                alt="Alex"
                size="5rem"
              />
              <Flex direction={"column"}>
                <Title order={4}>Alex</Title>
                <Text>(Disciplina)</Text>
              </Flex>
            </Group>
            <Divider pb={"sm"} />
            <Group position="left">
              <Avatar
                className={classes.sepia}
                src={vital}
                component="span"
                alt="Pr. Vital"
                size="5rem"
              />
              <Flex direction={"column"}>
                <Title order={4}>Pr. Vital</Title>
                <Text>(Brandeiro)</Text>
              </Flex>
            </Group>
          </Grid.Col>
        </Grid>
      </Box>

      <Modal
        opened={opened}
        onClose={close}
        fullScreen={isMobile}
        size={"xl"}
      >
        <Container>
          <Grid gutter={"xl"} mt={"xl"} grow={true}>
            <Grid.Col sm={6}>
              <Group position="center">
                <Title order={2} className={classes.verticalText}>
                  RANCHO <br /> CAMBIRA
                </Title>
                <Paper className={cx(classes.card, classes.pinduca)}>
                  <Flex justify={"space-between"} align={"end"}>
                    <Title order={3} align="center">
                      Rogério
                    </Title>
                    <Text align="center">(Diretor)</Text>
                  </Flex>
                </Paper>
              </Group>
            </Grid.Col>
            <Grid.Col sm={6}>
              <Group position="left" pb={"sm"}>
                <Avatar
                  src={brito}
                  className={classes.sepia}
                  component="span"
                  alt="Brito"
                  size="lg"
                />
                <Title order={4}>Brito</Title>
                <Text>(Vice-diretor)</Text>
              </Group>
              <Divider pb={"sm"} />
              <Group position="left" pb={"sm"}>
                <Avatar
                  src={dai}
                  component="span"
                  alt="Dai"
                  className={classes.sepia}
                  size="lg"
                />
                <Title order={4}>Dai</Title>
                <Text>(Financeiro)</Text>
              </Group>
              <Divider pb={"sm"} />
              <Group position="left" pb={"sm"}>
                <Avatar
                  src={jane}
                  component="span"
                  alt="Jane"
                  className={classes.sepia}
                  size="lg"
                />
                <Title order={4}>Jane</Title>
                <Text>(Secretaria)</Text>
              </Group>
              <Divider pb={"sm"} />
              <Group position="left" pb={"sm"}>
                <Avatar
                  src={gisele}
                  component="span"
                  alt="Gisele"
                  className={classes.sepia}
                  size="lg"
                />
                <Title order={4}>Gisele</Title>
                <Text>(Logística)</Text>
              </Group>
            </Grid.Col>
          </Grid>
        </Container>
      </Modal>


      <Title order={2}>Ranchos</Title>

      <Flex justify={"center"} wrap={"wrap"} gap={"lg"} pt={"xl"}>
        <Card padding="lg" shadow="lg" className={classes.ranch} onClick={open}>
          <div
            className={cx(classes.ranchImage, classes.sepia)}
            style={{ backgroundImage: `url(https://res.cloudinary.com/ddmchwanw/image/upload/w_600/f_auto,q_auto/v1687039018/rancheirosmc.com.br/ranchoCambira.webp)` }}
          />
          <div className={classes.overlay} />
          <div className={classes.ranchContent}>
            <Title size="lg" className={classes.ranchTitle} weight={500}>
              RANCHO CAMBIRA
            </Title>
            <Anchor>Saiba mais</Anchor>
          </div>
        </Card>
      </Flex>
    </Container>
  );
}
