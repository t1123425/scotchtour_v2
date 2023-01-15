import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "scotchtour-v2.vercel.app";

const API_URL = baseURL + "/api/surveys";
// const API_URL = "/api/visitor_survey";

// Get all whiskies from db
const getSurveyResults = async () => {
  const res = await axios.get(API_URL);

  return res.data;
};

// Submit survey response
const submitSurvey = (surveySubmitData) => {
  axios.post(API_URL, surveySubmitData);
};

const surveyService = {
  getSurveyResults,
  submitSurvey,
};

export default surveyService;
