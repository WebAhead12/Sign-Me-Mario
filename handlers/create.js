const db = require("../database/connection");
const path = require("path");

const get = (req, res) => {
  //if not signed in redirects to login page
  if (!req.user_id) {
    res.redirect("/authenticate?message=no");
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
    "INSERT INTO petitions(title,content,goal,image_link) VALUES($1,$2,$3,$4) RETURNING id",
    [req.body.title, req.body.content, req.body.goal, req.body.image_link] //add user_id cookie
  )
    .then((result) => {
      console.log(result.rows);
      res.redirect(`/petition?id=${result.rows[0].id}`);
    })
    .catch(console.error);
};
module.exports = { get, post };
