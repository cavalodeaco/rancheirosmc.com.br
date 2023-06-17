import { ReactElement, useState } from "react";
import {
  createStyles,
  Title,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Anchor,
  Center,
  Space,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import rancheirow_1209 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_1209.webp";
import rancheirow_1400 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_1400.webp";
import rancheirow_200 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_200.webp";
import rancheirow_458 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_458.webp";
import rancheirow_656 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_656.webp";
import rancheirow_826 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_826.webp";
import rancheirow_966 from "./img/rancheiro/rancheiro_t3uzgw_c_scale,w_966.webp";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: "fixed",
    zIndex: 2,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colors.dark[0],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colors.dark[6],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "filled", color: theme.primaryColor })
        .color,
    },
  },
}));

const links = [
  {
    link: "/#sobre",
    label: "Sobre",
    target: "_self",
  },
  {
    link: "/#contato",
    label: "Entre em Contato",
    target: "_self",
  },
  {
    link: "https://mpv.rancheirosmc.com.br/",
    label: "Manobras para Vida",
    target: "_blank",
  },
];

export function HeaderResponsive(): ReactElement {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[links.length - 1].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      target={link.target}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Anchor
          href="/#"
          target="_self"
          onClick={() => {
            setActive(links[links.length - 1].link);
            close();
          }}
        >
          <Title order={2} transform="uppercase" color="gray.2">
            <Center>
              <img
                sizes="48px"
                srcSet={`${rancheirow_200} 200w,
                    ${rancheirow_458} 458w,
                    ${rancheirow_656} 656w,
                    ${rancheirow_826} 826w,
                    ${rancheirow_966} 966w,
                    ${rancheirow_1209} 1209w,
                    ${rancheirow_1400} 1400w`}
                src={rancheirow_1400}
                alt="RANCHEIROS MC"
                height={48}
                width={45}
              />
              <Space w="xs" />
              RANCHEIROS MC
            </Center>
          </Title>
        </Anchor>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="scale-y" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
