const Customer = require("../models/customer");

//create a customer
module.exports.create = async (req, res) => {
  const body = req.body;
  const customer = new Customer({ ...body });
  // customer.userId = req.user._id;
  // console.log(body);
  try {
    await customer.save();
    res.status(201).send(customer);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
// list all customers
module.exports.list = async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await Customer.find();
    res.status(200).send(customer);
  } catch (err) {
    res.status(500).send(err);
  }
};

//update a customer

module.exports.update = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const customer =
      await Customer.findByIdAndUpdate(id, body, {
        new: true,
        useFindAndModify: false,
      });
    res.status(200).send(customer);
  } catch (err) {
    res.status(500).send(err);
  }
};

// show / view a customer details

module.exports.show = async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await Customer.findById(id);
    res.status(200).send(customer);
  } catch (err) {
    res.status(500).send(customer);
  }
};

// Delete a customer
module.exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const customer =
      await Customer.findByIdAndDelete(id);
    res.status(200).send(customer);
  } catch (err) {
    res.status(500).send(err);
  }
};
