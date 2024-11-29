import { Container, Image, Menu, ItemsMenu, ItemMenu } from "./style";
import Logo from "./../../assets/logo.svg";
import {
  PiBrowserBold,
  PiUserBold,
  PiUserCircleBold,
  PiCalendarBlankBold,
  PiGearBold,
  PiQuestionBold,
} from "react-icons/pi";
import { Link } from "react-router-dom";

export function SideBarUser() {
  return (
    <Container>
      <Image src={Logo} />
      <Menu>
        <ItemsMenu>
          <Link to={"/dashboard"}>
            <ItemMenu isActivated={true}>
              <PiBrowserBold size={24} />
              Dashboard
            </ItemMenu>
          </Link>

          <Link to={"/patient"}>
            <ItemMenu isActivated={false}>
              <PiUserBold size={24} />
              Pacientes
            </ItemMenu>
          </Link>
          <Link to={"/doctor"}>
            <ItemMenu isActivated={false}>
              <PiUserCircleBold size={24} />
              Médico
            </ItemMenu>
          </Link>
          <Link to={"/agenda"}>
            <ItemMenu isActivated={false}>
              <PiCalendarBlankBold size={24} />
              Agenda
            </ItemMenu>
          </Link>
          <Link to={"/settings"}>
            <ItemMenu isActivated={false}>
              <PiGearBold size={24} />
              Configurações
            </ItemMenu>
          </Link>
          <Link to={"/help"}>
            <ItemMenu isActivated={false}>
              <PiQuestionBold size={24} />
              Ajuda
            </ItemMenu>
          </Link>
        </ItemsMenu>
      </Menu>
    </Container>
  );
}
