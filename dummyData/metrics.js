const truePositive = 70;
const trueNegative = 120;
const falsePositive = 30;
const falseNegative = 10;

// calculate accuracy
const accuracy =
  (truePositive + trueNegative) /
  (truePositive + trueNegative + falsePositive + falseNegative);

// calculate precision
const precision = truePositive / (truePositive + falsePositive);

// calculate recall
const recall = truePositive / (truePositive + falseNegative);

module.exports.calculate = {
  Accuracy: accuracy,
  Precision: precision,
  Recall: recall,
};
