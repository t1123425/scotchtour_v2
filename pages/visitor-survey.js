import React from "react";
import Survey from "../components/Survey";
import defaultdata from "../constants/defaultdata";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";

export default function VisitorSurvey(pageProps) {
  const title = "Visitor Survey";
  return (
    <>
      <DrawerAppBar title={navItems[7].title} />
      <Survey />
    </>
  );
}
