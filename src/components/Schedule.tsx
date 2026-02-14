import {
  Anchor,
  Avatar,
  Box,
  Center,
  Flex,
  Grid,
  ScrollArea,
  Table,
  Title,
} from "@mantine/core";
import schedule_2026 from "../data/schedule2026";
import schedule_2025 from "../data/schedule2025";
import schedule_2024 from "../data/schedule2024";
import schedule_2023 from "../data/schedule2023";
import { Calendar } from "@mantine/dates";
import { useState } from "react";

const schedule = [...schedule_2023, ...schedule_2024, ...schedule_2025, ...schedule_2026];

const scheduleDates = schedule.map(
  (event) => new Date(`${event.date.fulldate}T00:00:00-03:00`)
);

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const thisMonthEvents = schedule.filter((_event, index) => {
  const date = scheduleDates[index];
  return date.getFullYear() === currentYear && date.getMonth() === currentMonth;
});

export default function Schedule() {
  const [listedEvents, setListedEvents] = useState(thisMonthEvents);

  function updateListedEvents(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const events = schedule.filter((_event, index) => {
      const date = scheduleDates[index];
      return date.getFullYear() === year && date.getMonth() === month;
    });
    setListedEvents(events);
  }

  return (
    <Box py={"calc(60px + 2rem)"}>
      <Title order={2} align="center">
        Agenda
      </Title>
      <Grid mt={"lg"}>
        <Grid.Col md={6}>
          <Center>
            <Calendar
              size="lg"
              static
              weekdayFormat="ddd"
              weekendDays={[]}
              hideOutsideDates
              onDateChange={(date) => updateListedEvents(date)}
              renderDay={(date) => {
                if (
                  scheduleDates.some(
                    (scheduleDate) => scheduleDate.getTime() === date.getTime()
                  )
                ) {
                  return (
                    <Avatar radius="xl" color="primary" variant="outline">
                      {date.getDate()}
                    </Avatar>
                  );
                }
                return <div>{date.getDate()}</div>;
              }}
            />
          </Center>
        </Grid.Col>
        <Grid.Col md={6}>
          <Table mt={"xl"}>
            <tbody>
              {listedEvents.map((event, index) => (
                <tr key={index}>
                  <td>
                    <Flex
                      direction={"column"}
                      justify={"center"}
                      align={"center"}
                    >
                      <Box
                        fz={24}
                        sx={(theme) => ({
                          lineHeight: "32px",
                          color: theme.colors.brand[6],
                        })}
                      >
                        {event.date.day}
                      </Box>
                      <Box fz={12}>{event.date.month}</Box>
                    </Flex>
                  </td>
                  <td>
                    <Box fz={16}>{event.description}</Box>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
