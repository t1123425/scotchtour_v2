const express = require("express");
const router = express.Router();
const {
  getSurveyResults,
  submitSurvey,
} = require("../controllers/surveyControllers");

router.post("/", submitSurvey);

router.get("/", getSurveyResults);

module.exports = router;
