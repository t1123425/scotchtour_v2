import React from "react";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";
import { whatIsContent } from "../constants/siteContent";
import ScrollBox from "../components/ScrollBox";

export default function WhatIs(pageProps) {
  const title = "What is Scotch Whisky?";
  return (
    <>
      <DrawerAppBar title={navItems[1].title} />
      <ScrollBox content={whatIsContent} />
    </>
  );
}
