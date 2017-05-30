
var path = require("path");



var helpers = require('handlebars-helpers')();
module.exports = function(app) {
	  app.post("/users/:id", function(req, res) {
 console.log(req.body);
    // console.log(res);
    db.Like.create({
    	
    })
    .then(function() {
    res.redirect("/users/:id");
    
    });      


});


	  

};	