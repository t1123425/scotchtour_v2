const mongoose = require("mongoose");

const whiskyDbSchema = mongoose.Schema({
  whisky: String,
  type: String,
  cost: String,
  tags: String,
});

module.exports = mongoose.model("Whisky_db", whiskyDbSchema, "whisky_db");
