const Department = require("../models/department");

// create Department

module.exports.create = async (req, res) => {
  const body = req.body;
  const department = new Department({ ...body });
  try {
    await department.save();
    res.status(200).send(department);
  } catch (err) {
    res.status(500).send(err);
  }
};

// GET/list all department

module.exports.list = async (req, res) => {
  const id = req.params.id;
  try {
    const department = await Department.find();
    res.status(200).send(department);
  } catch (err) {
    res.status(500).send(err);
  }
};

// UPDATE  a department

module.exports.update = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const department =
      await Department.findByIdAndUpdate(
        id,
        body,
        {
          new: true,
          useFindAndModify: false,
        }
      );
    res.status(200).send(department);
  } catch (err) {
    res.status(500).send(err);
  }
};

// show / view a department details

module.exports.show = async (req, res) => {
  const id = req.params.id;
  try {
    const department = await Department.findById(
      id
    );
    res.status(200).send(department);
  } catch (err) {
    res.status(500).send(department);
  }
};

// Delete a department
module.exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const department =
      await Department.findByIdAndDelete(id);
    res.status(200).send(department);
  } catch (err) {
    res.status(500).send(err);
  }
};
