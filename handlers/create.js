const db = require("../database/connection");
const path = require("path");

const get = (req, res) => {
  //if not signed in redirects to login page
  if (!req.user_id) {
    res.redirect("/authenticate?message=Not_logged_in_please_log_in");
  } else {
    res.sendFile(
      //else shows create html page
      path.join(__dirname, "..", "front-end", "create", "create.html")
    );
  }
};
//posting the create and adding it to the petitions table
const post = (req, res) => {

  db.query(
    "INSERT INTO petitions(title,user_id,content,goal,image_link) VALUES($1,$2,$3,$4,$5) RETURNING id",
    [req.body.title, req.user_id,req.body.content, req.body.goal, req.body.image_link] //add user_id cookie
  )
    .then((result) => {
      console.log(result.rows);
      res.redirect(`/petition?id=${result.rows[0].id}`);
    })
    .catch(console.error);
};
module.exports = { get, post };
