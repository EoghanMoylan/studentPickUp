
const express = require("express");
const router = express.Router();
const resetController = require("./reset.controller");

router.patch("/", resetController.resetData);

module.exports = router;