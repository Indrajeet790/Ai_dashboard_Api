const express = require("express");
const router = express.Router();
const predictionController=require("../controllers/predictionsController")

router.get("/create",predictionController.predictData)
router.get("/",predictionController.readPrediction)


module.exports=router;
