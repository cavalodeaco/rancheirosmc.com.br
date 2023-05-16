import {
  ThemeIcon,
  Text,
  Title,
  Container,
  Center,
  SimpleGrid,
  useMantineTheme,
  createStyles,
  Highlight,
  Stack,
  Image,
  Box,
  Anchor,
} from "@mantine/core";
// https://tabler-icons.io/
import { IconSchool, IconCoinOff, IconHelmet, TablerIcon } from "@tabler/icons";
import { ReactElement } from "react";
import { v4 } from "uuid";
import logo from "./img/logo.webp";

const data = [
  {
    icon: IconSchool,
    title: "Instrução teórica",
    description: "2 horas de instrução teórica sobre pilotagem defensiva",
    id: v4(),
  },
  {
    icon: IconHelmet,
    title: "Atividade prática",
    description: "4 horas de atividades práticas em pistas pré-estabelecidas",
    id: v4(),
  },
  {
    icon: IconCoinOff,
    title: "Sem custo",
    description: "Curso gratuito oferecido por voluntários treinados",
    id: v4(),
  },
];

interface FeatureProps {
  icon: TablerIcon;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({
  icon: Icon,
  title,
  description,
}: FeatureProps): ReactElement {
  const theme = useMantineTheme();
  return (
    <div>
      <ThemeIcon variant="outline" size={40} radius={40}>
        <Icon size={20} stroke={1.5} />
      </ThemeIcon>
      <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  backgroundGradient: {
    backgroundImage: theme.fn.gradient({
      from: "dark.6",
      to: "dark.9",
      deg: 180,
    }),
  },

  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
    },
  },

  title: {
    fontSize: 34,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 26,
    },
  },

  image: {
    width: "400px",
    maxWidth: "80%",
    maxHeight: "50%",
  },
}));

export function About(): ReactElement {
  const { classes, theme } = useStyles();
  const features = data.map(({ icon, title, description, id }) => (
    <Feature icon={icon} title={title} description={description} key={id} />
  ));

  return (
    <div className={classes.backgroundGradient}>
      <Container className={classes.wrapper}>
        {/* <Title
          order={1}
          align="center"
          transform="uppercase"
          italic
          p="xl"
          className={classes.title}
        >
          Curso de pilotagem defensiva <Text>Manobras para Vida</Text>
        </Title> */}

        <Text align="center" size="md">
          <Highlight
            highlight={[
              "Manobras para Vida",
              "Rancheiros Moto Clube",
              "RANCHEIROS MC",
              "Rancheiros",
              "Jesus",
              "Jesus Cristo",
              "Espírito Santo",
              "Deus",
              "pilotar com segurança",
              "na Vida",
            ]}
            highlightColor="ppv"
            highlightStyles={() => ({
              fontWeight: 700,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            })}
          >
            O Moto Clube Rancheiros, fundado em 2023 na cidade de Cambira,
            Paraná é um clube de motociclistas cristãos. O RANCHEIROS MC surgiu
            com um propósito de incluir Jesus na missão de ensinar as pessoas a
            pilotar com segurança, otimismo e liberdade suas motos e suas vidas.
            
            O RANCHEIROS MC vive o discipulado cristão, onde o maior desejo é
            partilhar vida na Vida, sendo parceiro, não apenas nos momentos
            bons, mas em todas as circunstâncias que acontecem no cotidiano boas
            ou ruins. Comemoramos os sucessos, lamentamos os fracassos por que
            cremos e confiamos em Deus, nosso criador. Nosso foco está em sermos
            embaixadores na missão ordenada por Jesus Cristo, trabalhando
            ativamente no ministério da reconciliação. 
            O RANCHEIROS MC acredita na ação transformadora do Espírito Santo que age pela graça
            maravilhosa de Deus e, não por força, nem pelo poder. Colocando-se
            como um braço na obra de espalhar o Evangelho. Nosso slogan é a obra
            da cruz! 
            
            {/* SOMOS RANCHEIROS!
            RANCHEIROS PELA CRUZ! 
            RANCHEIROS POR
            JESUS! */}
          </Highlight>
        </Text>

        {/* <SimpleGrid
          mt={60}
          cols={2}
          spacing={theme.spacing.xl * 2}
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: "xl" },
            { maxWidth: 755, cols: 1, spacing: "xl" },
          ]}
        >
          <Stack>{features}</Stack>
          <Box>
            <Text>Realização:</Text>
            <Center>
              <Box className={classes.image}>
                <Anchor href="https://www.rancheirosmc.com.br/" target="_blank">
                  <Image
                    src={logo}
                    alt="Rancheiros Moto Clube"
                    withPlaceholder
                  />
                </Anchor>
              </Box>
            </Center>
          </Box>
        </SimpleGrid> */}
      </Container>
    </div>
  );
}
