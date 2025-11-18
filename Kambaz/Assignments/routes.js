import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
    const deleteAssignment = async (req, res) => {
        const { assignmentId } = req.params;
        const status = await assignmentsDao.deleteAssignment(assignmentId);
        res.send(status);
    }
    app.delete("/api/assignments/:assignmentId", deleteAssignment);

    const updateAssignment = async (req, res) => {
        const { moduleId } = req.params;
        const moduleUpdates = req.body;
        const status = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
    }
    app.put("/api/assignments/:assignmentId", updateAssignment);

//   app.get("/api/courses/:cid/assignments", (req, res) => {
//     const { cid } = req.params;
//     const assignments = dao.findAssignmentsForCourse(cid);
//     res.json(assignments);
//   });

//   app.get("/api/assignments/:aid", (req, res) => {
//     const { aid } = req.params;
//     res.json(dao.findAssignmentById(aid));
//   });

//   app.post("/api/courses/:cid/assignments", (req, res) => {
//     const { cid } = req.params;
//     const assignment = { ...req.body, course: cid };
//     const newAssignment = dao.createAssignment(assignment);
//     res.json(newAssignment);
//   });

//   app.put("/api/assignments/:aid", (req, res) => {
//     const { aid } = req.params;
//     const updated = dao.updateAssignment(aid, req.body);
//     res.json(updated);
//   });

//   app.delete("/api/assignments/:aid", (req, res) => {
//     const { aid } = req.params;
//     dao.deleteAssignment(aid);
//     res.sendStatus(200);
//   });
}
