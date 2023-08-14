const express = require("express");
const router = express.Router();
const metricsController=require("../controllers/metricsController")

//  route for creating metrics data in the form of json
router.post("/create",metricsController.metricsCreate);

// 
router.get("/",metricsController.readMetrics);

module.exports=router;
