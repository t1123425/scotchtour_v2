import React from "react";

import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";
import ScrollPage from "../components/ScrollPage";

export default function WhatIs(pageProps) {
  const title = "What is Scotch Whisky?";
  return (
    <>
      <DrawerAppBar title={navItems[1].title} />
      <ScrollPage />
    </>
  );
}
