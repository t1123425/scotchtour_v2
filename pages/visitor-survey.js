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
} from "../constants/siteContent";

export default function VisitorSurvey(pageProps) {
  const title = "Visitor Survey";
  const [surveyInput, setSurveyInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialFormValues
  );
  const [testArr, setTestArr] = useState([]);
  console.log(testArr);
  const handleChangeValue = (event) => {
    const { name, value } = event.target;
    setSurveyInput({ [name]: value });
  };
  const handleChangeScotchBrands = (event, newValue) => {
    setSurveyInput({ "scotch-brands": newValue });
  };
  const handleChangeFavoriteWhisky = (event, newValue) => {
    setSurveyInput({ "favorite-whisky": newValue });
  };

  const handleSurveySubmit = () => {
    setTestArr([...testArr, surveyInput]);
  };

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
      />
    </>
  );
}
