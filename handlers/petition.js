const db = require("../database/connection");
const path = require("path");

const get = (req, res) => {
  const id = req.params.petition_id;
  db.query(`SELECT * FROM petitions WHERE id = $1`, [id]).then((results) => {
    console.log(results.rows);
    res.send(results.rows);
  });
};

const post = (req, res) => {};

module.exports = { get, post };
