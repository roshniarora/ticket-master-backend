const express = require("express");
const configureDB = require("./config/database");
const router = require("./config/routes");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

configureDB();
app.use(express.json());

app.use(cors());

app.use("/api", router);

app.listen(port, () => {
  console.log("server running on port", port);
});
