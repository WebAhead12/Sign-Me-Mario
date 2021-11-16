const pg = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const connectionString = process.env.DB;

const db = new pg.Pool({ connectionString });

module.exports = db;
