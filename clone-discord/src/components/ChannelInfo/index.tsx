import React from "react";
import { Container, HashTagIcon, Title,Separator,Description  } from "./style";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashTagIcon/>
      <Title>Chat-Livre</Title>
      <Separator/>
      <Description>Canal Aberto para conversas</Description>
    </Container>
  );
};

export default ChannelInfo;
