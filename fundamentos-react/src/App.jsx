import './App.css'
import React from 'react'
import Primeiro from './basicos/Primeiro'

import ComParametro from './basicos/ComParametro'
import ComFilhos from './basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './basicos/Repeticao'
import Condicional from './basicos/Condicional'
import CondicionalComIf from './basicos/CondicionalComIf'

export default props =>(
    <div className="App">
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro/>
        </Card>
        <Card titulo="#02 - Componente Com Parametro">
            <ComParametro titulo="Meu titulo" subtitulo="Meu subtitulo component"/>
        </Card>
        <Card titulo="#03 - Componente com Filhos">
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
        </Card>
        <Card titulo="#04 - Repetição - Listagem de dados">
            <Repeticao/>
        </Card>
        <Card titulo="#05 - Condicional">
            <Condicional numero={105}/>
        </Card>
        <Card titulo="#06 - Condicional Com IF">
            <CondicionalComIf numero={10}/>
        </Card>
    </div>
)