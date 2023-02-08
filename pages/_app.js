'use client';
import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
// tested from MUI/next.js tutorial
import PropTypes from "prop-types";
// import Head from "next/head";
// import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../styles/createEmotionCache";
import { StyledEngineProvider } from "@mui/material";
import DrawerAppBar from '../components/DrawerAppBar'
// tested from MUI/next.js tutorial
const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    // <CacheProvider value={emotionCache}>
    <StyledEngineProvider injectFirst>
      {/* cacheprovider and head tested from MUI/next.js tutorial */}
      {/* <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head> */}
      <ThemeProvider theme={theme}>
        <DrawerAppBar />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
  {
    /* </CacheProvider> */
  }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
