import { dbConnect } from "./db/connect.js";

async function testConnection() {
  try {
    const connection = await dbConnect();
    console.log("Connected to MongoDB:", connection);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

testConnection();
