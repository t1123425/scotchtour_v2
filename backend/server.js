const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDb = require("./config/db");
const port = process.env.PORT || 5000;

connectDb();

const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/whisky_db", require("./routes/whiskyRoutes"));
app.use("/api/visitor_survey", require("./routes/surveyRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
