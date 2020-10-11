import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Section from "./components/Section";
import data from "./data/Index";
import SideMenu from "./components/SideMenu/Index";
import MenuForm from "./components/MenuForm/Index";

function App() {
  return (
    <>
      {data.map((sec) => {
        return (
          <Section
            key={sec.title}
            variant="blue"
            title={sec.title}
            description={sec.description}
          />
        );
      })}
      <SideMenu>
        <MenuForm />
      </SideMenu>
      <GlobalStyles />
    </>
  );
}

export default App;
