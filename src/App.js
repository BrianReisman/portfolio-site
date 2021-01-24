import React from "react";
import "./App.css";

//Components
import Sidebar from "./components/SideBar/Sidebar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Now from "./components/Now/Now";
import Contact from "./components/Contact/Contact";

import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

const AppStyles = styled.div`
  box-sizing: border-box;

  display: flex;
  * {
    box-sizing: border-box;
    /* border: 1px dotted tomato; */
  }
  .right-pane {
    box-sizing: border-box;
    width: 100%;
    flex: 1 1 0.6;
    height: 99vh; /*//!It seems 100vh brings on scroll bar */
  }
`;

function App() {
  return (
    <AppStyles>
      <Sidebar />
      <div className="right-pane">
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/now" component={Now} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </AppStyles>
  );
}

export default App;
