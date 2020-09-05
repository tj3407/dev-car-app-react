import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/themes/GlobalStyles";
import { lightTheme, darkTheme } from "./components/themes/Themes";

import { UserContextProvider } from "./context/user-context";
import './App.css';

function App() {
  const [theme, setTheme] = React.useState("dark");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // const [state, setState] = React.useState({
  //   scCode: '',
  //   vehicles: [],
  //   profile: {},
  //   updateContext
  // });

  // function updateContext(key, value) {
  //   console.log(UserContext)
  //   console.log(key, value)
  //   setState({ ...state, [key]: value });
  // }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <UserContextProvider>
        <Router>
          <AppWithRouterAccess />
        </Router>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
