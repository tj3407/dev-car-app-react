import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.20s linear;
  }
  .MuiDrawer-paper {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.background};
  }
  .MuiListItemIcon-root {
    color: ${({ theme }) => theme.icon};
  }
  .MuiCardContent-root {
    background-color: ${({ theme }) => theme.cardHeader};
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
`;
