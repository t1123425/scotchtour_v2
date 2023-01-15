import clientPromise from "../../mongodb";

const asyncHandler = require("express-async-handler");

const Whisky_db = require("../models/whiskyDbModel");

// Get all whiskies from whisky_db collection in scotch_tour_v2 db
// @route GET /api/whisky_db
// @access Private
export default asyncHandler(async (req, res) => {
  const client = await clientPromise;
  const db = client.db("scotch_tour_v2");
  const whiskies = await db.collection("whisky_db").find().toArray();

  res.status(200).json(whiskies);
});

// module.exports = {
//   getWhisky_db,
// };

// export default async function handler(req, res) {
//   const client = await clientPromise;
//   const db = client.db("scotch_tour_v2");
//   switch (req.method) {
//     case "GET":
//       const allWhiskies = await db.collection("whisky_db").find({}).toArray();
//       res.status(200).json(allWhiskies);
//       break;
//   }
// }
