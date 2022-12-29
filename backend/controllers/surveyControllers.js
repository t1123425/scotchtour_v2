const asyncHandler = require("express-async-handler");

const SurveyModel = require("../models/surveyModel");

// @desc Get all survey results from visitor_survey collection in scotch_tour_v2 db
// @route GET /api/visitor_survey
// @access Private
const getSurveyResults = asyncHandler(async (req, res) => {
  const survey_results = await SurveyModel.find();

  res.status(200).json(survey_results);
});

// @desc Add survey submission to visitor_survey collection in scotch_tour_v2 db
// @route POST /api/visitor_survey
// @access Private
const submitSurvey = asyncHandler(async (req, res) => {
  const survey_submission = await SurveyModel.create({
    "favorite-whisky": req.body["favorite-whisky"],
    "hover-feedback": req.body["hover-feedback"],
    "interest-slider": req.body["interest-slider"],
    "scotch-brands": req.body["scotch-brands"],
  });

  res.status(200).json(survey_submission);
  // res.status(200).json({ message: "Posted!" });
});

module.exports = {
  getSurveyResults,
  submitSurvey,
};
