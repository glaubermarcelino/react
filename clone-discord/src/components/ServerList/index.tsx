import React from "react";
import { Container ,Separator} from "./style";
import ServerButton from '../ServerButton/Index'

const ServerList: React.FC = () => {
  return (
      <Container>
          <ServerButton isHome/>
          <Separator/>
          <ServerButton hasNotifications/>
          <ServerButton mentions={3}/>
          <ServerButton/>
          <ServerButton/>
          <ServerButton/>
          <ServerButton mentions={30}/>
          <ServerButton/>
          <ServerButton/>
          <ServerButton/>
          <ServerButton hasNotifications/>
          <ServerButton hasNotifications/>
      </Container>
      
  );
};

export default ServerList;
