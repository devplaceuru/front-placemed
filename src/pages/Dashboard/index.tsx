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
} from "./style";
import { SideBarUser } from "../../components/SideBarUser";
import { PiBellBold, PiCalendarBlankBold, PiUserBold } from "react-icons/pi";

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
          <CardPatientsConsults></CardPatientsConsults>
          <CardPatientsConsults></CardPatientsConsults>
        </ContentDatas>
      </Desktop>
    </Container>
  );
}
