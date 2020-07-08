import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/themes/GlobalStyles";
import { lightTheme, darkTheme } from "./components/themes/Themes";

import { UserContext } from "./context/user-context";
import './App.css';

function App() {
  const [theme, setTheme] = React.useState("dark");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [state, setState] = React.useState({
    scCode: '',
    updateScCode
  });

  function updateScCode(code) {
    setState({ ...state, scCode: code });
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <UserContext.Provider value={state}>
        <Router>
          <AppWithRouterAccess />
        </Router>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
