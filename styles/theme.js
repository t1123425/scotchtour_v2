import { createTheme } from "@mui/material";
import { Amiri, Fondamento, Cormorant_Unicase } from "@next/font/google";

const amiri = Amiri({ weight: "400" });
const fondamento = Fondamento({ weight: "400" });
const cormorant = Cormorant_Unicase({ weight: "400" });

export const theme = createTheme({
  typography: {
    fontFamily: amiri.style.fontFamily,
    fontSize: 16,
    h1: {
      fontFamily: fondamento.style.fontFamily,
    },
    h4: {
      fontFamily: fondamento.style.fontFamily,
    },
    h5: {
      fontFamily: fondamento.style.fontFamily,
    },
    h6: {
      fontFamily: cormorant.style.fontFamily,
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
