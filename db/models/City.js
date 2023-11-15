import mongoose from "mongoose";

const { Schema } = mongoose;

const citySchema = new Schema({
  cityName: { type: String, required: true },
  country: { type: String, required: true },
  notes: { type: String, required: true },
  date: { type: [Date], required: true },
});

const City = mongoose.model("City", citySchema);

export default City;
