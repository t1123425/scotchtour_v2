const asyncHandler = require("express-async-handler");

// Get all whiskies from whisky_db collection in scotch_tour_v2 db
// @route GET /api/whisky_db
// @access Private
const getWhisky_db = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get whiskies" });
});

module.exports = {
  getWhisky_db,
};
