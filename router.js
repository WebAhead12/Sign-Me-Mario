const express = require("express");
const router = express.Router();
const path = require("path");
const cookieParser = require("cookie-parser");
const verifyToken = require("./middleware/verifyToken");
const handlers = require("./handlers"); //Automatically requires /handlers/index.js

router.use(cookieParser());

//index handler
router.get("/",handlers.home.get);
router.get("/all-petitions",handlers.home.all);
router.use(express.static(path.join(__dirname, "front-end", "index")));
//creating a new petition handler
router.get("/create-petition", verifyToken, handlers.create.get);
router.post("/create-petition", verifyToken, handlers.create.post);
router.use(express.static(path.join(__dirname, "front-end", "create")));
//clicking on a petiton handler and signing handler
router.get("/p/:petition_id", verifyToken, handlers.petition.get);
router.get("/petition", verifyToken, handlers.petition.showURL);
router.post("/sign-petition", verifyToken, handlers.petition.sign);
router.use(express.static(path.join(__dirname, "front-end", "petition")));
//authentication handler
router.get("/authenticate", handlers.authenticate.showHTML);
router.post("/register", handlers.authenticate.registerPost);
router.post("/log-in", handlers.authenticate.logInPost);
router.post("/log-out", handlers.authenticate.logOutGet);
router.use(express.static(path.join(__dirname, "front-end", "authenticate")));
//get cookie information route used in front end
router.get("/cookieId", verifyToken, (req, res) => {
  res.json({ user_id: req.user_id });
});
module.exports = router;
