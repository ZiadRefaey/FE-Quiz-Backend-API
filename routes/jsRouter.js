const express = require("express");

const getJsQuiz = require(`${__dirname}/../controllers/jsController.js`);
const router = express.Router();
router.route("/js").get(getJsQuiz);
module.exports = router;
