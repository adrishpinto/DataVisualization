import mongoose from "mongoose";

const reportSchema = mongoose.Schema({
  end_year: {
    type: String,
    required: false,
  },
  intensity: {
    type: Number,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  insight: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  start_year: {
    type: String,
    required: false,
  },
  impact: {
    type: String,
    required: false,
  },
  added: {
    type: Date,
    required: true,
  },
  published: {
    type: Date,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  relevance: {
    type: Number,
    required: true,
  },
  pestle: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  likelihood: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Report", reportSchema);
