import React from "react";
import FullPage from "../components/FullPage";
import { aboutMeContent } from "../constants/siteContent";
import DrawerAppBar from "../components/DrawerAppBar";
import { navItems } from "../constants/siteContent";

export default function AboutMe() {
  return (
    <>
      <DrawerAppBar title={navItems[9].title} />
      <FullPage
        title={aboutMeContent.mainTitle}
        hero={aboutMeContent.hero}
        mainText={aboutMeContent.mainText}
        alt={aboutMeContent.alt}
        imgHeight={aboutMeContent.imgHeight}
        imgWidth={aboutMeContent.imgWidth}
      />
    </>
  );
}
