const asyncHandler = require("express-async-handler");

const Whisky_db = require("../models/whiskyDbModel");

// Get all whiskies from whisky_db collection in scotch_tour_v2 db
// @route GET /api/whisky_db
// @access Private
const getWhisky_db = asyncHandler(async (req, res) => {
  const whisky_db = await Whisky_db.find();

  res.status(200).json(whisky_db);
});

module.exports = {
  getWhisky_db,
};
