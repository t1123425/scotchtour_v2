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
  brandData,
  regionButtons,
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

  // workspace for chart data

  // Total Survey Responses
  const totalcount = surveyResults.length;
  console.log(totalcount);

  // Most Recognized Brands
  const brandraw = surveyResults.map((obj) => obj["scotch-brands"]).flat(1);
  const recognizeddata = [...new Set(brandraw)]
    .map((brand) => ({
      name: brand,
      count: brandraw.filter((el) => el === brand).length,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // Most Beloved Brands
  const favoriteraw = surveyResults.map((obj) => obj["favorite-whisky"]);
  const beloveddata = [...new Set(favoriteraw)]
    .map((whisky) => ({
      name: whisky,
      count: favoriteraw.filter((el) => el === whisky).length,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // Most Popular Regions
  const favwhiskyregions = favoriteraw.map((whisky) => ({
    name: whisky,
    region: brandData
      .filter((el) => new RegExp(el.name).test(whisky))
      .map((obj) => obj.region)[0],
  }));
  const popularregiondata = regionButtons.map((obj) => ({
    name: obj.name,
    count: favwhiskyregions.filter((el) => el.region === obj.name).length,
  }));

  // Scotch vs. other Types of whisky
  const comparedtoraw = surveyResults.map((obj) => obj["interest-slider"]);
  const comparedtodata = Object.keys(interestLabels)
    .sort((a, b) => a - b)
    .map((el) => ({
      rating: el,
      count: comparedtoraw.filter((item) => item === Number(el)).length,
    }));

  // How People Feel About Scotch
  const hoverraw = surveyResults.map((obj) => obj["hover-feedback"]);
  const hoverdata = Object.keys(ratingLabels)
    .sort((a, b) => a - b)
    .map((el) => ({
      rating: el,
      percent: (
        (hoverraw.filter((item) => item === Number(el)).length / totalcount) *
        100
      ).toFixed(2),
    }));

  // Best Whisky Notes
  const tagraw = favoriteraw
    .map((el) => ({
      name: el,
      tags: whiskies
        .filter((obj) => obj.whisky === el)
        .map((obj) => obj.tags)[0],
    }))
    .map((obj) => obj.tags)
    .flat(1);
  const whiskynotedata = [...new Set(tagraw)]
    .map((el) => ({
      flavor: el,
      count: tagraw.filter((item) => item === el).length,
    }))
    .sort((a, b) => b.count - a.count);
  console.log(whiskynotedata);

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
        brandList={brandData.map((obj) => obj.name)}
        whiskyList={whiskies.map((obj) => obj.whisky)}
      />
      <SubmittedSurvey showSubmitted={showSubmitted} />
    </>
  );
}
