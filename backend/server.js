// Connect to MongoDb
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();

const connectDb = require("./config/db");

connectDb();

// Use Routes
const app = express();
const cors = require("cors");
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use("/api/whisky_db", require("./routes/whiskyRoutes"));
app.use("/api/visitor_survey", require("./routes/surveyRoutes"));

// Serve Static assets if in production

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
