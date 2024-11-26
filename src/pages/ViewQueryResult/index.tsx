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

import { PiCaretDown } from "react-icons/pi";
import { useState } from "react";

export function ViewQueryResult() {
  const [onQueryDone, setOnQueryDone] = useState(false);

  return (
    <Container>
      <Title>Consultas Agendadas</Title>
      <ContentData>
        <Text>Clínico Geral</Text>
        <Text>Unidade 01</Text>
        <Text>R. Endereço aqui</Text>
        <Text>22/11/2024 ás 8:00</Text>
      </ContentData>

      <Area isOn={onQueryDone} onClick={() => setOnQueryDone(!onQueryDone)}>
        <Title2 color={"red"}>Consultas realizadas</Title2>
        <PiCaretDown size={24} />
      </Area>

      <Link to={"/"}>
        <BtnNext>Próximo</BtnNext>
      </Link>
    </Container>
  );
}
