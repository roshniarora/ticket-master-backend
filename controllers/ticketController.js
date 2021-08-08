const Tickets = require("../models/tickets");

// create / POST a ticket
module.exports.create = async (req, res) => {
  const body = req.body;
  const ticket = new Tickets({ ...body });
  try {
    await ticket.save();
    res.status(200).send(ticket);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports.list = async (req, res) => {
  const id = req.params.id;
  try {
    const ticket = await Tickets.find()
      .populate("customer")
      .populate("department")
      .populate("employee");
    res.status(200).send(ticket);
  } catch (err) {
    // res.status(500).send(err);
    console.log(err);
  }
};

module.exports.update = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const ticket =
      await Tickets.findByIdAndUpdate(id, body, {
        new: true,
      })
        .populate("customer")
        .populate("department")
        .populate("employee");
    res.status(200).send(ticket);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.show = async (req, res) => {
  const id = req.params.id;
  try {
    const ticket = await Tickets.findById(id);
    res.status(200).send(ticket);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const ticket =
      await Tickets.findByIdAndDelete(id);
    res.status(200).send(ticket);
  } catch (err) {
    res.status(500).send(err);
  }
};
