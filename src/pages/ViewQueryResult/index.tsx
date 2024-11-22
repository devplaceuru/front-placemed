import { Container, ContentData, Title, Text, BtnNext } from "./style";

import { PiMapPin, PiClockAfternoon, PiCaretDown } from "react-icons/pi";

export function ViewQueryResult() {
  return (
    <Container>
      <Title>Consultas Agendadas</Title>
      <ContentData>
        <Text>Clínico Geral</Text>
        <Text>Unidade 01</Text>
        <Text>R. Endereço aqui</Text>
        <Text>22/11/2024 ás 8:00</Text>
      </ContentData>

      <Title>Consultas realizadas</Title>
      <PiCaretDown size={24} />

      <BtnNext>Próximo</BtnNext>
    </Container>
  );
}
