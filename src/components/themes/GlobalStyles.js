import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.20s linear;
  }
  header.MuiAppBar-colorPrimary {
    background-color: ${({ theme }) => theme.appBarBackground};
    color: ${({ theme }) => theme.cardText};
  }
  .MuiDrawer-paper {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.background};
  }
  .MuiBottomNavigation-root {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.background};
  }
  .MuiBottomNavigationAction-root {
    color: ${({ theme }) => theme.icon};
  }
  .MuiListItemIcon-root {
    color: ${({ theme }) => theme.icon};
  }
  .MuiCardContent-root {
    background-color: ${({ theme }) => theme.cardHeader};
  }
  #add-car-button {
    color: ${({ theme }) => theme.addCarButtonText};
    background: ${({ theme }) => theme.addCarButtonBackground};
  }
  #add-car-button:hover {
    background: ${({ theme }) => theme.addCarButtonHover};
  }
  #card-nav {
    .MuiPaper-root {
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.cardHeaderText};
    }
  }
  main {
    background: ${({ theme }) => theme.mainContentBackground};
    .MuiPaper-root {
      color: ${({ theme }) => theme.cardText}
    }
  }
  .MuiDivider-root {
    background: ${({ theme }) => theme.hr};
  }
  .MuiTypography-h1 {
    font-size: 1.5rem !important;
    font-weight: 700 !important;
    color: ${({ theme }) => theme.h1};
  }
`;
