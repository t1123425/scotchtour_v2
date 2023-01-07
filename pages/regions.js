import React, { useState, useEffect } from "react";
import MapPage from "../components/MapPage";
import { navItems } from "../constants/siteContent";
import DrawerAppBar from "../components/DrawerAppBar";
import { regionButtons, regionContent } from "../constants/siteContent";
import PopoverChart from "../components/PopoverChart";
import { RegionChartData } from "../components/ChartData";

export default function Regions(pageProps) {
  // state
  const [mobileWidth, setMobileWidth] = useState();

  // helpers
  useEffect(() => {
    setMobileWidth(window.innerWidth);
  });
  const chartPopperStyle = mobileWidth >= 480 ? "top" : "bottom";
  const { totalregiondata } = RegionChartData();

  return (
    <>
      <DrawerAppBar title={navItems[4].title} />
      <PopoverChart
        chartPopperStyle={chartPopperStyle}
        data={totalregiondata}
      />
      <MapPage regionButtons={regionButtons} regionContent={regionContent} />
    </>
  );
}
