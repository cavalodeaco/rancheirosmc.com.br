import { Highlight, Text } from "@mantine/core";

export default function RancheirosText({
  children,
  highlight = [],
  mt = "md",
}: {
  children: string;
  highlight?: string[];
  mt?: string | number;
}) {
  return (
    <Text color="dimmed" mt={mt}>
      <Highlight
        highlight={highlight}
        highlightStyles={(theme) => ({
          backgroundColor: theme.colors.brand[5],
          fontWeight: 700,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        })}
      >
        {children}
      </Highlight>
    </Text>
  );
}
