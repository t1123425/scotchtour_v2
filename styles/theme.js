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
  typography: {
    // fontFamily: "Spectral",
    fontFamily: "Amiri",
    // fontFamily: "Cormorant Garamond",
    // fontFamily: "Shippori Mincho",
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
    // h6: {
    //   fontFamily: "Fondamento",
    //   fontSize: "1.3rem",
    // },
    h6: {
      fontFamily: "Cormorant Unicase",
      fontSize: "1.3rem",
      fontWeight: "700",
    },
    // h6: {
    //   fontFamily: "Quintessential",
    //   fontSize: "1.3rem",
    // },
    // h6: {
    //   fontFamily: "Felipa",
    //   fontSize: "1.3rem",
    // },
    // h6: {
    //   fontFamily: "Nova Cut",
    //   fontSize: "1.3rem",
    // },
    // h6: {
    //   fontFamily: "Cinzel Decorative",
    //   fontSize: "1.3rem",
    // },
    // h6: {
    //   fontFamily: "Macondo",
    //   fontSize: "1.3rem",
    // },
  },
});
