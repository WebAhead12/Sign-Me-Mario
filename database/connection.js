const pg = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const connectionString = process.env.DB;