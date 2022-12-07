const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDb = require("./config/db");
const port = process.env.PORT || 5000;

connectDb();

const app = express();

app.use("/api/whisky_db", require("./routes/whiskyRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
