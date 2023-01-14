import React from "react";
import CardPage from "../components/CardPage";
import { navItems } from "../constants/siteContent";
import DrawerAppBar from "../components/DrawerAppBar";
import { brandCards } from "../constants/siteContent";

export default function Brands(pageProps) {
  return (
    <>
      <DrawerAppBar title={navItems[5].title} />
      <CardPage content={brandCards} />
    </>
  );
}
