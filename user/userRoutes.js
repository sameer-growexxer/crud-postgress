require("dotenv").config();
const express = require("express");
const router = express.Router();

const UserController = require("./UserController");

router.get("/users", new UserController().getUsersOrByNameOrByEmail);
router.post("/user", new UserController().addUser);
router.put("/user", new UserController().updateUser);
router.delete("/user", new UserController().deleteUser);
router.delete("/users", new UserController().deleteUsers);
router.post("/login", new UserController().loginUser);

if (process.env.SWAGGER === "true") {
  require("../utils/swagger")(router);
}

module.exports = router;
