import {
  createStyles,
  Image,
  Card,
  Text,
  Group,
  Button,
  getStylesRef,
  rem,
  Box,
  Title,
  Anchor,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconStar } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  carousel: {
    "&:hover": {
      [`& .${getStylesRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: "width 250ms ease",

    "&[data-active]": {
      width: rem(16),
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

interface CarouselCardProps {
  id: string;
  name: string;
  date: string;
  description: string;
}

export function CarouselCard({
  id,
  name,
  date,
  description,
}: CarouselCardProps) {
  const { classes, cx } = useStyles();
  const [images, setImages] = useState<string[]>([
    "https://d2er8q8v25uk9z.cloudfront.net/rancheiro/rancheiro_w2048.webp",
  ]);

  useEffect(() => {
    const f = async () => {
      const config = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      };

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_ADDRESS}/photos/?id=${id}` as string, // remove local
        config
      );
      const body = await response.json();
      setImages(body);
      return body;
    };
    const data = f();
    console.log(data);
  }, []);

  return (
    //<Card radius="md" withBorder padding="xl">
    <Card withBorder sx={{ width: "300px" }}>
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {images.map((image) => (
            <Carousel.Slide key={image}>
              <Image src={image} height={220} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Card.Section>

      <Group position="apart" mt="lg">
        <Text fw={500} fz="lg">
          {name}
        </Text>

        <Group spacing={5}>
          <IconStar size="1rem" />
          <Text fz="xs" fw={500}>
            {date}
          </Text>
        </Group>
      </Group>

      <Group position="apart" mt="md">
        <Text fz="sm" c="dimmed" mt="sm">
          {description}
        </Text>
        <Anchor
          href={"https://photos.app.goo.gl/" + id}
          target="_blank"
          className={cx(classes.link, classes.linkActive)}
        >
          Explorar
        </Anchor>
      </Group>
    </Card>
  );
}
