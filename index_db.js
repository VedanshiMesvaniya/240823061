const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const studentSchema = new mongoose.Schema({
  name: String,
  department: String,
  startYear: Number,
  endYear: Number,
  enrollment: Number,
  address: String,
});

const Student = mongoose.model("Student", studentSchema);

console.log("MongoDB connected successfully");

const student = new Student({
  name: "Dhrumil Patel",
  department: "Computer Science",
  startYear: 2020,
  endYear: 2024,
  enrollment: 123456,
  address: "123 Main St, Anytown, USA",
});

student
  .save()
  .then(() => {
    console.log("Student saved successfully");
  })
  .catch((error) => {
    console.error("Error saving student:", error);
  });
