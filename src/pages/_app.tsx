import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "../../theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    
    <ThemeProvider theme={darkTheme}>

      <CssBaseline />

        <Component {...pageProps} />

    </ThemeProvider>


  )
  
}
