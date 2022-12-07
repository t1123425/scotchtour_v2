const express = require("express");
const router = express.Router();
const { getWhisky_db } = require("../controllers/whiskyControllers");

router.get("/", getWhisky_db);

module.exports = router;
