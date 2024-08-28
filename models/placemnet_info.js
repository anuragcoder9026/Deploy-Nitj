import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    department: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    roll: {
      type: Number,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    package: {
      type: Number,
      required: true,
    },
    image: {
      type: String, 
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model
const Model = mongoose.model("placement_info", Schema);

// Export
module.exports = Model;
