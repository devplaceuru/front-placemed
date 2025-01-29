import { Container, Image, ItemMenu, WrapperMenu } from "./style";
import Logo from "./../../assets/logo.svg";

export function TopBar() {
  return (
    <Container>
      <Image src={Logo} />
      <WrapperMenu>
        <ItemMenu to={"/"}>Início</ItemMenu>
        <ItemMenu to={"/newConsult"}>Nova Consulta</ItemMenu>
        <ItemMenu to={"/viewConsult"}>Visualizar Consulta</ItemMenu>
      </WrapperMenu>
    </Container>
  );
}
