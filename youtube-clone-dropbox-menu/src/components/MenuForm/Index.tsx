import React from "react";
import { Container } from "./styles";
import {DropBoxLogo} from '../Section/styles'
import RedeSocial from "../RedeSocial/Index";

const MenuForm: React.FC = () => {
  return (<Container>

      <Navigation>
          <h1>
              <DropBoxLogo/>
              <span>DropBox</span>
          </h1>
          <button className="action--close">X</button>
      </Navigation>
      <Form>
          <span className="title">Registre-se</span>
          <span className="subtitle">Preencha o formulário abaixo</span>

          <input type="text" placeholder="Nome"/>
          <input type="text" placeholder="SobreNome"/>
          <input type="email" placeholder="E-Mail"/>
          <input type="password" placeholder="Senha"/>

          <button> Prosseguir</button>
          <span className="terms">
              Esta página esta sujeita à Política de privacidade e aos Termos de serviço
          </span>
      </Form>
      <RedeSocial type="Youtube" nome="Login com Youtube" url=""/>
      <RedeSocial type="Gmail" nome="Login com Gmail" url=""/>
  </Container>);
};

export default MenuForm;
