import { Container, ContentData, Title, Text, Input, BtnNext } from "./style";

export function NewQuery() {
  return (
    <Container>
      <Title>Nova Consulta</Title>

      <ContentData>
        <Text>Nome</Text>
        <Input type="text" placeholder="Digite seu nome" />
      </ContentData>

      <ContentData>
        <Text>Data</Text>
        <Input type="date" placeholder="00/00/0000" />
      </ContentData>

      <ContentData>
        <Text>Unidade</Text>
        <Input type="text" placeholder="Selecione a UBS" />
      </ContentData>

      <ContentData>
        <Text>Especialidade</Text>
        <Input type="text" placeholder="Selecione a especialidade" />
      </ContentData>

      <ContentData>
        <Text>Médico</Text>
        <Input type="text" placeholder="Selecione o médico" />
      </ContentData>

      <ContentData>
        <Text>Horário</Text>
        <Input type="text" placeholder="Selecione o horário disponível" />
      </ContentData>

      <BtnNext>Próximo</BtnNext>
    </Container>
  );
}
