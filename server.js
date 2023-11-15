import express from "express";
import { dbConnect } from "./db/connect";
import router from "./src/pages/api";
import path from "path";

const app = express();
const PORT = process.env.PORT || 9000;

// Connect to MongoDB
dbConnect();

// Middleware for JSON parsing
app.use(express.json());

// Routes
app.use("/api/cities", router);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
