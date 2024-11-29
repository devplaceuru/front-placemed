import {
  Container,
  Desktop,
  Title,
  ContentCards,
  Card,
  Icone,
  DataCard,
  TitleDataCard,
  CountDataCard,
  ContentDatas,
  CardPatientsConsults,
  TitlePatientsConsults,
  Table,
  Thead,
  Tbody,
} from "./style";
import { SideBarUser } from "../../components/SideBarUser";
import { PiBellBold, PiCalendarBlankBold, PiUserBold } from "react-icons/pi";

interface Patients {
  name: string;
  cpf: string;
  status: string;
}

interface Consults {
  name: string;
  specialty: string;
  status: string;
}

const listPatients: Patients[] = [
  { name: "Julian Schumm", cpf: "232.234.223-20", status: "Pré-cadastro" },
  { name: "Fred Mohr", cpf: "355.467.233-30", status: "Pré-cadastro" },
  { name: "Julius Bergstrom", cpf: "553.222.543-20", status: "Pré-cadastro" },
  { name: "Alfredo Zemlak", cpf: "232.486.424-20", status: "Pré-cadastro" },
  { name: "Jhon Doe", cpf: "895.234.223-20", status: "Pré-cadastro" },
  { name: "Julian Schumm", cpf: "232.234.223-20", status: "Pré-cadastro" },
  { name: "Fred Mohr", cpf: "355.467.233-30", status: "Pré-cadastro" },
  { name: "Julius Bergstrom", cpf: "553.222.543-20", status: "Pré-cadastro" },
  { name: "Alfredo Zemlak", cpf: "232.486.424-20", status: "Pré-cadastro" },
  { name: "Jhon Doe", cpf: "895.234.223-20", status: "Pré-cadastro" },
  { name: "Julian Schumm", cpf: "232.234.223-20", status: "Pré-cadastro" },
  { name: "Fred Mohr", cpf: "355.467.233-30", status: "Pré-cadastro" },
  { name: "Julius Bergstrom", cpf: "553.222.543-20", status: "Pré-cadastro" },
  { name: "Alfredo Zemlak", cpf: "232.486.424-20", status: "Pré-cadastro" },
  { name: "Jhon Doe", cpf: "895.234.223-20", status: "Pré-cadastro" },
  { name: "Julian Schumm", cpf: "232.234.223-20", status: "Pré-cadastro" },
  { name: "Fred Mohr", cpf: "355.467.233-30", status: "Pré-cadastro" },
  { name: "Julius Bergstrom", cpf: "553.222.543-20", status: "Pré-cadastro" },
  { name: "Alfredo Zemlak", cpf: "232.486.424-20", status: "Pré-cadastro" },
  { name: "Jhon Doe", cpf: "895.234.223-20", status: "Pré-cadastro" },
];

const listConsults: Consults[] = [
  { name: "Marty Lehner", specialty: "Clínico", status: "Concluído" },
  { name: "Elias Rau", specialty: "Cardiologista", status: "Concluído" },
  { name: "Ms. Kari Stamm", specialty: "Ortopedista", status: "Concluído" },
  { name: "Alma Johnston", specialty: "Pediatria", status: "Concluído" },
  { name: "Jane Doe", specialty: "Obstetria", status: "Concluído" },
  { name: "Marty Lehner", specialty: "Clínico", status: "Concluído" },
  { name: "Elias Rau", specialty: "Cardiologista", status: "Concluído" },
  { name: "Ms. Kari Stamm", specialty: "Ortopedista", status: "Concluído" },
  { name: "Alma Johnston", specialty: "Pediatria", status: "Concluído" },
  { name: "Jane Doe", specialty: "Obstetria", status: "Concluído" },
  { name: "Marty Lehner", specialty: "Clínico", status: "Concluído" },
  { name: "Elias Rau", specialty: "Cardiologista", status: "Concluído" },
  { name: "Ms. Kari Stamm", specialty: "Ortopedista", status: "Concluído" },
  { name: "Alma Johnston", specialty: "Pediatria", status: "Concluído" },
  { name: "Jane Doe", specialty: "Obstetria", status: "Concluído" },
  { name: "Marty Lehner", specialty: "Clínico", status: "Concluído" },
  { name: "Elias Rau", specialty: "Cardiologista", status: "Concluído" },
  { name: "Ms. Kari Stamm", specialty: "Ortopedista", status: "Concluído" },
  { name: "Alma Johnston", specialty: "Pediatria", status: "Concluído" },
  { name: "Jane Doe", specialty: "Obstetria", status: "Concluído" },
];

export function Dashboard() {
  return (
    <Container>
      <SideBarUser />
      <Desktop>
        <Title>Dashboard</Title>
        <ContentCards>
          <Card backgroundColor="#172554">
            <Icone>
              <PiUserBold size={50} color="#E5E7EB" />
            </Icone>
            <DataCard>
              <TitleDataCard>Pré-cadastros</TitleDataCard>
              <CountDataCard>03</CountDataCard>
            </DataCard>
          </Card>
          <Card backgroundColor="#1E40AF">
            <Icone>
              <PiCalendarBlankBold size={50} color="#E5E7EB" />
            </Icone>
            <DataCard>
              <TitleDataCard>Consultas</TitleDataCard>
              <CountDataCard>08</CountDataCard>
            </DataCard>
          </Card>
          <Card backgroundColor="#1D4ED8">
            <Icone>
              <PiBellBold size={50} color="#E5E7EB" />
            </Icone>
            <DataCard>
              <TitleDataCard>Notificações</TitleDataCard>
              <CountDataCard>02</CountDataCard>
            </DataCard>
          </Card>
        </ContentCards>

        <ContentDatas>
          <CardPatientsConsults>
            <TitlePatientsConsults>Novos Pacientes</TitlePatientsConsults>
            <Table>
              <Thead>
                <tr>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Status</th>
                </tr>
              </Thead>
              <Tbody>
                {listPatients.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.cpf}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </Tbody>
            </Table>
          </CardPatientsConsults>
          <CardPatientsConsults>
            <TitlePatientsConsults>Últimas Consultas</TitlePatientsConsults>
            <Table>
              <Thead>
                <tr>
                  <th>Nome</th>
                  <th>Especialidade</th>
                  <th>Status</th>
                </tr>
              </Thead>
              <Tbody>
                {listConsults.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.specialty}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </Tbody>
            </Table>
          </CardPatientsConsults>
        </ContentDatas>
      </Desktop>
    </Container>
  );
}
