import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    _id: String,
    title: { type: String, default: "New Quiz" },
    description: { type: String, default: "" },
    course: { type: String, ref: "CourseModel" },

    // Placeholder for future work
    questions: {
      type: Array,
      default: [],
    },
  },
  { collection: "quizzes" }
);

export default schema;
