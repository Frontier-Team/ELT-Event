import { Global, ThemeProvider, css } from "@emotion/react";
import React from "react";

export const theme = {
  colors: {
    teal: "#006A4D",
    white: "#FFFFFF",
    grey: "#F8F8F8",
    turquoise: "#6CF479",
    turquoiseShade: "#6CF479",
    red: "#FF222F",
    lilac: "#323233",
    lilacShade: "#000",
    darkPink: "#FFCCD9",
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
  },
};

export const globalStyles = css`
  html,
  body,
  #root {
    height: 100%;
    margin: 0;
  }

  body {
    font-family: "Courier New", Courier, monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a {
    font-family: "Pixelify Sans", sans-serif;
    letter-spacing: 1px;
  }
`;

interface Props {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};
