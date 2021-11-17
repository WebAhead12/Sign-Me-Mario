const db = require("../database/connection");
const path = require("path");
//home html page
const get = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "front-end", "index", "index.html"));
};
//sends all petitions to the index.js
const all = (req, res) => {
  db.query(
    `
    SELECT users.name,petitions.id,petitions.title,petitions.content,petitions.image_link,petitions.goal,petitions.signed 
     FROM users 
     INNER JOIN petitions 
     ON users.id = petitions.user_id;
     `
  )
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => console.error(error));
};

module.exports = { get, all };
