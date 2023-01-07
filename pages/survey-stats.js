import React, { useReducer, useState } from "react";
import Survey from "../components/Survey";
import { navItems } from "../constants/siteContent";
import DrawerAppBar from "../components/DrawerAppBar";
import { initialFormValues } from "../constants/siteContent";
import SurveyCharts from "../components/SurveyCharts";
import whiskyDbService from "../services/whiskyDbService";
import surveyService from "../services/surveyService";
import { SurveyChartData } from "../components/ChartData";

export async function getStaticProps() {
  const whiskies = await whiskyDbService.getWhisky_db();
  const surveyResults = await surveyService.getSurveyResults();

  return { props: { whiskies, surveyResults } };
}

export default function SurveyStats({ whiskies, surveyResults }) {
  // state

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

  // handlers

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
