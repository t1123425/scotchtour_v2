import React from "react";
import Head from "next/head";
import DrawerAppBar from "./DrawerAppBar";
import { Box, Toolbar } from "@mui/material";

export default function ContainerBlock({ children, ...customMeta }) {
  const meta = {
    title: "Scotch Whisky Tour",
    icon: "/whisky-still.png",
    ...customMeta,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href={meta.icon} />
      </Head>
      <DrawerAppBar />
      <Toolbar />
      <Box>
        <div>{children}</div>
      </Box>
    </>
  );
}
