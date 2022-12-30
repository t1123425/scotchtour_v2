import React, { useReducer, useState } from "react";
import Survey from "../components/Survey";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";
import {
  ratingLabels,
  interestLabels,
  initialFormValues,
  exampleBrands,
  exampleScotch,
  brandList,
} from "../constants/siteContent";
import SubmittedSurvey from "../components/SubmittedSurvey";
import whiskyDbService from "../services/whiskyDbService";
import surveyService from "../services/surveyService";

export async function getStaticProps() {
  const whiskies = await whiskyDbService.getWhisky_db();
  const surveyResults = await surveyService.getSurveyResults();

  return { props: { whiskies, surveyResults } };
}

export default function VisitorSurvey({ whiskies, surveyResults }) {
  // state
  const [surveyInput, setSurveyInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialFormValues
  );
  const [submitted, setSubmitted] = useState(null);
  const [surveyResponse, setSurveyResponse] = useState([]);

  // helpers
  const showSurvey = submitted ? "none" : "flex";
  const showSubmitted = !submitted ? "none" : "flex";
  const disableSubmit = Object.values(surveyInput)
    .map((v) => v)
    .every((v) => (v ? true : false))
    ? false
    : true;
  const submitSurvey = (data) => surveyService.submitSurvey(data);

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
    setSubmitted(true);
  };
  console.log(surveyInput);
  console.log(surveyResults);

  return (
    <>
      <DrawerAppBar title={navItems[7].title} />
      <Survey
        ratingLabels={ratingLabels}
        interestLabels={interestLabels}
        exampleBrands={exampleBrands}
        exampleScotch={exampleScotch}
        surveyValues={surveyInput}
        handleChangeValue={handleChangeValue}
        handleChangeScotchBrands={handleChangeScotchBrands}
        handleChangeFavoriteWhisky={handleChangeFavoriteWhisky}
        handleSurveySubmit={handleSurveySubmit}
        showSurvey={showSurvey}
        disableSubmit={disableSubmit}
        brandList={brandList}
        whiskyList={whiskies.map((obj) => obj.whisky)}
      />
      <SubmittedSurvey showSubmitted={showSubmitted} />
    </>
  );
}
