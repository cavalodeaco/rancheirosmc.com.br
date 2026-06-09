import { supabase } from "../supabase";
import { useState, useEffect } from "react";
import {
  Button,
  Container,
  Textarea,
  Title,
  TextInput,
  Text,
} from "@mantine/core";

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
      .select("*")
      .order("id", { ascending: false });

    console.log("Feedbacks:", data);
    console.log("Erro:", error);

    if (error) {
      console.error("Erro ao buscar feedbacks:", error);
      return;
    }

    setFeedbacks(data || []);
  }

  async function enviarFeedback() {
    if (!nome.trim() || !feedback.trim()) {
      alert("Preencha o nome e o feedback.");
      return;
    }

    const { error } = await supabase.from("feedback").insert([
      {
        nome: nome,
        mensagem: feedback,
      },
    ]);

    if (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao salvar feedback. Veja o console (F12).");
      return;
    }

    setNome("");
    setFeedback("");

    await fetchFeedbacks();

    alert("Feedback enviado com sucesso!");
  }

  return (
    <Container py="xl" mt={100}>
      <Title order={2} mb="md" c="#D2AD60">
        Envie seu Feedback
      </Title>

      <TextInput
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.currentTarget.value)}
        mb="md"
      />

      <Textarea
        placeholder="Digite seu feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.currentTarget.value)}
        minRows={4}
        mb="md"
      />

      <Button color="#D2AD60" onClick={enviarFeedback}>
        Enviar
      </Button>

      <div
        style={{
          marginTop: 40,
          backgroundColor: "#25262B",
          border: "1px solid #373A40",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <Title order={3} mb="lg" c="#D2AD60">
          Feedbacks Recebidos
        </Title>

        {feedbacks.length === 0 ? (
          <Text c="dimmed">
            Nenhum feedback enviado ainda.
          </Text>
        ) : (
          feedbacks.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "12px",
                padding: "16px 0",
                borderBottom: "1px solid #373A40",
              }}
            >
              {/* Inicial do nome */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#D2AD60",
                  color: "#25262B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  flexShrink: 0,
                }}
              >
                {item.nome?.charAt(0).toUpperCase()}
              </div>

              {/* Conteúdo do comentário */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "4px",
                  }}
                >
                  <Text fw={700} c="white">
                    {item.nome}
                  </Text>

                  <Text size="xs" c="dimmed">
                    {item.data
                      ? new Date(item.data).toLocaleString("pt-BR")
                      : ""}
                  </Text>
                </div>

                <Text c="gray.3">
                  {item.mensagem}
                </Text>
              </div>
            </div>
          ))
        )}
      </div>
    </Container>
  );
}