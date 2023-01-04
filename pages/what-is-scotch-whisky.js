import React from "react";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";
import ScrollPage from "../components/ScrollPage";
import { whatIsContent } from "../constants/siteContent";
import { WhatIsChartData } from "../components/ChartData";

export default function WhatIs(pageProps) {
  const { yeardata, totalregiondata } = WhatIsChartData();
  console.log(yeardata);
  console.log(totalregiondata);
  return (
    <>
      <DrawerAppBar title={navItems[1].title} />
      <ScrollPage content={whatIsContent} />
    </>
  );
}
