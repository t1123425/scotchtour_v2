import React, { useState, useEffect } from "react";
import MapPage from "../components/MapPage";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";
import { regionButtons, regionContent } from "../constants/siteContent";

export default function Regions(pageProps) {
  // state
  const [mobileWidth, setMobileWidth] = useState();

  // helpers
  useEffect(() => {
    setMobileWidth(window.innerWidth);
  });
  const chartStyle = mobileWidth >= 480 ? "popoverChart" : "swipeableChart";

  return (
    <>
      <DrawerAppBar title={navItems[4].title} />
      <MapPage regionButtons={regionButtons} regionContent={regionContent} />
    </>
  );
}
