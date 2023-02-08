import React from "react";
import ScrollPage from "../components/ScrollPage";
import TimelineBar from "../components/TimelineBar";
import { historyContent } from "../constants/siteContent";
import ScrollChart from "../components/ScrollChart";
import { HistoryChartData } from "../components/ChartData";

export default function History(pageProps) {
  const { yeardata } = HistoryChartData();
  console.log(yeardata);
  return (
    <>
      <TimelineBar />
      <ScrollPage content={historyContent} />
      <ScrollChart data={yeardata} />
    </>
  );
}
