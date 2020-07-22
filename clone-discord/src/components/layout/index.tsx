import React from "react";
import { Grid } from "./style";
import ServerList from "../ServerList/index";
import ServerName from "../ServerName/index";
import ChannelInfo from "../ChannelInfo/index";

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName/>
      <ChannelInfo/>
    </Grid>
  );
};

export default Layout;
