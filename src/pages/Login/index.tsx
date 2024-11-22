import { Container, Image, BtnNewQuery, BtnViewQuery } from "./style";
import Logo from "./../../assets/logo.svg";

export function Login() {
  return (
    <Container>
      <Image src={Logo} />
      <BtnNewQuery>Nova Consulta</BtnNewQuery>
      <BtnViewQuery>Visualizar Consulta</BtnViewQuery>
    </Container>
  );
}
