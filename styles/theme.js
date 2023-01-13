import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Amiri",
    fontSize: 16,
    h1: {
      fontFamily: "Fondamento",
    },
    h4: {
      fontFamily: "Fondamento",
    },
    h5: {
      fontFamily: "Fondamento",
    },
    h6: {
      fontFamily: "Cormorant Unicase",
      fontSize: "1.3rem",
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      main: "#01579b",
    },
    secondary: {
      main: "#4f83cc",
    },
    background: {
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
      text: "#ffffff",
    },
    islands: {
      main: "#a58459",
      text: "#ffffff",
    },
    islay: {
      main: "#819ca5",
      text: "#ffffff",
    },
    campbeltown: {
      main: "#7d627e",
      text: "#ffffff",
    },
  },
});
