const express = require("express");
const router = express.Router();
const metricsController=require("../controllers/metricsController")

router.get("/create",metricsController.metricsCreate);

module.exports=router;
