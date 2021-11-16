const db = require("../database/connection");
const path = require("path");

const get = (req, res) => {
  console.log(req.params.petition_id);
  const petition_id = req.params.petition_id;
  db.query(`SELECT * FROM petitions WHERE id = $1`, [petition_id]).then(
    (result) => {
      res.send(result.rows);
    }
  );
};

const post = (req, res) => {};

module.exports = { get, post };
