import {
  Container,
  Image,
  ContentData,
  Title,
  Text,
  Input,
  BtnNext,
} from "./style";
import Logo from "./../../assets/logo.svg";

export function ViewQueryResult() {
  return (
    <Container>
      <Title>Consultas Agendadas</Title>
      <ContentData></ContentData>

      <BtnNext>Próximo</BtnNext>
    </Container>
  );
}
