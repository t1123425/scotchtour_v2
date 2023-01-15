import axios from "axios";

// const API_URL = "http://localhost:5001/api/visitor_survey";
const API_URL = "/api/visitor_survey";

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
