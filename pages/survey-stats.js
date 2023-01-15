import React from "react";
import { navItems } from "../constants/siteContent";
import DrawerAppBar from "../components/DrawerAppBar";
import SurveyCharts from "../components/SurveyCharts";
import whiskyDbService from "../services/whiskyDbService";
import surveyService from "../services/surveyService";
import { SurveyChartData } from "../components/ChartData";
import { Typography } from "@mui/material";
import axios from "axios";

export async function getServerSideProps() {
  // const whiskies = await whiskyDbService.getWhisky_db();
  // const surveyResults = await surveyService.getSurveyResults();
  // const baseURL =
  //   process.env.NODE_ENV === "development"
  //     ? "http://localhost:3000"
  //     : "https://scotchtour-v2-ricechrisdtreat.vercel.app";
  // const baseURL = "https://scotchtour-v2-ricechrisdtreat.vercel.app";
  // process.env.NODE_ENV === "development"
  //   ? "http://localhost:3000"
  //   : "https://scotchtour-v2-ricechrisdtreat.vercel.app";

  const WHISKY_URL =
    "https://scotchtour-v2-ricechrisdtreat.vercel.app/api/whiskies";
  const SURVEY_URL =
    "https://scotchtour-v2-ricechrisdtreat.vercel.app/api/surveys";
  const whisky_res = await axios.get(WHISKY_URL);
  const survey_res = await axios.get(SURVEY_URL);
  const whiskies = await whisky_res.data;
  const surveyResults = await survey_res.data;

  if (!whiskies) {
    return {
      notFound: true,
    };
  }
  if (!surveyResults) {
    return {
      notFound: true,
    };
  }
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
