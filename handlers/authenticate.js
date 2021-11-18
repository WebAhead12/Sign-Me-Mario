const db = require("../database/connection");
const path = require("path");
const jwt = require("jsonwebtoken");
const SECRET = "asdjgasgdhbrkj%&$*t";

//shows signing in/registering html
const showHTML = (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "front-end", "authenticate", "authenticate.html")
  );
};
//registering taking data from the html form and inserting it into users table
const register_post = (req, res) => {
  db.query("SELECT username from USERS WHERE username=$1", [req.body.username])
    .then((result) => {
      if (result.rows[0]) {
        res.redirect(
          "/authenticate?message=Username_already_exists_please_user_a_different_name_or_login"
        );
      } else {
        db.query(
          "INSERT INTO users(name,username,password,email) VALUES($1,$2,$3,$4); ",
          [req.body.name, req.body.username, req.body.password, req.body.email]
        ).then((result) => {
          res.redirect("/authenticate?message=Account_registered_please_login");
        });
      }
    })
    .catch(console.error);
};
//loging in
const log_in_post = (req, res) => {
  db.query("SELECT password,id FROM users WHERE username=$1", [
    req.body.username,
  ])
    .then((results) => {
      //checking if the password is correct
      if (results.rows[0].password == req.body.password) {
        const token = jwt.sign(results.rows[0].id, SECRET);
        res.cookie("user_id", token, { maxAge: 6000000 });
        res.redirect("/");
      } else {
        //if not redircts it
        res.redirect(
          "/authenticate?message=Incorrect_password_please_try_again"
        );
      }
    })
    .catch(console.error);
};

const log_out_get = (req, res) => {
  res.clearCookie("user_id");
  res.redirect("/");
};

module.exports = { showHTML, register_post, log_in_post, log_out_get };
