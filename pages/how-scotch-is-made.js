import React from "react";
import { navItems } from "../constants/siteContent";
import DrawerAppBar from "../components/DrawerAppBar";
import ScrollPage from "../components/ScrollPage";
import { processContent } from "../constants/siteContent";

export default function Process(pageProps) {
  const title = "How Scotch is Made";
  return (
    <>
      <DrawerAppBar title={navItems[3].title} />
      <ScrollPage content={processContent} />
    </>
  );
}
