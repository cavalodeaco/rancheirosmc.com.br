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

const useStyles = createStyles((theme) => ({
  banner: {
    minHeight: "calc(min(100vh, 100vw) - 60px)",
    backgroundImage: `url(https://res.cloudinary.com/ddmchwanw/image/upload/w_1024/f_auto,q_auto/v1687040827/rancheirosmc.com.br/background_rnqaub.webp)`,
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
      <Grid
        align="center"
        gutter={"xs"}
        pt={"calc(60px + 1rem)"}
        className={classes.grid}
      >
        <Grid.Col md={6}>
          <Center>
            <Image
              imageProps={{
                sizes: "(max-width: 100vh) 50vw, 50vh",
                srcSet: [256, 840, 1150, 1400].reduce((acc, val) => {
                  acc += `https://res.cloudinary.com/ddmchwanw/image/upload/w_${val}/f_auto,q_auto/v1687039538/rancheirosmc.com.br/rancheiro.webp ${val}w,`;
                  return acc;
                }, ""),
                src: "https://res.cloudinary.com/ddmchwanw/image/upload/w_1400/f_auto,q_auto/v1687039538/rancheirosmc.com.br/rancheiro.webp",
              }}
              alt={"RANCHEIROS MC"}
              width={"min(50vh, 50vw)"}
              height={"min(50vh, 50vw)"}
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
