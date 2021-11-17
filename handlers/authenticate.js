const db = require("../database/connection");
const path = require("path");
let data;

const showHTML = (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "front-end", "authenticate", "authenticate.html")
  );
};

const register_post = (req, res) => {

    db.query("SELECT username from USERS WHERE username=$1",[req.body.username])
    .then(result=>{
        if(result.rows[0]){
            res.redirect("/authenticate?message=dumbass");
        } else {
            db.query("INSERT INTO users(name,username,password,email) VALUES($1,$2,$3,$4); ",
            [req.body.name,req.body.username,req.body.password,req.body.email]).then(result=>{
                res.redirect("/authenticate?message=success");
            })
        }
    }).catch(console.error)


    // db.query("INSERT INTO users(name,username,password,email) VALUES($1,$2,$3,$4) RETURNING id, username; ",
    // [req.body.name,req.body.username,req.body.password,req.body.email])
    // .then((result) => res.next())
    // .catch((error)=>console.error(error));
}

const log_in_post = (req,res) => {

    db.query("SELECT password FROM users WHERE username=$1",[req.body.username])
    .then(results=>{
        let data = results.rows[0];
        console.log("DATA: " + results.rows[0].password);
        console.log("BODY: " + req.body.password);
        if(data.password == req.body.password){
            //make cookie


            console.log("Logged in");
            res.redirect("/")
        } else {
            res.redirect("/authenticate?error=incorrect");
        }
    })
    .catch(console.error);

  // db.query("INSERT INTO users(name,username,password,email) VALUES($1,$2,$3,$4) RETURNING id, username; ",
  // [req.body.name,req.body.username,req.body.password,req.body.email])
  // .then((result) => res.next())
  // .catch((error)=>console.error(error));
};

const log_in_post = (req, res) => {
  db.query("SELECT password FROM users WHERE username=$1", [
    req.body.username,
  ]).then((results) => {
    let data = results.rows[0];
    console.log("DATA: " + results.rows[0].password);
    console.log("BODY: " + req.body.password);
    if (data.password == req.body.password) {
      //make cookie
      console.log("Logged in");
      res.redirect("/");
    } else {
      res.redirect("/authenticate?error=incorrect");
    }
  });
};

module.exports = { showHTML, register_post, log_in_post };
