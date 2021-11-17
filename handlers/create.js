const db = require("../database/connection");
const path = require("path");
const jwt = require("jsonwebtoken");


const get = (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "front-end", "create", "create.html")
  );
};

const post = (req, res) => {
    console.log(req.user_id)
  db.query(
    "INSERT INTO petitions(title,content,goal,image_link,user_id) VALUES($1,$2,$3,$4,$5) RETURNING id",
    [
      req.body.title,
      req.body.content,
      req.body.goal,
      req.body.image_link,
      req.user_id,
    ]
  )
    .then((result) => {
      console.log(result.rows);
      res.redirect(`/petition?id=${result.rows[0].id}`);
    })
    .catch(console.error);
};
module.exports = { get, post };
