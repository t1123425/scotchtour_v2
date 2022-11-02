import React from "react";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";
import ScrollPage from "../components/ScrollPage";
import TimelineBar from "../components/TimelineBar";

export default function History(pageProps) {
  const title = "History of Scotch Whisky?";
  return (
    <>
      <DrawerAppBar title={navItems[2].title} />
      <TimelineBar />
      <ScrollPage />
    </>
  );
}
