import React from "react";
import { navItems } from "../constants/siteContent";
import DrawerAppBar from "../components/DrawerAppBar";
import SurveyCharts from "../components/SurveyCharts";
import whiskyDbService from "../services/whiskyDbService";
import surveyService from "../services/surveyService";
import { SurveyChartData } from "../components/ChartData";
import { Typography } from "@mui/material";

export async function getStaticProps() {
  const whiskies = await whiskyDbService.getWhisky_db();
  const surveyResults = await surveyService.getSurveyResults();

  return { props: { whiskies, surveyResults } };
}

export default function SurveyStats({ whiskies, surveyResults }) {
  // helpers
  const {
    totalcount,
    recognizeddata,
    beloveddata,
    popularregiondata,
    comparedtodata,
    hoverdata,
    whiskynotedata,
  } = SurveyChartData(whiskies, surveyResults);

  if (!whiskies || !surveyResults)
    return (
      <>
        <Typography>404 Error</Typography>
      </>
    );

  return (
    <>
      <DrawerAppBar title={navItems[8].title} />
      <SurveyCharts
        totalcount={totalcount}
        recognizeddata={recognizeddata}
        beloveddata={beloveddata}
        popularregiondata={popularregiondata}
        comparedtodata={comparedtodata}
        hoverdata={hoverdata}
        whiskynotedata={whiskynotedata}
      />
    </>
  );
}
