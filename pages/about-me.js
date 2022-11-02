import React from "react";
import FullPage from "../components/FullPage";
import defaultdata from "../constants/defaultdata";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";

export default function AboutMe() {
  return (
    <>
      <DrawerAppBar title={navItems[8].title} />
      <FullPage defaultdata={defaultdata} />
    </>
  );
}
