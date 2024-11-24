import {
  Container,
  Content,
  ContentRadio,
  Title,
  TitleRadio,
  Input,
} from "./style";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ModalNewQuery({ isOpen, setModalOpen }: any) {
  // eslint-disable-next-line no-constant-condition
  if (isOpen) {
    return (
      <Container>
        <Content>
          <Title>Unidade</Title>
          <ContentRadio>
            <TitleRadio>Unidade 1</TitleRadio>
            <Input type="radio" checked onClick={setModalOpen} />
          </ContentRadio>
          <ContentRadio>
            <TitleRadio>Unidade 2</TitleRadio>
            <Input type="radio" onClick={setModalOpen} />
          </ContentRadio>
          <ContentRadio>
            <TitleRadio>Unidade 3</TitleRadio>
            <Input type="radio" onClick={setModalOpen} />
          </ContentRadio>
        </Content>
      </Container>
    );
  }

  return null;
}
