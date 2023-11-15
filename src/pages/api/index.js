import { dbConnect } from "../../../db/connect";
import City from "../../../db/models/City";

export default async function handler(request, response) {
  const connection = await dbConnect();
  if (!connection)
    return response
      .status(500)
      .json({ error: "Unable to connect to the database!" });

  if (request.method === "GET") {
    try {
      const cities = await City.find();
      return response.status(200).json(cities);
    } catch (error) {
      return response
        .status(500)
        .json({ error: "Error fetching the City data." });
    }
  }
  if (request.method === "POST") {
    try {
      const newCity = await City.create(request.body);
      return response.status(201).json(newCity);
    } catch (error) {
      return response.status(500).json({ error: "Error adding City." });
    }
  }
}
