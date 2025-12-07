import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

// Get all quizzes for a given course
export function findQuizzesForCourse(courseId) {
  return model.find({ course: courseId });
}

// Create a new quiz
export function createQuiz(quiz) {
  const newQuiz = { ...quiz, _id: uuidv4() };
  return model.create(newQuiz);
}

// Delete a quiz
export function deleteQuiz(quizId) {
  return model.deleteOne({ _id: quizId });
}

// Update a quiz
export function updateQuiz(quizId, quizUpdates) {
  return model.updateOne({ _id: quizId }, quizUpdates);
}

// Optional — find a single quiz (for the details page)
export function findQuizById(quizId) {
  return model.findById(quizId);
}