const fs = require("fs");
const quizzes = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data.json`, "utf-8")
);
const cssQuiz = quizzes.quizzes.find((quiz) => quiz.title === "CSS");

const getCssQuiz = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: cssQuiz,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
module.exports = getCssQuiz;
