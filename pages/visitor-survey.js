import React from "react";

import FullPage from "../components/FullPage";
import defaultdata from "../constants/defaultdata";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";

export default function Survey(pageProps) {
  const title = "Visitor Survey";
  return (
    <>
      <DrawerAppBar title={navItems[7].title} />
      <FullPage defaultdata={defaultdata} />
    </>
  );
}
