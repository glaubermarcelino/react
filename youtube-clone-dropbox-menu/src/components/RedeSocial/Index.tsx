import React from 'react';
// import { Container } from './styles';
interface Redesocial{
    nome:string;
    type: 'Youtube' | 'Gmail';
    url: string;
}
const RedeSocial: React.FC<Redesocial> = () => {
  return (<>
  <div className="Container">

  </div>
            </>);
}

export default RedeSocial;