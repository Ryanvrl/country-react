import { BrowserRouter } from "react-router-dom";
import { Header } from "./styled/header";
import { AppRoutes } from "./pages/routes";
import { createGlobalStyle } from "styled-components";
import { ThemeContext, ThemeProvider } from "./components/contexts/theme-context";
import { useContext } from "react";


function App() {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <ThemeProvider>
            <GlobalStyle />
                <BrowserRouter>
                    <Header />
                    <AppRoutes />
                </BrowserRouter>
            </ThemeProvider>
        </>
    )
}

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
    }

    body {
        height: 100vh;
      }

      #root {
        min-height: 100vh; 
      }
`

export default App;
