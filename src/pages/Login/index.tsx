import {
  Container,
  Image,
  BtnNewQuery,
  BtnViewQuery,
  Content,
  BtnViewConsultConfirm,
} from "./style";
import Logo from "./../../assets/logo.svg";
import { Footer } from "../../components/Footer";
import { TopBar } from "../../components/TopBar";
import { PiClipboardTextBold, PiStethoscopeBold } from "react-icons/pi";

export function Login() {
  return (
    <Container>
      <TopBar />
      <Content>
        <Image src={Logo} />
        <BtnNewQuery to={"/newConsult"}>
          <PiStethoscopeBold size={52} />
          Nova Consulta
        </BtnNewQuery>

        <BtnViewQuery to={"/viewConsult"}>Visualizar Consulta</BtnViewQuery>

        <BtnViewConsultConfirm to={"/viewConsultConfirm"}>
          <PiClipboardTextBold size={52} />
          Consultas Agendadas
        </BtnViewConsultConfirm>
      </Content>

      <Footer />
    </Container>
  );
}
