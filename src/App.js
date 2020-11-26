import React from "react";
import "./App.css";

//Components
import Sidebar from "./components/SideBar/Sidebar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Now from "./components/Now/Now";
import Contact from "./components/Contact/Contact";

import styled from "styled-components";
import { Route } from "react-router-dom";

const AppStyles = styled.div`
  display: flex;
  /* justify-content: center; */
`;

function App() {
  return (
    <AppStyles>
      <Sidebar />
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/now" component={Now} />
      <Route path="/contact" component={Contact} />
    </AppStyles>
  );
}

export default App;
