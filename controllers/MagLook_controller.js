var express = require("express");

var router = express.Router();

var db = require("../models");
var request = require('request');
var fs = require("fs");
var _ = require('underscore');
let NewsAPI = require('newsapi');

let newsapi = new NewsAPI('31a06e480ed04534bc2eda6adfb8fc5f');


var helpers = require('handlebars-helpers')();




// Create all our routes and set up logic within those routes where required.
router.get("/celebrities", function(req, res) {
    // console.log(req);
    // console.log(res);

    db.Article.findAll({
          where: {
            category: "celebrities"
          }
    }).then(function(dbArticle) {
      // console.log(dbArticle)
    var hbsObject = {
      articles: dbArticle
    };      
      // We have access to the todos as an argument inside of the callback function
      res.render("index", hbsObject);
    });

});   

// Create all our routes and set up logic within those routes where required.
router.get("/news", function(req, res) {
    // console.log(req);
    // console.log(res);

    db.Article.findAll({
          where: {
            category: "news"
          }
    }).then(function(dbArticle) {
      // console.log(dbArticle)
    var hbsObject = {
      articles: dbArticle
    };      
      // We have access to the todos as an argument inside of the callback function
      res.render("index", hbsObject);
    });

});  


// Create all our routes and set up logic within those routes where required.
router.get("/sports", function(req, res) {
    // console.log(req);
    // console.log(res);

    db.Article.findAll({
          where: {
            category: "sports"
          }
    }).then(function(dbArticle) {
      // console.log(dbArticle)
    var hbsObject = {
      articles: dbArticle
    };      
      // We have access to the todos as an argument inside of the callback function
      res.render("index", hbsObject);
    });

});


// Create all our routes and set up logic within those routes where required.
router.get("/tech", function(req, res) {
    // console.log(req);
    // console.log(res);

    db.Article.findAll({
          where: {
            category: "technology"
          }
    }).then(function(dbArticle) {
      // console.log(dbArticle)
    var hbsObject = {
      articles: dbArticle
    };      
      // We have access to the todos as an argument inside of the callback function
      res.render("index", hbsObject);
    });

});


// Export routes for server.js to use.
module.exports = router;
