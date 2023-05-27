import { Center, createStyles, MediaQuery, Title } from "@mantine/core";
import { ReactElement } from "react";
import banner from "./img/background.jpeg";

const useStyles = createStyles((theme) => ({
  banner: {
    minHeight: "calc(100vh - 60px)",
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "50% 100%",
    display: "flex",
    filter: "sepia(1)",
  },
  blackground: {
    backgroundColor: "#0000008c",
    width: "100%",
    textAlign: "center",
    alignSelf: "center",
  },
}));

export default function Banner(): ReactElement {
  const { classes } = useStyles();

  return (
    <div className={classes.banner}>
      <div className={classes.blackground}>
        <MediaQuery
          query="(min-width: 700px)"
          styles={{
            fontSize: "5rem",
          }}
        >
          <Title color={"white"} size={"2.5rem"}>
            RANCHEIROS MC
          </Title>
        </MediaQuery>
      </div>
    </div>
  );
}
