import React from "react";

import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";
import ScrollPage2 from "../components/ScrollPage2";

export default function WhatIs(pageProps) {
  const title = "What is Scotch Whisky?";
  return (
    <>
      <DrawerAppBar title={navItems[1].title} />
      <ScrollPage2 />
    </>
  );
}
