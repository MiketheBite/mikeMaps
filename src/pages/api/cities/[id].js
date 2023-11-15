import { dbConnect } from "../../../../db/connect.js";
import City from "../../../../db/models/City";

export default async function handler(request, response) {
  const connection = await dbConnect();
  const { id } = request.query;
  console.log("Connection Status:", connection);

  if (!connection)
    return response
      .status(500)
      .json({ error: "Unable to connect to the database!" });

  if (request.method === "GET") {
    try {
      const city = await City.findById(id);
      if (!city) {
        return response.status(404).json({ status: "City not Found 🫣" });
      }
      response.status(200).json(city);
    } catch (error) {
      response.status(500).json({ status: "Error fetching city data." });
    }
  }

  if (request.method === "PUT") {
    try {
      const updatedCity = request.body;
      //to return the updated data after the PUT method
      const updatedCityData = await City.findByIdAndUpdate(id, updatedCity, {
        new: true,
      });
      if (!updatedCityData) {
        return response
          .status(404)
          .json({ status: "City not found for updating. 🫣" });
      }
      return response.status(200).json(updatedCityData);
    } catch (error) {
      return response.status(500).json({ status: "Error updating city." });
    }
  }

  if (request.method === "DELETE") {
    try {
      const deleteCity = await City.findByIdAndDelete(id);
      if (!deleteCity) {
        return response
          .status(404)
          .json({ error: "City not found for deletion." });
      }
      return response.status(200).json({ status: "The City was deleted!" });
    } catch (error) {
      return response.status(500).json({ error: "Error deleting City." });
    }
  }
}
