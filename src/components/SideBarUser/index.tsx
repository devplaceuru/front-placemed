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

export function SideBarUser() {
  return (
    <Container>
      <Image src={Logo} />
      <Menu>
        <ItemsMenu>
          <ItemMenu>
            <PiBrowserBold size={24} />
            Dashboard
          </ItemMenu>
          <ItemMenu>
            <PiUserBold size={24} />
            Pacientes
          </ItemMenu>
          <ItemMenu>
            <PiUserCircleBold size={24} />
            Médico
          </ItemMenu>
          <ItemMenu>
            <PiCalendarBlankBold size={24} />
            Agenda
          </ItemMenu>
          <ItemMenu>
            <PiGearBold size={24} />
            Configurações
          </ItemMenu>
          <ItemMenu>
            <PiQuestionBold size={24} />
            Ajuda
          </ItemMenu>
        </ItemsMenu>
      </Menu>
    </Container>
  );
}
