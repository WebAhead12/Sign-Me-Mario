const db = require("../database/connection");
const path = require("path");

const get = (req, res) => {
  const petition_id = req.params.petition_id;
  db.query(
    `SELECT petitions.*,users.name
  FROM petitions INNER JOIN users
  ON petitions.user_id = users.id
  AND $1 = petitions.id`,
    [petition_id]
  ).then((result) => {
    res.send(result.rows);
  });
};

const showURL = (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "front-end", "petition", "petition.html")
  );
};
// cookie petition id

const sign = (req, res) => {
  const petition_id = req.params.petition_id;
  console.log(req.params);
  db.query(
    `SELECT petitions.signed,users.name
  FROM petitions INNER JOIN users
  ON petitions.user_id = users.id
  AND $1 = petitions.id`,
    [petition_id]
  ).then((result) => {
    res.send(result.rows);
  });
};
module.exports = { get, showURL, sign };
