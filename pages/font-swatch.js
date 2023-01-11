import React from "react";
import DrawerAppBar from "../components/DrawerAppBar";
import { navItems } from "../constants/siteContent";
import FontSwatch from "../components/FontSwatch";

export default function AboutMe() {
  return (
    <>
      <DrawerAppBar title={navItems[9].title} />
      <FontSwatch />
    </>
  );
}
