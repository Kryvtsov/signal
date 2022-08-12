import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { theme } from "./constants/theme";

function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column">
          <Header />
          <Main />
          <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
