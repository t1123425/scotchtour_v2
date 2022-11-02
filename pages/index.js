import React from "react";

import FullPage from "../components/FullPage";
import defaultdata from "../constants/defaultdata";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";

export default function Home(props) {
  return (
    <>
      <DrawerAppBar title={navItems[0].title} />
      <FullPage defaultdata={defaultdata} />
    </>
  );
}
