const mongoose = require("mongoose");
const { nanoid } = require("nanoid");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  code: {
    type: String,
    default: () => nanoid(),
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: "Department",
  },
  employees: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
  },
  message: {
    type: String,
    required: [true, "name is required"],
  },
  priority: {
    type: String,
    required: [true, "name is required"],
    enum: ["high", "medium", "low"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const Tickets = mongoose.model(
  "Tickets",
  ticketSchema
);
module.exports = Tickets;
