import React from "react";
import { navItems } from "../constants/siteContent";
import DrawerAppBar from "../components/DrawerAppBar";
import ScrollPage from "../components/ScrollPage";
import { whatIsContent } from "../constants/siteContent";

export default function WhatIs(pageProps) {
  return (
    <>
      <DrawerAppBar title={navItems[1].title} />
      <ScrollPage content={whatIsContent} />
    </>
  );
}
