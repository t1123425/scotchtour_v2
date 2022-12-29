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

export async function getStaticProps() {
  const whiskies = await whiskyDbService.getWhisky_db();

  return { props: { whiskies } };
}

export default function VisitorSurvey({ whiskies }) {
  // state
  const [surveyInput, setSurveyInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialFormValues
  );
  const [submitted, setSubmitted] = useState(null);
  const [testArr, setTestArr] = useState([]);

  // helpers
  const showSurvey = submitted ? "none" : "flex";
  const showSubmitted = !submitted ? "none" : "flex";
  const disableSubmit = Object.values(surveyInput)
    .map((v) => v)
    .every((v) => (v ? true : false))
    ? false
    : true;

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
    setTestArr([...testArr, surveyInput]);
    setSubmitted(true);
  };
  console.log(surveyInput);
  console.log(testArr);

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
