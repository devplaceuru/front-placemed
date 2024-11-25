import { Container, Image, BtnNewQuery, BtnViewQuery } from "./style";
import Logo from "./../../assets/logo.svg";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <Container>
      <Image src={Logo} />

      <Link to={"/newQuery"}>
        <BtnNewQuery>Nova Consulta </BtnNewQuery>
      </Link>

      <Link to={"/viewQuery"}>
        <BtnViewQuery>Visualizar Consulta</BtnViewQuery>
      </Link>
    </Container>
  );
}
