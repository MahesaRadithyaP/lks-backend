const express = require("express");
const router = express.Router();
const { validateUser, register } = require("./controller/AuthController");

router.post("/login", validateUser);
router.post("/register", register);

module.exports = router;
