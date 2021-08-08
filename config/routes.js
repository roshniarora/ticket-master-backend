const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");
const departmentController = require("../controllers/departmentController");
const employeeController = require("../controllers/employeeController");
const ticketController = require("../controllers/ticketController");
const userController = require("../controllers/userController");

// USER AUTHENTICATION

router.post(
  "/user/register",
  userController.register
);

// CUSTOMER

router.post(
  "/customers",
  customerController.create
);
router.get("/customers", customerController.list);
router.put(
  "/customers/:id",
  customerController.update
);
router.get(
  "/customers/:id",
  customerController.show
);
router.delete(
  "/customers/:id",
  customerController.delete
);

// DEPARTMENT
router.post(
  "/department",
  departmentController.create
);

router.get(
  "/department",
  departmentController.list
);
router.put(
  "/department/:id",
  customerController.update
);

router.get(
  "/department/:id",
  departmentController.show
);
router.delete(
  "/department/:id",
  departmentController.delete
);

// Employee
router.post(
  "/employee",
  employeeController.create
);
router.get("/employee", employeeController.list);
router.put(
  "/employee/:id",
  employeeController.update
);
router.get(
  "/employee/:id",
  employeeController.show
);
router.delete(
  "/employee/:id",
  employeeController.delete
);

// Tickets

router.post("/tickets", ticketController.create);
router.get("/tickets", ticketController.list);
router.put(
  "/tickets/:id",
  ticketController.update
);
router.get("/tickets/:id", ticketController.show);
router.delete(
  "/tickets/:id",
  ticketController.delete
);
module.exports = router;
