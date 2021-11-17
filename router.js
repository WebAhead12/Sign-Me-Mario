const express = require("express");
const router = express.Router();
const path = require("path");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const handlers = require("./handlers"); //Automatically requires /handlers/index.js

router.use(express.urlencoded({ extended: false }));

router.get("/", handlers.home.get);
router.get("/all-petitions", handlers.home.all);

router.use(express.static(path.join(__dirname, "front-end", "index")));

router.get("/create-petition", handlers.create.get);
router.post("/create-petition", handlers.create.post);

router.get("/p/:petition_id", handlers.petition.get);
router.get("/petition", handlers.petition.showURL);
router.use(express.static(path.join(__dirname, "front-end", "petition")));

router.get("/authenticate", handlers.authenticate.showHTML);
router.post("/log-in",handlers.authenticate.log_in_post);
router.post("/register", handlers.authenticate.register_post);
router.use(express.static(path.join(__dirname, "front-end", "authenticate")));



module.exports = router;
