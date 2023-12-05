const express = require("express");

const router = express.Router();
const getAccessQuiz = require(`${__dirname}/../controllers/accessabilityController.js`);
router.route("/accessability").get(getAccessQuiz);
module.exports = router;
