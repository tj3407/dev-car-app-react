import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/themes/GlobalStyles";
import { lightTheme, darkTheme } from "./components/themes/Themes";

import './App.css';

function App() {
  const [theme, setTheme] = React.useState("dark");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <AppWithRouterAccess />
      </Router>
    </ThemeProvider>
  );
}

export default App;
