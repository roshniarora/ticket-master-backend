const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const employeeSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is requited"],
  },
  mobile: {
    type: String,
    required: [true, "mobile is required"],
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: "Department",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Employee = mongoose.model(
  "employee",
  employeeSchema
);

module.exports = Employee;
