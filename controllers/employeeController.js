const Employee = require("../models/employees");

// Create a Employee

module.exports.create = async (req, res) => {
  const body = req.body;
  const employee = new Employee({ ...body });
  try {
    await employee.save();
    res.status(200).send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
};

// List all employees

module.exports.list = async (req, res) => {
  const id = req.params.id;
  try {
    const employee =
      await Employee.find().populate(
        "Department"
      );
    res.status(200).send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update a employee

module.exports.update = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const employee = await findByIdAndUpdate(
      id,
      body,
      { new: true }
    ).populate("Department");
    res.status(200).send(employee);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Show / View a employee details

module.exports.show = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await findById(id).populate(
      "Department"
    );
    res.status(200).send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.delete = (req, res) => {
  const id = req.params.id;
  try {
    const employee = findByIdAndDelete(id);
    res.status(200).send(employee);
  } catch (err) {
    res.status(200).send(err);
  }
};
