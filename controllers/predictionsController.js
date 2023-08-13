const fs = require("fs");
const data = require("../dummyData/prediction").predictionData;

//// Define the function to predict and save data
module.exports.predictData = async (req, res) => {
  try {
    // Extract predictions data from the request
    const predictData = data.predictions.map((productData) => {
      const { productInput, prediction, actual } = productData;

       // Calculate a random predicted data within a small range of the actual value
      const predictedData = actual + (Math.random() - 0.5) * 0.1;
      return { productInput, prediction: predictedData, actual };
    });
    // convert data into json file.
    const jsonResult = JSON.stringify(predictData, null, 2);

    // Write JSON data to a file prediction.json
    fs.writeFile("prediction.json", jsonResult, "utf8", (err) => {
      if (err) {
        res.status(500).json({ message: "Error writing JSON file:", err });
      } else {
        res
          .status(200)
          .json({ message: "prediction saved to prediction.json" });
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// reading the json data from prediction.json file
module.exports.readPrediction = async (req, res) => {
  try {
    // reading JSON data
    const readPredictions = fs.readFileSync("prediction.json", "utf8");
    res.status(200).json(JSON.parse(readPredictions));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
