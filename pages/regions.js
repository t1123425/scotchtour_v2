import React, { useState, useEffect } from "react";
import MapPage from "../components/MapPage";
// import { navItems } from "../constants/siteContent";
import { regionButtons, regionContent } from "../constants/siteContent";
import PopoverChart from "../components/PopoverChart";
import { RegionChartData } from "../components/ChartData";

export default function Regions(pageProps) {
  // state
  const [mobileWidth, setMobileWidth] = useState();

  // helpers
  useEffect(() => {
    setMobileWidth(window.innerWidth);
  }, []);
  const chartPopperStyle = mobileWidth >= 480 ? "top" : "bottom";
  const { totalregiondata } = RegionChartData();

  return (
    <>
      <PopoverChart
        chartPopperStyle={chartPopperStyle}
        data={totalregiondata}
      />
      <MapPage regionButtons={regionButtons} regionContent={regionContent} />
    </>
  );
}
