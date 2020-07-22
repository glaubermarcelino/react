import React,{Image} from 'react'

import {Container} from './styles'
import logo from '../../assets/header_topo.jpg'

export default function Header(){
    return (
        
        <Container>
            <Image source={logo}/>
            <h1>YelloFly</h1>
        </Container>
        
    )
}