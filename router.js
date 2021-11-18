const express = require("express");
const router = express.Router();
const path = require("path");
const cookieParser = require("cookie-parser");
const verifyToken = require("./middleware/verifyToken");
const handlers = require("./handlers"); //Automatically requires /handlers/index.js

router.use(cookieParser());
router.use(express.urlencoded({ extended: false }));
//index handler
router.get("/", handlers.home.get);
router.get("/all-petitions", handlers.home.all);
//returns the index front end
router.use(express.static(path.join(__dirname, "front-end", "index")));
//creating a new petition handler
router.get("/create-petition", verifyToken, handlers.create.get);
router.post("/create-petition", verifyToken, handlers.create.post);
router.use(express.static(path.join(__dirname, "front-end", "create")));
//clicking on a petiton
router.get("/p/:petition_id", verifyToken, handlers.petition.get);
router.get("/petition", verifyToken, handlers.petition.showURL);
//sign  petition
router.post("/sign-petition", verifyToken, handlers.petition.sign);
router.use(express.static(path.join(__dirname, "front-end", "petition")));

router.get("/authenticate", handlers.authenticate.showHTML);
router.post("/register", handlers.authenticate.register_post);
router.post("/log-in", handlers.authenticate.log_in_post);
router.post("/log-out", handlers.authenticate.log_out_get);
router.use(express.static(path.join(__dirname, "front-end", "authenticate")));

router.get("/cookieId", verifyToken, (req, res) => {
  res.json({ user_id: req.user_id });
});

module.exports = router;
