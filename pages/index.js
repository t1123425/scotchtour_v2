import React, { useEffect } from "react";
import FullPage from "../components/FullPage";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";
import { homeContent } from "../constants/siteContent";

import whiskyDbService from "../services/whiskyDbService";

export default function Home(props) {
  useEffect(() => {
    whiskyDbService.getWhisky_db();
  }, []);

  return (
    <>
      <DrawerAppBar title={navItems[0].title} />
      <FullPage
        title={homeContent.mainTitle}
        hero={homeContent.hero}
        mainText={homeContent.mainText}
      />
    </>
  );
}
