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
import banner from "./img/background.webp";
import rancheirow_1209 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_1209.webp";
import rancheirow_1400 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_1400.webp";
import rancheirow_200 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_200.webp";
import rancheirow_458 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_458.webp";
import rancheirow_656 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_656.webp";
import rancheirow_826 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_826.webp";
import rancheirow_966 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_966.webp";

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
                srcSet: `${rancheirow_200} 200w,
              ${rancheirow_458} 458w,
              ${rancheirow_656} 656w,
              ${rancheirow_826} 826w,
              ${rancheirow_966} 966w,
              ${rancheirow_1209} 1209w,
              ${rancheirow_1400} 1400w`,
                src: rancheirow_1400,
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
