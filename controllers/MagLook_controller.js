var express = require("express");

var router = express.Router();

var db = require("../models");
var request = require('request');
var fs = require("fs");
var _ = require('underscore');
let NewsAPI = require('newsapi');

let newsapi = new NewsAPI('31a06e480ed04534bc2eda6adfb8fc5f');


var helpers = require('handlebars-helpers')();


router.get("/api/articles/entertainment-weekly", function(req, res) {



    newsapi.articles({
        source: 'entertainment-weekly', // required 
        sortBy: 'top' // optional 
    }).then(articlesResponse => {
        console.log(articlesResponse);


                  articlesResponse.articles.forEach(el => {
                    el.image_url = el.urlToImage;
                    el.description = el.title;
                    el.category = "celebrities";
                  })
                    db.Article.bulkCreate(
                        articlesResponse.articles

                    ).then(function(dbTodo1) {
                      console.log('60: ', dbTodo1)

                        res.json(dbTodo1);
                    }).catch(err=>console.log(err));
    });

});

router.get("/api/articles/mtv-news", function(req, res) {



    newsapi.articles({
        source: 'mtv-news', // required 
        sortBy: 'top' // optional 
    }).then(articlesResponse => {
        console.log(articlesResponse);


                  articlesResponse.articles.forEach(el => {
                    el.image_url = el.urlToImage;
                    el.description = el.title;
                    el.category = "celebrities";
                  })
                    db.Article.bulkCreate(
                        articlesResponse.articles

                    ).then(function(dbTodo1) {
                      console.log('60: ', dbTodo1)

                        res.json(dbTodo1);
                    }).catch(err=>console.log(err));
    });  
});




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


router.get("/api/articles/cnn", function(req, res) {



    newsapi.articles({
        source: 'cnn', // required 
        sortBy: 'top' // optional 
    }).then(articlesResponse => {
        console.log(articlesResponse);


                  articlesResponse.articles.forEach(el => {
                    el.image_url = el.urlToImage;
                    el.description = el.title;
                    el.category = "news";
                  })
                    db.Article.bulkCreate(
                        articlesResponse.articles

                    ).then(function(dbTodo1) {
                      console.log('60: ', dbTodo1)

                        res.json(dbTodo1);
                    }).catch(err=>console.log(err));
    });

});

router.get("/api/articles/nyt", function(req, res) {



    newsapi.articles({
        source: 'the-new-york-times', // required 
        sortBy: 'top' // optional 
    }).then(articlesResponse => {
        console.log(articlesResponse);


                  articlesResponse.articles.forEach(el => {
                    el.image_url = el.urlToImage;
                    el.description = el.title;
                    el.category = "news";
                  })
                    db.Article.bulkCreate(
                        articlesResponse.articles

                    ).then(function(dbTodo1) {
                      console.log('60: ', dbTodo1)

                        res.json(dbTodo1);
                    }).catch(err=>console.log(err));
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

router.get("/api/articles/espn", function(req, res) {



    newsapi.articles({
        source: 'espn', // required 
        sortBy: 'top' // optional 
    }).then(articlesResponse => {
        console.log(articlesResponse);


                  articlesResponse.articles.forEach(el => {
                    el.image_url = el.urlToImage;
                    el.description = el.title;
                    el.category = "sports";
                  })
                    db.Article.bulkCreate(
                        articlesResponse.articles

                    ).then(function(dbTodo1) {
                      console.log('60: ', dbTodo1)

                        res.json(dbTodo1);
                    }).catch(err=>console.log(err));
    });

});

router.get("/api/articles/fs", function(req, res) {



    newsapi.articles({
        source: 'fox-sports', // required 
        sortBy: 'top' // optional 
    }).then(articlesResponse => {
        console.log(articlesResponse);


                  articlesResponse.articles.forEach(el => {
                    el.image_url = el.urlToImage;
                    el.description = el.title;
                    el.category = "sports";
                  })
                    db.Article.bulkCreate(
                        articlesResponse.articles

                    ).then(function(dbTodo1) {
                      console.log('60: ', dbTodo1)

                        res.json(dbTodo1);
                    }).catch(err=>console.log(err));
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

router.get("/api/articles/techcrunch", function(req, res) {

    newsapi.articles({
        source: 'techcrunch', // required 
        sortBy: 'top' // optional 
    }).then(articlesResponse => {
        console.log(articlesResponse);


                  articlesResponse.articles.forEach(el => {
                    el.image_url = el.urlToImage;
                    el.description = el.title;
                    el.category = "technology";
                  })
                    db.Article.bulkCreate(
                        articlesResponse.articles

                    ).then(function(dbTodo1) {
                      console.log('60: ', dbTodo1)

                        res.json(dbTodo1);
                    }).catch(err=>console.log(err));
    });

});

router.get("/api/articles/engadget", function(req, res) {



    newsapi.articles({
        source: 'engadget', // required 
        sortBy: 'top' // optional 
    }).then(articlesResponse => {
        console.log(articlesResponse);


                  articlesResponse.articles.forEach(el => {
                    el.url = el.url
                    el.image_url = el.urlToImage;
                    el.description = el.title;
                    el.category = "technology";
                  })
                    db.Article.bulkCreate(
                        articlesResponse.articles

                    ).then(function(dbTodo1) {
                      console.log('60: ', dbTodo1)

                        res.json(dbTodo1);
                    }).catch(err=>console.log(err));
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
