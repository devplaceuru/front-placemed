import { Container, Image, ContentData, Text, Input, BtnNext } from "./style";
import Logo from "./../../assets/logo.svg";

export function ViewQuery() {
  return (
    <Container>
      <Image src={Logo} />
      <ContentData>
        <Text>CPF</Text>
        <Input type="text" placeholder="000.000.000-00" />
      </ContentData>

      <ContentData>
        <Text>Nome</Text>
        <Input type="text" placeholder="Digite seu nome" />
      </ContentData>

      <BtnNext>Próximo</BtnNext>
    </Container>
  );
}
