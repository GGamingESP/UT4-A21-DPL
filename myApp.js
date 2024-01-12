require('dotenv').config()
let express = require('express');
let app = express();


const absolutePath = __dirname + "/views/index.html"
console.log("Hello World")

app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " " + req.ip);
  next();
})

app.use("/public", express.static(__dirname + "/public"))

app.get("/", function(req, res) {
    res.sendFile(absolutePath);
})

app.get("/json", function(req, res) {
    let message = 'Hello json';

  // Comprueba el ENV y mira si la variable MESSAGE_STYLE existe y si el valor de esta es uppercase
    if (process.env.MESSAGE_STYLE && process.env.MESSAGE_STYLE.toLowerCase() === 'uppercase') {
        message = message.toUpperCase();
    }

  // Send the response object
    res.json({ message });
})































 module.exports = app;
