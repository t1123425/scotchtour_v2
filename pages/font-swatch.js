import React from "react";
import DrawerAppBar from "../components/DrawerAppBar";
import { navItems } from "../constants/siteContent";
import FontSwatch from "../components/FontSwatch";

// Unused page - used in dev to try out fonts

export default function AboutMe() {
  return (
    <>
      <DrawerAppBar title={navItems[9].title} />
      <FontSwatch />
    </>
  );
}
