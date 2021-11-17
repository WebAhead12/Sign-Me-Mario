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
    [req.body.title, req.body.content, req.body.goal, req.body.image_link]
  )
    .then((result) => {
      res.redirect(`/p/${result}`);
    })
    .catch(console.error);
};
module.exports = { get, post };
