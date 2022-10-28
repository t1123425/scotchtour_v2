import React from "react";
import { Typography } from "@mui/material";
import ContainerBlock from "../components/ContainerBlock";

export default function Brands(pageProps) {
  return (
    <>
      <DrawerAppBar {...pageProps} />
      <Toolbar />
      <Typography>Famous Scotch Whisky Brands</Typography>
    </>
  );
}
