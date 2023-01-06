import React, { useState, useEffect } from "react";
import MapPage from "../components/MapPage";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";
import { regionButtons, regionContent } from "../constants/siteContent";
import PopoverChart from "../components/PopoverChart";

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
      <PopoverChart chartStyle={chartStyle} />
      <MapPage regionButtons={regionButtons} regionContent={regionContent} />
    </>
  );
}
