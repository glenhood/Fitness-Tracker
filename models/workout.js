// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const workoutSchema = new Schema({
//   day: {
//     type: Date,
//     default: () => new Date(),
//   },
//   exercises: [
//     {
//       type: {
//         type: String,
//         trim: true,
//         required: 'Enter an exercise type',
//       },
//       name: {
//         type: String,
//         trim: true,
//         required: 'Enter an exercise name',
//       },
//       duration: {
//         type: Number,
//         required: 'Enter an exercise duration in minutes',
//       },
//       weight: {
//         type: Number,
//       },
//       reps: {
//         type: Number,
//       },
//       sets: {
//         type: Number,
//       },
//       distance: {
//         type: Number,
//       },
//     },
//   ],
// });
// const Workout = mongoose.model('Workout', workoutSchema);
// module.exports = Workout;

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
