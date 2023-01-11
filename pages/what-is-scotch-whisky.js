import React from "react";
import { navItems } from "../constants/siteContent";
import DrawerAppBar from "../components/DrawerAppBar";
import ScrollPage from "../components/ScrollPage";
import { whatIsContent } from "../constants/siteContent";
import SearchInputScroll from "../components/SearchInputScroll";

export default function WhatIs(pageProps) {
  return (
    <>
      <DrawerAppBar title={navItems[1].title} />
      <SearchInputScroll />
      <ScrollPage content={whatIsContent} />
    </>
  );
}
