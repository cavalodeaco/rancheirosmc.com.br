import { supabase } from "../supabase";
import { useState, useEffect } from "react";
import { Button, Container, Textarea, Title } from "@mantine/core";

export default function Feedback() {
  const [nome, setNome] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbacks, setFeedbacks] = useState<any[]>([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  async function fetchFeedbacks() {
    const { data, error } = await supabase
      .from("feedback")
      .select("*");

    if (error) {
      console.log(error);
      return;
    }

    setFeedbacks(data || []);
  }

  async function enviarFeedback() {
    const { data, error } = await supabase
      .from("feedback")
      .insert({
        nome: nome,
        message: feedback,
      })
      .select();

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (!error) {
      setNome("");
      setFeedback("");
      fetchFeedbacks(); // atualiza lista
    }
  }

  return (
    <Container py="xl" mt={100}>
      <Title order={2} mb="md" c="red">
        Envie seu Feedback
      </Title>

      <input
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <Textarea
        placeholder="Digite seu feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        minRows={4}
        mb="md"
      />

      <Button color="red" onClick={enviarFeedback}>
        Enviar
      </Button>

      <div style={{ marginTop: 30 }}>
        {feedbacks.map((item: any) => (
          <div key={item.id}>
            <h3>{item.nome}</h3>
            <p>{item.message}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}