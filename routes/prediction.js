const express = require("express");
const router = express.Router();
const predictionController=require("../controllers/predictionsController")

//  route for  creating prediction data in the form of json
router.post("/create",predictionController.predictData)

// route for retrieve or reading metrics.json file
router.get("/",predictionController.readPrediction)


module.exports=router;
