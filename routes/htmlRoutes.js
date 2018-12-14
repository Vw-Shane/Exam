var path = require("path");



module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));
    });
    app.get("/5thgrade", function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/5thgrade.html"));
    });
    app.get("/7thgrade", function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/7thgrade.html"));
    });
    app.get("/8thgrade", function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/8thgrade.html"));
    });
	app.get("/allGradesTest", function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/allTest.html"));
    });
    app.get("/bookmarks", function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/bookmarks.html"));
    });
   


    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/404page.html"));
    });


};