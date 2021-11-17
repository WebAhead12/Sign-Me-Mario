const path = require("path")
const db = require("../database/connection")

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

const sign = (req, res) => {
  const petition_id = req.body.petition_id;
  console.log("Pettion id: " + req.body.petition_id);
  db.query(
    `
    INSERT INTO signs (comment,user_id,petition_id) VALUES($1,$2,$3)
    `,[req.body.comment ,req.user_id, petition_id])
    .then((result) => {
      db.query("UPDATE petitions SET signed=signed+1 WHERE id=$1",[petition_id]).then(result=>{
        res.redirect("/petition?id=" + petition_id);
      })
  });
};
module.exports = { get, showURL, sign };
