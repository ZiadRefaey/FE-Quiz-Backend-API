const fs = require("fs");
const quizzes = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data.json`, "utf-8")
);
const htmlQuiz = quizzes.quizzes.find((quiz) => quiz.title === "HTML");

const getHtmlQuiz = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: htmlQuiz,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
module.exports = getHtmlQuiz;
