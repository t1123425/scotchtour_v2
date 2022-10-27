import React from "react";
import { Toolbar, Typography } from "@mui/material";
import DrawerTest from "../components/DrawerTest";
import DrawerAppBar from "../components/DrawerAppBar";

export default function Home(pageProps) {
  return (
    <>
      <DrawerAppBar {...pageProps} />
      <Toolbar />
      <Typography>Hello World!</Typography>
    </>
  );
}
