import {
  Anchor,
  Avatar,
  Box,
  Card,
  Flex,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconMessages, IconUser } from "@tabler/icons-react";
import RancheirosText from "./RancheirosText";
import ranchos from "../data/ranchos";

function ContactLabel({ label }: { label: string | string[] }) {
  if (typeof label === "string") {
    label = [label];
  }
  return (
    <Stack spacing="xs">
      {label.map((i) => (
        <span key={i}>{i}</span>
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
          <Card key={name} withBorder sx={{ width: "300px" }}>
            <Title align="center" order={4}>
              {name}
            </Title>
            <Flex
              align={"center"}
              gap={"0"}
              mt={"xl"}
              style={{ marginRight: "-1rem"}}
            >
              <Avatar
                sx={{ filter: "sepia(1)" }}
                src={contact.photo}
                radius="100%"
                size="xl"
                alt={contact.name}
                color="brand.4"
                style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
              >
                <div
                  style={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <IconUser size={"2rem"} />
                </div>
              </Avatar>
              <Flex
                direction={"column"}
                style={{
                  backgroundColor: "#1A1C1E",
                  height: "84px",
                  width: "100%",
                  padding: "0.5rem 1rem",
                }}
              >
                <Anchor href={`tel:${contact.tel}`}>
                  <ContactLabel label={contact.label} />
                </Anchor>
                <Text mt={"xs"}>{contact.name}</Text>
              </Flex>
            </Flex>
            {prosa ? (
              <Flex align={"center"} gap={"1rem"} mt={"xl"}>
                <ThemeIcon
                  variant="light"
                  radius="xl"
                  size={36}
                  style={{ borderBottomLeftRadius: 0 }}
                >
                  <IconMessages size={24} />
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
