import * as quizzesDao from "./dao.js";

export default function QuizRoutes(app) {

  // Get all quizzes for a course
  app.get("/api/courses/:courseId/quizzes", async (req, res) => {
    const { courseId } = req.params;
    const quizzes = await quizzesDao.findQuizzesForCourse(courseId);
    res.send(quizzes);
  });

  // Create a new quiz
  app.post("/api/courses/:courseId/quizzes", async (req, res) => {
    const { courseId } = req.params;

    const quiz = {
      ...req.body,
      course: courseId,
      title: req.body.title || "New Quiz",
    };

    const newQuiz = await quizzesDao.createQuiz(quiz);
    res.send(newQuiz);
  });

  // Update a quiz
  app.put("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const updates = req.body;

    const status = await quizzesDao.updateQuiz(quizId, updates);
    res.send(status);
  });

  // Delete a quiz
  app.delete("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const status = await quizzesDao.deleteQuiz(quizId);
    res.send(status);
  });

  // Fetch a single quiz (for details page)
  app.get("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quiz = await quizzesDao.findQuizById(quizId);
    res.send(quiz);
  });
}