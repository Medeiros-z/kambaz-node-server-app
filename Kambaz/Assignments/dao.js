import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findAssignmentsForCourse(courseId) {
    const { assignments } = Database;
    return assignments.filter((assignment) => assignment.course === courseId)
}

export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    //Database.assignments = [...Database.assignments, newAssignment];
    Database.assignments.push(newAssignment);
    return newAssignment;
}

export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    console.log("Looking for ID:", assignmentId);
    console.log("Available IDs:", assignments.map(a => a._id));
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    if (!assignment) {
        console.log("Assignment not found!");
        return null;
    }
    Object.assign(assignment, assignmentUpdates);
    return assignment;
}