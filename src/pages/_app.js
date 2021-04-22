import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
//import "../styles/main.css";
import { MDXProvider } from "@mdx-js/react";
import Layout from "../components/Layout"




export default function MyApp({ Component, pageProps }) {

  return (
    <React.Fragment>
      <Head>
        <title>CyVerse</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <MDXProvider>
            <Component {...pageProps} />
          </MDXProvider>
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}