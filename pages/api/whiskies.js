import clientPromise from "../../mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("scotch_tour_v2");
  switch (req.method) {
    case "GET":
      const allWhiskies = await db.collection("whisky_db").find({}).toArray();
      res.status(200).json(allWhiskies);
      break;
  }
}
