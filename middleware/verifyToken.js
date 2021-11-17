const jwt = require("jsonwebtoken");
const SECRET = "asdjgasgdhbrkj%&$*t";
const path = require("path");

function verifyToken(req, res, next) {
  const user_idToken = req.cookies.user_id;
  if (user_idToken) {
    const user_id = jwt.verify(user_idToken, SECRET);
    req.user_id = user_id;
  }
  next();
}

module.exports = verifyToken;