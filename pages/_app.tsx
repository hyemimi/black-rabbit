import Header from "@/layout/Header";
import Layout from "@/layout/Layout";
import { GlobalStyle } from "@/styles/GlobalStyle";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
