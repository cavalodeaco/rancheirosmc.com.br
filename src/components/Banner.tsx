import {
  Center,
  createStyles,
  Grid,
  Image,
  MediaQuery,
  Text,
  Title,
} from "@mantine/core";
import { ReactElement } from "react";
import banner from "./img/background.jpeg";
import rancheiro from "./img/rancheiro.webp";

const useStyles = createStyles((theme) => ({
  banner: {
    minHeight: "calc(min(100vh, 100vw) - 60px)",
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "50% 100%",
    display: "flex",
  },
  grid: {
    width: "100%",
  },
}));

export default function Banner(): ReactElement {
  const { classes } = useStyles();

  return (
    <div className={classes.banner}>
      <Grid align="center" gutter={"xs"} pt={"calc(60px + 1rem)"} className={classes.grid}>
        <Grid.Col md={6}>
          <Center>
            <Image
              src={rancheiro}
              alt={"RANCHEIROS MC"}
              width={"min(50vw, 50vh)"}
              height={"min(50vw, 50vh)"}
              maw={"50vw"}
              mah={"50vh"}
              fit="contain"
            >
              RANCHEIROS MC
            </Image>
          </Center>
        </Grid.Col>
        <Grid.Col md={6}>
          <Title color={"gray.2"} size={"5vw"} align="center">
            RANCHEIROS MC
          </Title>
        </Grid.Col>
      </Grid>
    </div>
  );
}
