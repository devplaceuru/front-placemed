import { Container, Image, BtnNewQuery, BtnViewQuery } from "./style";
import Logo from "./../../assets/logo.svg";


export function Login() {
  return (
    <Container>
      <Image src={Logo} />

      
      <BtnNewQuery to={"/newConsult"}>Nova Consulta </BtnNewQuery>
    

      
      <BtnViewQuery to={"/viewConsult"}>Visualizar Consulta</BtnViewQuery>
    </Container>
  );
}
