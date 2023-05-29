import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container
  } from '@mantine/core';
  import { IconHeartHandshake, IconMotorbike, IconUsersGroup, IconHeart, IconHelmet, IconUserShield, IconTrafficCone, IconSeeding } from '@tabler/icons-react';
  
  const commitment = [
    {
      icon: IconHeartHandshake,
      title: 'Reconciliação',
      description:
        'Servir ao ministério da reconciliação, não por força, nem por poder, mas pelo Espírito, sendo um verdadeiro embaixador de Cristo.',
    },
    {
      icon: IconHelmet,
      title: 'Pilotagem',
      description:
        'Ensinar, as pessoas a pilotar com segurança, otimismo e liberdade suas motos e suas vidas, confiando sempre em Jesus Cristo.',
    },
    {
      icon: IconUsersGroup,
      title: 'Amizade',
      description:
        'Apadrinhar as vidas que a mim forem confiadas, de forma que, possam ser reconhecidas como discípulos de Cristo.',
    },
    {
      icon: IconHeart,
      title: 'Amor',
      description:
        'Deixar a ingestão de bebidas alcoólicas em toda e qualquer situação, por amor ao próximo.',
    },
    {
      icon: IconMotorbike,
      title: 'Motociclistas',
      description:
        'Dedicar a minha vida na demonstração do amor de Deus, em especial à irmandade motociclista.',
    },
    {
      icon: IconSeeding,
      title: 'Comunidade',
      description:
        'Servir e apoiar meus irmãos Rancheiros em toda situação.',
    },
    {
      icon: IconTrafficCone,
      title: 'Trânsito',
      description:
        'Seguir e respeitar todas as normas de trânsito, sendo exemplo aos que estão ao meu redor, conduzindo meu veículo com segurança e promovendo a paz no trânsito.',
    },
    {
      icon: IconUserShield,
      title: 'Autoridade',
      description:
        'Honrar e respeitar toda autoridade sobre mim imposta, sendo íntegro e justo em minhas ações.',
    },
  ];
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: '2rem',
      [theme.fn.smallerThan('sm')]: {
        fontSize: '1.5rem',
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: '3rem',
        height: '2px',
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    card: {
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: '3rem',
        height: '2px',
        marginTop: theme.spacing.sm,
      },
    },
  }));
  
  export function CommitmentCards() {
    const { classes, theme } = useStyles();
    const features = commitment.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} >
        <feature.icon size={'3rem'} stroke={2} color={theme.fn.primaryColor()} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="lg" mt="xl" pt={"60px"} pb={"xl"}>
        {/* <Group position="center">
          <Badge variant="filled" size="lg">
            RANCHEIROS MC
          </Badge>
        </Group>
   */}
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Compromisso do Rancheiro
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Como Rancheiro eu reconheço Jesus Cristo como Senhor, único e suficiente Salvador, me Comprometendo a:
        </Text>
  
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }