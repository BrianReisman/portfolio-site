import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


//*Brian's imports
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from './styled-components/theme';

ReactDOM.render(
  <BrowserRouter>
  <ThemeProvider theme={theme}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
