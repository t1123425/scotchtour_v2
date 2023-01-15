import clientPromise from "../../mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("scotch_tour_v2");
  switch (req.method) {
    case "POST":
      let survey_submission = await db.collection("visitor_survey").insertOne({
        "favorite-whisky": req.body["favorite-whisky"],
        "hover-feedback": req.body["hover-feedback"],
        "interest-slider": req.body["interest-slider"],
        "scotch-brands": req.body["scotch-brands"],
      });
      res.status(200).json(survey_submission);
      break;
    case "GET":
      const surveyResults = await db
        .collection("visitor_survey")
        .find({})
        .toArray();
      res.status(200).json(surveyResults);
      break;
  }
}
