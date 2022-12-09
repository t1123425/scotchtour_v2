const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDb = require("./config/db");
const port = process.env.PORT || 5000;

connectDb();

const app = express();

const cors = require("cors");

app.use(cors());
app.use("/api/whisky_db", require("./routes/whiskyRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
