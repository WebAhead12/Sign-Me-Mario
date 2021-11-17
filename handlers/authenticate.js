const db = require("../database/connection");
const path = require("path");

const showHTML = (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "front-end", "authenticate", "authenticate.html")
  );
};

const sign_up_post = (req, res) => {};

const log_in_post = (req, res) => {};

module.exports = { showHTML, sign_up_post, log_in_post };
