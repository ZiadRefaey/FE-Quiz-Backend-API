const express = require("express");

const getHtmlQuiz = require(`${__dirname}/../controllers/htmlController.js`);
const router = express.Router();
router.route("/html").get(getHtmlQuiz);
module.exports = router;
