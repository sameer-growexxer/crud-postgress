require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

const db = require("./model");
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use("/", require("./user/userRoutes"));

app.listen(process.env.PORT, () => {
  console.log("App running on PORT :: ", process.env.PORT);
});
