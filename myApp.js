let express = require('express');
let app = express();

const absolutePath = __dirname + "/views/index.html"
console.log("Hello World")
let json = {
    message: "Hello json"
}

app.use("/public", express.static(__dirname + "/public"))

app.get("/", function(req, res) {
    res.sendFile(absolutePath);
})

app.get("/json", function(req, res) {
    res.json(json);
})































 module.exports = app;
