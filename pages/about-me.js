import React from "react";
import FullPage from "../components/FullPage";
import { aboutMeContent } from "../constants/siteContent";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";

export default function AboutMe() {
  return (
    <>
      <DrawerAppBar title={navItems[8].title} />
      <FullPage
        title={aboutMeContent.mainTitle}
        hero={aboutMeContent.hero}
        mainText={aboutMeContent.mainText}
      />
    </>
  );
}
