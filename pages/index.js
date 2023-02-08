import React from "react";
import FullPage from "../components/FullPage";
import { homeContent } from "../constants/siteContent";

export default function Home(props) {
  return (
    <>
      <FullPage
        title={homeContent.mainTitle}
        hero={homeContent.hero}
        mainText={homeContent.mainText}
        // alt={homeContent.alt}
        // imgHeight={homeContent.imgHeight}
        // imgWidth={homeContent.imgWidth}
      />
    </>
  );
}
