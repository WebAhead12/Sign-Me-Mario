const express = require("express");
const router = express.Router();
const path = require("path");
const handlers = require("./handlers"); //Automatically requires /handlers/index.js

router.use(express.urlencoded({ extended: false }));

router.get("/", handlers.home.get);
router.get("/all-petitions", handlers.home.all);

router.use(express.static(path.join(__dirname, "front-end", "index")));

router.get("/create-petitions", handlers.create.get);
router.post("/create-petitions", handlers.create.post);

router.get("/p/:petition_id", handlers.petition.get);
router.get("/petition", handlers.petition.showURL);
router.use(express.static(path.join(__dirname, "front-end", "petition")));

router.get("/authenticate", handlers.authenticate.showHTML);
router.post("/log-in",handlers.authenticate.log_in_post);
router.post("/register", handlers.authenticate.register_post);



module.exports = router;
