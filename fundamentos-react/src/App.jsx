import "./App.css";
import React, { useState } from "react";
import Primeiro from "./basicos/Primeiro";

import ComParametro from "./basicos/ComParametro";
import ComFilhos from "./basicos/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./basicos/Repeticao";
import Condicional from "./basicos/Condicional";
import CondicionalComIf from "./basicos/CondicionalComIf";
import Switch from "./components/switch/Switch";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import MegaSena from "./components/megasena/MegaSena";
import ApiIntegracao from "./components/integracao/ApiIntegracao";

export default (props) => {
  const [value, setValue] = useState(false);

  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#01 - Primeiro Componente" color="#E94C6F">
          <Primeiro />
        </Card>
        <Card titulo="#02 - Componente Com Parametro" color="#FA6900">
          <ComParametro
            titulo="Meu titulo"
            subtitulo="Meu subtitulo component"
          />
          <Switch
            isOn={value}
            onColor="#06d6a0"
            handleToggle={() => setValue(!value)}
          />
        </Card>
        <Card titulo="#03 - Componente com Filhos" color="#E8B71A">
          <ComFilhos>
            <ul>
              <li>Ana</li>
              <li>Bia</li>
              <li>Carlos</li>
              <li>Daniel</li>
            </ul>
          </ComFilhos>
        </Card>
        <Card titulo="#04 - Repetição - Listagem de dados" color="#D96459">
          <Repeticao />
        </Card>
        <Card titulo="#05 - Condicional" color="#FFC33C">
          <Condicional numero={105} />
        </Card>
        <Card titulo="#06 - Condicional Com IF" color="#DC403B">
          <CondicionalComIf numero={10} />
        </Card>
        <Card titulo="#07 - Comunicação Direta" color="#DC403B">
          <Pai />
        </Card>
        <Card titulo="#08 - Comunicação Indireta" color="#78C0A8">
          <Super sobrenome="Santos" />
        </Card>
        <Card titulo="#09 - Input" color="#FF432E">
          <Input />
        </Card>
        <Card titulo="#10 - Contador"color="#9B539C">
          <Contador  passo={10} valor={100} />
        </Card>
        <Card titulo="#11 - Gerador MegaSena"color="#260126">
          <MegaSena qtddeNumero={8}></MegaSena>
        </Card>
        <Card titulo="#12 - Consumindo API Github"color="#83AA30">
          <ApiIntegracao></ApiIntegracao>
        </Card>
      </div>
    </div>
  );
};
