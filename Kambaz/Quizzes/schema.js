import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    _id: String,

    title: { type: String, default: "New Quiz" },
    description: { type: String, default: "" },

    course: { type: String, ref: "CourseModel" },

    // TYPE: Graded Quiz (default), Practice Quiz, etc.
    type: {
      type: String,
      enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
      default: "Graded Quiz",
    },

    points: { type: Number, default: 0 },

    // Assignment group
    assignmentGroup: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Project"],
      default: "Quizzes",
    },

    shuffleAnswers: { type: Boolean, default: true },

    timeLimit: { type: Number, default: 20 }, // minutes

    multipleAttempts: { type: Boolean, default: false },

    attempts: { type: Number, default: 1 }, // Used if multipleAttempts=true

    showCorrectAnswers: { type: Boolean, default: false },

    accessCode: { type: String, default: "" },

    oneQuestionAtATime: { type: Boolean, default: true },

    webcamRequired: { type: Boolean, default: false },

    lockQuestionsAfterAnswering: { type: Boolean, default: false },

    isPublished: { type: Boolean, default: false },

    // Dates
    dueDate: { type: Date, default: null },
    availableDate: { type: Date, default: null },
    untilDate: { type: Date, default: null },

    // Questions array (asking frontend to supply objects)
    questions: {
      type: Array,
      default: [],
    },
  },
  { collection: "quizzes" }
);

export default quizSchema;
