import axios from "axios";

const API_URL = "http://localhost:5001/api/visitor_survey";

// Get all whiskies from db
const getSurveyResults = async () => {
  const res = await axios.get(API_URL);

  return res.data;
};

// Submit survey response
const submitSurvey = async (surveySubmitData) => {
  const res = await axios.post(API_URL, surveySubmitData);

  return res.data;
};

const surveyService = {
  getSurveyResults,
  submitSurvey,
};

export default surveyService;
