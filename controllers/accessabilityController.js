const fs = require("fs");
const quizzes = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data.json`, "utf-8")
);
const accessQuiz = quizzes.quizzes.find(
  (quiz) => quiz.title === "Accessibility"
);

const getAccessQuiz = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: accessQuiz,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
module.exports = getAccessQuiz;
