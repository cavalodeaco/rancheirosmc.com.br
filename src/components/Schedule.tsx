import { Box, Flex, ScrollArea, Table, Title } from "@mantine/core";
import schedule from "../data/schedule";

export default function Schedule() {
  return (
    <Box py={"calc(60px + 2rem)"}>
      <Title order={2}>Agenda 2024</Title>

      <ScrollArea h={400} type="always" offsetScrollbars scrollbarSize={18} scrollHideDelay={0}>
        <Table mt={"xl"}>
          <tbody>
            {schedule.map((event, index) => (
              <tr key={index}>
                <td>
                  <Flex
                    direction={"column"}
                    justify={"center"}
                    align={"center"}
                  >
                    <Box
                      fz={32}
                      sx={(theme) => ({
                        lineHeight: "40px",
                        color: theme.colors.brand[6],
                      })}
                    >
                      {event.date.day}
                    </Box>
                    <Box fz={16}>{event.date.month}</Box>
                  </Flex>
                </td>
                <td>
                  <Box fz={16}>{event.description}</Box>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ScrollArea>
    </Box>
  );
}
