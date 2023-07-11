import {
  Avatar,
  Box,
  Divider,
  Flex,
  Grid,
  Group,
  Paper,
  Text,
  Title,
  createStyles,
  getStylesRef,
  rem
} from "@mantine/core";

import { useDisclosure, useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  verticalText: {
    transform: "rotate(-90deg)",
  },
  paulo: {
    backgroundImage: `url(https://d2er8q8v25uk9z.cloudfront.net/paulo_wbne9p.webp)`,
  },
  pinduca: {
    backgroundImage: `url(https://d2er8q8v25uk9z.cloudfront.net/pinduca.webp)`,
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
              src="https://d2er8q8v25uk9z.cloudfront.net/giovanna_eNFVjKYbC3XT.webp"
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
              src="https://d2er8q8v25uk9z.cloudfront.net/alex_47qrhnHgQsGv.webp"
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
              src="https://d2er8q8v25uk9z.cloudfront.net/vital.webp"
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
  );
}
