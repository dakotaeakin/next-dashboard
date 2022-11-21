import "../styles/globals.css";
import { ColorModeContext, useMode } from "../theme";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Topbar from "../components/global/Topbar";
import SideNavbar from "../components/global/Sidebar";
// import { ProSidebarProvider } from "react-pro-sidebar";

function MyApp({ Component, pageProps }) {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="app">
          <CssBaseline />
          <SideNavbar />
          <main className="content">
            <Topbar />
            <Component {...pageProps} />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default MyApp;
