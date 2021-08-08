const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customerSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },

  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  mobile: {
    type: String,
    required: [true, "mobile is required"],
  },
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Customer = mongoose.model(
  "Customer",
  customerSchema
);
module.exports = Customer;
