const express = require("express");
const router = express.Router();
const path = require("path");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const SECRET = "asdjgasgdhbrkj%&$*t";
const verifyToken = require("./middleware/verifyToken");
const handlers = require("./handlers"); //Automatically requires /handlers/index.js

router.use(cookieParser());
router.use(express.urlencoded({ extended: false }));

router.get("/", handlers.home.get);
router.get("/all-petitions", handlers.home.all);
router.use(express.static(path.join(__dirname, "front-end", "index")));

router.get("/create-petition",handlers.create.get);
router.post("/create-petition", verifyToken,handlers.create.post);
router.use(express.static(path.join(__dirname, "front-end", "create")));

router.get("/p/:petition_id", verifyToken,handlers.petition.get);
router.get("/petition", verifyToken,handlers.petition.showURL);
router.use(express.static(path.join(__dirname, "front-end", "petition")));

router.get("/authenticate", handlers.authenticate.showHTML);
router.post("/register", handlers.authenticate.register_post);
router.post("/log-in",handlers.authenticate.log_in_post);
router.post("/log-out",handlers.authenticate.log_out_get);
router.use(express.static(path.join(__dirname, "front-end", "authenticate")));



module.exports = router;
