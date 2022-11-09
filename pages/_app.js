import React from "react";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
