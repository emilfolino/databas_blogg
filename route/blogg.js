/**
 * General routes.
 */
"use strict";

var express = require('express');
var router  = express.Router();

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const blogg = require("../src/blogg.js");
const category = require("../src/category.js");

// const commentRoute = require("./comment.js");
//
// router.use("/comment", commentRoute);

// Add a route for the path /
router.get('/', async (req, res) => {
    let data = {};

    data.res = await blogg.getAllPosts();

    res.render("list", data);
});

router.get("/create", async (req, res) => {
    let data = {};

    data.categories = await category.getAllCategories();

    res.render("form", data);
});

// Add a route for the path /about
router.post(
    "/create",
    urlencodedParser,
    async (req, res) => {

        console.log(req.body);
        await blogg.createPost(req.body);

        res.redirect("/");
});

module.exports = router;
