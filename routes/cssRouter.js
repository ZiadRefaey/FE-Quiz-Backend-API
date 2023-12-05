const express = require("express");

const getCsslQuiz = require(`${__dirname}/../controllers/cssController.js`);
const router = express.Router();
router.route("/css").get(getCsslQuiz);
module.exports = router;
