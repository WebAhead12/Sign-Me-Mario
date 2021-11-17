const db = require("../database/connection");
const path = require("path");

const get = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "front-end", "index", "index.html"));
};

const all = (req, res) => {
  db.query(
    `
    SELECT users.name,petitions.id,petitions.title,petitions.content,petitions.image_link 
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
