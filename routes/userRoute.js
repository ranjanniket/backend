const express = require("express");
const {
  loginController,
  registerController,
  videoController,
} = require("../controllers/userController");

//router object
const router = express.Router();

//routers
// POST || LOGIN USER
router.post("/login", loginController);

//POST || REGISTER USER
router.post("/register", registerController);

//POST || VIDEO INFO
router.post("/videoInfo", videoController);

module.exports = router;
