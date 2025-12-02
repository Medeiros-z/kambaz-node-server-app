import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({

    _id: String,
    title: String,
    course: String,
    points: String,
    description: String,
    dueDate: String,
    availableDate: String,
    untilDate: String,
},
{ collection: "assignments" }   
);
export default assignmentSchema;