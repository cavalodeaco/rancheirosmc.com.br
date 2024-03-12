import {
  Anchor,
  Avatar,
  Box,
  Card,
  Flex,
  Grid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconBadge,
  IconBadge3d,
  IconId,
  IconMessages,
  IconUser,
} from "@tabler/icons-react";
import RancheirosText from "./RancheirosText";
import ranchos from "../data/ranchos";

function ContactLabel({ label }: { label: string | string[] }) {
  if (typeof label === "string") {
    label = [label];
  }
  return (
    <Stack spacing="xs">
      {label.map((i) => (
        <span>{i}</span>
      ))}
    </Stack>
  );
}

export default function Ranchos() {
  return (
    <Box py={"calc(60px + 2rem)"}>
      <Title order={2}>Ranchos (sedes)</Title>
      <Flex mt={"xl"} gap={".5rem"} justify={"center"} wrap={"wrap"}>
        {ranchos.map(({ name, prosa, contact }) => (
          <Card withBorder sx={{ width: "300px" }}>
            <Title align="center" order={3}>
              {name}
            </Title>
            <Flex align={"center"} gap={"1rem"} mt={"xl"}>
              <Avatar
                sx={{ filter: "sepia(1)" }}
                src={contact.photo}
                radius="xl"
                size="lg"
                alt={contact.name}
                color="brand.4"
              >
                <IconUser size={"2rem"} />
              </Avatar>
              <Flex direction={"column"}>
                <Anchor href={`tel:${contact.tel}`}>
                  <ContactLabel label={contact.label} />
                </Anchor>
                <Text mt={"xs"}>({contact.name})</Text>
              </Flex>
            </Flex>
            {prosa ? (
              <Flex align={"center"} gap={"1rem"} mt={"xl"}>
                <ThemeIcon variant="outline" radius="xl" size={56}>
                  <IconMessages size={32} />
                </ThemeIcon>
                <Flex direction={"column"}>
                  <RancheirosText highlight={["Prosa"]} mt={0}>
                    Prosa
                  </RancheirosText>
                  <RancheirosText highlight={[prosa.time]} mt={0}>
                    {`${prosa.day} - ${prosa.time}`}
                  </RancheirosText>
                  <address>{prosa.address}</address>
                </Flex>
              </Flex>
            ) : (
              ""
            )}
          </Card>
        ))}
      </Flex>
    </Box>
  );
}
