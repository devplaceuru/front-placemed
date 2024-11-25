import { Link } from "react-router-dom";
import {
  Container,
  ContentData,
  Area,
  Title,
  Title2,
  Text,
  BtnNext,
} from "./style";

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

      <Area onClick={() => console.log("clicou!")}>
        <Title2 color={"red"}>Consultas realizadas</Title2>
        <PiCaretDown size={24} rotate={80} />
      </Area>

      <Link to={"/"}>
        <BtnNext>Próximo</BtnNext>
      </Link>
    </Container>
  );
}
