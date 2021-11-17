const db = require("../database/connection");
const path = require("path");

const showHTML = (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "front-end", "authenticate", "authenticate.html")
  );
};
const register_post = (req, res) => {
    db.query("INSERT INTO users(name,username,password,email) VALUES($1,$2,$3,$4) RETURNING id, username; ",
    [req.body.name,req.body.username,req.body.password,req.body.email])
    .then((result) => res.next())
    .catch(console.error(error));
}

const log_in_post = (req,res) => {

    db.query("SELECT username,password FROM users WHERE username=$1",[req.body.username,req.body.password])
    .then(results=>{
        let data = results.rows;
        if(data.password == req.body.password){
            //make cookie
            console.log("Logged in");
        } else {
            res.redirect("/authenticate?error=incorrect");
        }
    })
}

module.exports = {showHTML,register_post,log_in_post}

