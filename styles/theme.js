import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#01579b",
    },
    secondary: {
      main: "#4f83cc",
    },
    background: {
      // paper: "#fbf7f5",
      default: "#fbf7f5",
    },
    speyside: {
      main: "#bba22b",
    },
    highlands: {
      main: "#abb173",
    },
    lowlands: {
      main: "#818b59",
    },
    islands: {
      main: "#a58459",
    },
    islay: {
      main: "#819ca5",
    },
    campbeltown: {
      main: "#7d627e",
    },
  },
  typography: {
    fontFamily: "Spectral",
    fontSize: 16,
    h1: {
      fontFamily: "Fondamento",
    },
    h5: {
      fontFamily: "Fondamento",
    },
  },
});
