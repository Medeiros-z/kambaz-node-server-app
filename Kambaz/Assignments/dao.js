import Database from "../Database/index.js";

export function findAssignmentsForCourse(courseId) {
    const { assignments } = Database;
    return assignments.filter((assignment) => assignment.course === courseId)
}

export function createAssignment(assignment) {
    const newAssignment = { ...assignment, __id: uuidv4() };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}

export function deleteAssignment(assignmentId) {
    const { assingments } = Database;
    Database.assignments = assingments.filter((assignment) => assignment.__id !== moduleId);
}

export function updateAssignment(assingmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment.__id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
}

// let { assignments } = db;

// export const findAssignmentsForCourse = (courseId) =>
//   assignments.filter(a => a.course === courseId);

// export const findAssignmentById = (assignmentId) =>
//   assignments.find(a => a._id === assignmentId);

// export const createAssignment = (assignment) => {
//   const newAssignment = {
//     ...assignment,
//     _id: Date.now().toString(),
//   };
//   assignments = [...assignments, newAssignment];
//   db.assignments = assignments;
//   return newAssignment;
// };

// export const updateAssignment = (assignmentId, updates) => {
//   assignments = assignments.map(a =>
//     a._id === assignmentId ? { ...a, ...updates } : a
//   );
//   db.assignments = assignments;
//   return db.assignments.find(a => a._id === assignmentId);
// };

// export const deleteAssignment = (assignmentId) => {
//   assignments = assignments.filter(a => a._id !== assignmentId);
//   db.assignments = assignments;
//   return assignments;
// };
