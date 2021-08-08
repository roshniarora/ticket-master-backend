const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  department: {
    type: String,
    required: [true, "department id required"],
  },
});

const Department = mongoose.model(
  "Department",
  departmentSchema
);

module.exports = Department;
