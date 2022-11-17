import React from "react";
import CardPage from "../components/CardPage";
import defaultdata from "../constants/defaultdata";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";

export default function Brands(pageProps) {
  return (
    <>
      <DrawerAppBar title={navItems[5].title} />
      <CardPage defaultdata={defaultdata} />
    </>
  );
}
