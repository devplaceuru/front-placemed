import { Link } from "react-router-dom";
import { Container, BtnHome, Title, Message } from "./style";

export function NewQueryScheduled() {
  return (
    <Container>
      <Title>Agendamento Realizado</Title>
      <Message>
        Seu agendamento foi concluído com sucesso! Por favor, compareça à UBS
        selecionada para confirmar sua consulta com pelo menos um dia de
        antecedência. Aguardamos você!
      </Message>
      <Link to={"/viewConsultConfirm"}>
        <BtnHome>Início</BtnHome>
      </Link>
    </Container>
  );
}
