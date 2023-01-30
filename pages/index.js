import React from "react";
import FullPage from "../components/FullPage";
import { navItems } from "../constants/siteContent";
import DrawerAppBar from "../components/DrawerAppBar";
import { homeContent } from "../constants/siteContent";

export default function Home(props) {
  return (
    <>
      <DrawerAppBar title={navItems[0].title} />
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
