import React, { useState } from "react";
import { Container, createTheme, ThemeProvider, Grid } from "@material-ui/core";
import Header from "./components/Header";
import Routes from "./routes";

const App = () => {
  const [isLightTheme, setLightTheme] = useState(true);
  const theme = createTheme({
    palette: {
      palette: {
        primary: {
          main: isLightTheme ? "#fff" : "#000",
        },
        type: isLightTheme ? "light" : "dark",
      },
    },
  });

  const updateTheme = () => {
    setLightTheme((isLightTheme) => !isLightTheme);
  };
  return (
    <ThemeProvider theme={theme}>
      <Header isLightTheme={isLightTheme} updateTheme={updateTheme} />
      <Container maxWidth="lg" component="main">
        <Routes />
      </Container>
    </ThemeProvider>
  );
};

export default App;
