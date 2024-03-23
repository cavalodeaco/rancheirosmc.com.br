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
  rem,
} from "@mantine/core";

import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import comando from "../data/comando";
import React from "react";

const useStyles = createStyles((theme) => ({
  verticalText: {
    transform: "rotate(-90deg)",
  },
  paulo: {
    backgroundImage: `url(https://d2er8q8v25uk9z.cloudfront.net/paulo_Tp7F25pXEKyA.webp)`,
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

interface CommandItemType {
  img: string;
  name: string;
  role: string;
}

function CommandItem({ item }: { item: CommandItemType }) {
  const { img, name, role } = item;
  const { classes, cx } = useStyles();
  return (
    <Group position="left" pb={"sm"}>
      <Avatar
        className={classes.sepia}
        src={img}
        component="span"
        alt={name}
        size="4rem"
      />
      <Flex direction={"column"}>
        <Title order={4}>{name}</Title>
        <Text>({role})</Text>
      </Flex>
    </Group>
  );
}

export default function Command() {
  const { classes, cx } = useStyles();

  return (
    <Box py={"calc(60px + 2rem)"}>
      <Title order={2}>COMANDO NACIONAL</Title>
      <Grid gutter={"xl"} mt={"xl"} grow={true}>
        <Grid.Col sm={6}>
          <Group position="center">
            <Paper className={cx(classes.card, classes.paulo)}>
              <Flex
                justify={"space-between"}
                direction={"column"}
                align={"end"}
              >
                <Title order={3} align="center">
                  Capitão
                </Title>
                <Text align="center">(Presidente)</Text>
              </Flex>
            </Paper>
          </Group>
        </Grid.Col>
        <Grid.Col sm={6}>
          {comando.map((item, index) => (
            <React.Fragment key={index}>
              <CommandItem item={item} />
              {index < comando.length - 1 && <Divider pb={"sm"} />}
            </React.Fragment>
          ))}
        </Grid.Col>
      </Grid>
    </Box>
  );
}
