import React from "react";
import MapPage from "../components/MapPage";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";
import { regionButtons, regionContent } from "../constants/siteContent";

export default function Regions(pageProps) {
  return (
    <>
      <DrawerAppBar title={navItems[4].title} />
      <MapPage regionButtons={regionButtons} regionContent={regionContent} />
    </>
  );
}
