const express = require("express");
const router = express.Router();
router.use("/api/metrics",require("./metrics"))
router.use("/api/prediction",require("./prediction"))

module.exports=router;
