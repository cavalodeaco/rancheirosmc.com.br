import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  ThemeIcon,
  Space,
  Center,
  Box,
  Anchor,
} from "@mantine/core";
import "dayjs/locale/pt-br";
import { ReactElement } from "react";
import EnrollmentForm from "./form/EnrollmentForm";
import { IconTrafficCone } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    borderRadius: 0,
    padding: "5rem",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: '3rem 0.5rem',
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: "white",
    maxWidth: "100%",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  anchor: {
    color: "white",
    textDecoration: "underline",
  },

  formBox: {
    borderRadius: theme.spacing.sm,
    backgroundImage: `linear-gradient(275deg, ${
      theme.colors[theme.primaryColor][6]
    } 0%, ${theme.colors[theme.primaryColor][8]} 100%)`,
    padding: "1rem",
  },
}));

function Warning({ text }: { text: string }): ReactElement {
  const { classes } = useStyles();
  return (
    <Text className={classes.description} mt="sm" mb={30}>
      <Center inline>
        <ThemeIcon variant="filled" size={30} radius={30}>
          <IconTrafficCone size={20} stroke={1.5} />
        </ThemeIcon>
        <Space w="xs" />
        {text}
      </Center>
    </Text>
  );
}

export default function Enrollment(): ReactElement {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Title className={classes.title} my={30} order={3}>
        Inscreva-se no Manobras para Vida
      </Title>
      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <EnrollmentForm />
        <Box className={classes.formBox}>
          <Warning text="O curso geralmente ocorre aos sábados das 8h às 14h." />
          <Warning text="Tenha paciência, estamos com fila de espera." />
          <Warning text="Entraremos em contato quando tivermos uma turma com vagas." />
          <Warning text="O curso não fornece a moto para o treinamento." />
          <Text className={classes.description} mt="sm" mb={30}>
            <Center inline>
              <ThemeIcon variant="filled" size={30} radius={30}>
                <IconTrafficCone size={20} stroke={1.5} />
              </ThemeIcon>
              <Space w="xs" />
              <Anchor href="#sobre" className={classes.anchor}>
                Saiba mais
              </Anchor>
            </Center>
          </Text>
        </Box>
      </SimpleGrid>
    </div>
  );
}
