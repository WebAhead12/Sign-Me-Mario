const express = require("express");
const router = express.Router();
const path = require("path");
const handlers = require("./handlers"); //Automatically requires /handlers/index.js

router.get("/", handlers.home.get);
router.get("/all-petitions", handlers.home.all);

router.use(express.static(path.join(__dirname, "front-end", "index")));
router.get("/create-petitions", handlers.create.get);
router.post("/create-petitions", handlers.create.post);

router.get("/petition", handlers.petition.showHTML);

router.get("/p/:petition_id", handlers.petition.get);

module.exports = router;
