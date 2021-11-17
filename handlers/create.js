const db = require("../database/connection");
const path = require("path");

const get = (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "front-end", "create", "create.html")
  );
};

const post = (req, res) => {
  db.query(
    "INSERT INTO petitions(title,content,goal,image_link) VALUES($1,$2,$3,$4) RETURNING id",
    [
      req.body.title,
      req.body.content,
      req.body.goal,
      req.body.image_link,
      user_id,
    ]
  )
    .then((result) => {
      console.log(result.rows);
      res.redirect(`/petition?id=${result.rows[0].id}`);
    })
    .catch(console.error);
};
module.exports = { get, post };
