var path = require("path");
var helpers = require('handlebars-helpers')();

module.exports = function(app) {
	  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/profile.html"));
  });
	  
};	
