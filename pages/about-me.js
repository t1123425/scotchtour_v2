import React from "react";
import FullPage from "../components/FullPage";
import { aboutMeContent } from "../constants/siteContent";

export default function AboutMe() {
  return (
    <FullPage
        title={aboutMeContent.mainTitle}
        hero={aboutMeContent.hero}
        mainText={aboutMeContent.mainText}
        alt={aboutMeContent.alt}
        imgHeight={aboutMeContent.imgHeight}
        imgWidth={aboutMeContent.imgWidth}
      />
  );
}
