import { Link } from "react-router-dom";
import { Container, Content, Title, Form, BtnLogin, Pass } from "./style";
import { PiEnvelope, PiLock } from "react-icons/pi";

export function LoginDash() {
  return (
    <Container>
      <Content>
        <Title>
          <label>Acesse sua conta</label>
        </Title>

        <Form>
          <div>
            <label>E-mail</label>
            <div className="input-data">
              <PiEnvelope size={24} />
              <input type="text" placeholder="Digite seu e-mail" />
            </div>
          </div>

          <div>
            <label>Senha</label>
            <div className="input-data">
              <PiLock size={24} />
              <input type="password" placeholder="Digite sua senha" />
            </div>
          </div>
        </Form>

        <Link to={"/dashboard"}>
          <BtnLogin>Login</BtnLogin>
        </Link>

        <Link to={"/resetPassword"}>
          <Pass>Esqueceu a senha?</Pass>
        </Link>
      </Content>
    </Container>
  );
}
