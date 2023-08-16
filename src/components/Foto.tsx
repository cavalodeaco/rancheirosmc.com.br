import { Box, Flex, Title } from "@mantine/core";

import albuns from "../data/albuns";
import { CarouselCard } from "./CarouselCard";

export default function Foto() {
  return (
    <Box py={"calc(60px + 2rem)"}>
      <Title order={2}>Fotos</Title>
      <Flex mt={"xl"} gap={".5rem"} justify={"center"} wrap={"wrap"}>
        {albuns.map(({ id, name, date, description }) => (
          <CarouselCard
            id={id}
            name={name}
            date={date}
            description={description}
            key={id}
          />
        ))}
      </Flex>
    </Box>
  );
}
