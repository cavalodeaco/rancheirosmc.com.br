import { Alert, Anchor, Transition, createStyles } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconAlertCircle } from "@tabler/icons-react";
import { useEffect } from "react";

const useStyles = createStyles(() => ({
  alert: {
    position: "fixed",
    maxWidth: "calc(100vw - 2rem)",
    right: "1rem",
    bottom: "1rem",
    zIndex: 1,
  },
}));

export default function MPVAlert() {
  const { classes } = useStyles();
  const [openedTransition, transitionHandlers] = useDisclosure(false);
  const [openedAlert, alertHandlers] = useDisclosure(true);
  useEffect(() => transitionHandlers.open(), []);
  return (
    <Transition
      mounted={openedTransition}
      transition="slide-left"
      duration={400}
      timingFunction="ease"
    >
      {(styles) => (
        <Alert
          style={{
            ...styles,
            display: openedAlert ? "block" : "none",
          }}
          className={classes.alert}
          icon={<IconAlertCircle size="1rem" />}
          title="Manobras Para Vida"
          variant="outline"
          withCloseButton
          onClose={() => alertHandlers.close()}
          closeButtonLabel="Fechar convite para inscrição"
        >
          <Anchor href="https://mpv.rancheirosmc.com.br/" target="_blank">
            Clique aqui
          </Anchor>{" "}
          e inscreva-se em nosso curso de pilotagem defensiva gratuito!
        </Alert>
      )}
    </Transition>
  );
}
