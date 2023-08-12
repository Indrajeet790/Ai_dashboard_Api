const fs=require("fs");
const data = require("../dummyData/metrics");

// creating dummy data and convert that data into json formate
module.exports.metricsCreate = async (req, res) => {
  try {
const jsonResult = JSON.stringify(data.calculate, null, 2);

// Write JSON data to a file
fs.writeFile('metrics.json', jsonResult, 'utf8', (err) => {
    if (err) {
        res.status(500).json({message:'Error writing JSON file:', err});
    } else {
      res.status(200).json({message:'Metrics saved to metrics.json'});
    }
});
    
  } catch (err) {
    res.status(500).json({message:err.message});
  }
};


