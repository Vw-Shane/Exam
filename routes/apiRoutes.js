// var path = require("path");
// var db = require("../models/thisdb.js");


// module.exports = function(app) {
//     app.get("/", function(req, res) {
//         res.sendFile(path.join(__dirname, "../index.html"));
//     });
//     app.get("/5thgrade", function(req, res) {
//         res.sendFile(path.join(__dirname, "../pages/5thgrade.html"));
//     });
//     app.get("/7thgrade", function(req, res) {
//         res.sendFile(path.join(__dirname, "../pages/7thgrade.html"));
//     });
//     app.get("/8thgrade", function(req, res) {
//         res.sendFile(path.join(__dirname, "../pages/8thgrade.html"));
//     });
// 	app.get("/allGradesTest", function(req, res) {
//         res.sendFile(path.join(__dirname, "../pages/allTest.html"));
//     });
//     app.get("/api", function(req, res) {
//         res.sendFile(path.join(__dirname, "../models/thisdb.js"));
//     });
   


//     app.get('*', function(req, res) {
//         res.sendFile(path.join(__dirname, "../pages/404page.html"));
//     });


// };