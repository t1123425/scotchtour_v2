import React, { useReducer } from "react";
import Survey from "../components/Survey";
import { navItems } from "../constants/siteContent";
import DrawerAppBar from "../components/DrawerAppBar";
import {
  ratingLabels,
  interestLabels,
  initialFormValues,
  brandData,
} from "../constants/siteContent";
import whiskyDbService from "../services/whiskyDbService";
import surveyService from "../services/surveyService";
import useRouter from "next/router";
import { Typography } from "@mui/material";
import axios from "axios";

export async function getServerSideProps() {
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
  const whisky_res = await axios.get(WHISKY_URL, {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  });
  const whiskies = await whisky_res.data;

  // const whiskies = await whiskyDbService.getWhisky_db();
  // const surveyResults = await surveyService.getSurveyResults();

  if (!whiskies) {
    return {
      notFound: true,
    };
  }
  return { props: { whiskies } };
}

export default function VisitorSurvey({ whiskies }) {
  // state
  const [surveyInput, setSurveyInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialFormValues
  );
  const disableSubmit = Object.values(surveyInput)
    .map((v) => v)
    .every((v) => (v ? true : false))
    ? false
    : true;
  const submitSurvey = (data) => surveyService.submitSurvey(data);
  const router = useRouter;

  // handlers
  const handleChangeValue = (event) => {
    const { name, value } = event.target;
    setSurveyInput({ [name]: Number(value) });
  };
  const handleChangeScotchBrands = (event, newValue) => {
    setSurveyInput({ "scotch-brands": newValue });
  };
  const handleChangeFavoriteWhisky = (event, newValue) => {
    setSurveyInput({ "favorite-whisky": newValue });
  };
  const handleSurveySubmit = () => {
    submitSurvey(surveyInput);
    router.push("/survey-stats");
  };

  return (
    <>
      <DrawerAppBar title={navItems[7].title} />
      <Survey
        ratingLabels={ratingLabels}
        interestLabels={interestLabels}
        surveyValues={surveyInput}
        handleChangeValue={handleChangeValue}
        handleChangeScotchBrands={handleChangeScotchBrands}
        handleChangeFavoriteWhisky={handleChangeFavoriteWhisky}
        handleSurveySubmit={handleSurveySubmit}
        disableSubmit={disableSubmit}
        brandList={brandData.map((obj) => obj.name)}
        whiskyList={whiskies.map((obj) => obj.whisky)}
      />
    </>
  );
}
