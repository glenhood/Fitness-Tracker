const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {type: Date, defualt: () => new Date}, 
    excercises: [
        {
    type: { type: String, trim: true, required: "Please enter an excercise type" },
    name: { type: String, trim: true, required: "Please enter an excercise type" },
    duration: { type: Number, trim: true, required: "Please enter an excercise type" },
    weight: { type: Number, trim: true, required: "Please enter an excercise type" },
    reps: { type: String, trim: true, required: "Please enter an excercise type" },
    sets: { type: String, trim: true, required: "Please enter an excercise type"} ,
        }
    ]

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
