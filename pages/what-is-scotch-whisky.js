import React from "react";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";
import ScrollPage from "../components/ScrollPage";
import { whatIsContent } from "../constants/siteContent";

export default function WhatIs(pageProps) {
  const title = "What is Scotch Whisky?";
  console.log(whatIsContent);
  return (
    <>
      <DrawerAppBar title={navItems[1].title} />
      <ScrollPage content={whatIsContent} />
    </>
  );
}
