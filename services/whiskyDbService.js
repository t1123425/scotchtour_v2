import axios from "axios";

// const API_URL = "http://localhost:5001/api/whisky_db";
const API_URL = "/api/whisky_db";

// Get all whiskies from db
const getWhisky_db = async () => {
  const res = await axios.get(API_URL);

  return res.data;
};

const whiskyDbService = {
  getWhisky_db,
};

export default whiskyDbService;
