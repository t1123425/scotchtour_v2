import React from "react";
import { navItems } from "../constants/siteContent";
import DrawerAppBar from "../components/DrawerAppBar";
import ScrollPage from "../components/ScrollPage";
import TimelineBar from "../components/TimelineBar";
import { historyContent, scrollChartContent } from "../constants/siteContent";
import ScrollChart from "../components/ScrollChart";
import { HistoryChartData } from "../components/ChartData";

export default function History(pageProps) {
  const title = "History of Scotch Whisky?";
  const { yeardata } = HistoryChartData();
  console.log(yeardata);
  return (
    <>
      <DrawerAppBar title={navItems[2].title} />
      <TimelineBar />
      <ScrollPage content={historyContent} />
      <ScrollChart data={yeardata} />
    </>
  );
}
