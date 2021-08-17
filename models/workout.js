const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {type: Date, default: () => new Date}, 
    exercises: [
        {
    type: { type: String, trim: true, required: "Please enter an excercise type" },
    name: { type: String, trim: true, required: "Please enter a name of the workout" },
    duration: { type: Number, trim: true, required: "Please enter a duration" },
    weight: { type: Number },
    reps: { type: Number },
    sets: { type: Number },
    distance: { type: Number},
        }
    ]

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
