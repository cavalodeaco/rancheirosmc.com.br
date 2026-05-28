import { Button, Container, TextInput, Textarea, Title } from "@mantine/core";

export default function Feedback() {
  return (
    <Container py="xl">
      <Title order={2} mb="md" color="red">
        Envie seu Feedback
      </Title>

      <TextInput
        placeholder="Seu nome"
        mb="md"
      />

      <Textarea
        placeholder="Digite seu feedback"
        minRows={4}
        mb="md"
      />

      <Button color="red">
        Enviar
      </Button>
    </Container>
  );
}