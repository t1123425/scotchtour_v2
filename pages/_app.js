import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#01579b",
//     },
//     secondary: {
//       main: "#4f83cc",
//     },
//     background: {
//       // paper: "#fbf7f5",
//       default: "#fbf7f5",
//     },
//     speyside: {
//       main: "#bba22b",
//     },
//     highlands: {
//       main: "#abb173",
//     },
//     lowlands: {
//       main: "#818b59",
//     },
//     islands: {
//       main: "#a58459",
//     },
//     islay: {
//       main: "#819ca5",
//     },
//     campbeltown: {
//       main: "#7d627e",
//     },
//   },
// });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
