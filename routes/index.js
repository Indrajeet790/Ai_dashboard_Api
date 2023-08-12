const express = require("express");
const router = express.Router();
router.use("/api/metrics",require("./metrics"))

module.exports=router;
