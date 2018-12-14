var path = require("path");



module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/categories.html"));
    });
    app.get("/homepage", function(req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));
    });
   


    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/404page.html"));
    });


};