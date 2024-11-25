import {
  Container,
  ContentForm,
  Title,
  Text,
  Input,
  BtnNext,
  ContentTitle,
} from "./style";

import Modal from "./../../components/ModalNewQuery";
import { useState } from "react";
import { Link } from "react-router-dom";

export function NewQuery() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
      <ContentTitle>
        <Title>Nova Consulta</Title>
      </ContentTitle>

      <ContentForm>
        <Text>Nome</Text>
        <Input type="text" placeholder="Digite seu nome" />
      </ContentForm>

      <ContentForm>
        <Text>Data</Text>
        <Input type="date" placeholder="00/00/0000" />
      </ContentForm>

      <ContentForm>
        <Text>Unidade</Text>
        <Input
          type="text"
          placeholder="Selecione a UBS"
          onClick={() => setOpenModal(true)}
        />
      </ContentForm>

      <ContentForm>
        <Text>Especialidade</Text>
        <Input type="text" placeholder="Selecione a especialidade" />
      </ContentForm>

      <ContentForm>
        <Text>Médico</Text>
        <Input type="text" placeholder="Selecione o médico" />
      </ContentForm>

      <ContentForm>
        <Text>Horário</Text>
        <Input type="text" placeholder="Selecione o horário disponível" />
      </ContentForm>

      <Link to={"/viewQueryResult"}>
        <BtnNext>Próximo</BtnNext>
      </Link>
    </Container>
  );
}
