require('dotenv').config()
let express = require('express');
let bodyParser = require('body-parser')
let app = express();


const absolutePath = __dirname + "/views/index.html"
console.log("Hello World")

app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
})

// estos dos montan el body parser para todas las rutas
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//para poder usar archivos dentro de public
app.use("/public", express.static(__dirname + "/public"))

// para enviar el archivo index.html
app.get("/", function(req, res) {
    res.sendFile(absolutePath);
})

  // tevuelve la fecha actual cuando haces la llamada ademas de tener 2 middleware
  app.get('/now', function(req, res, next) {
    req.time = new Date().toString()  // Hypothetical synchronous operation
    next();
  }, function(req, res) {
    res.json({time: req.time});
  });

app.get("/json", function(req, res) {
    let message = 'Hello json';

  // Comprueba el ENV y mira si la variable MESSAGE_STYLE existe y si el valor de esta es uppercase
    if (process.env.MESSAGE_STYLE && process.env.MESSAGE_STYLE.toLowerCase() === 'uppercase') {
        message = message.toUpperCase();
    }

  // Send the response object
    res.json({ message });
})

  // parametro GET llamado word y lo devuelve
  app.get("/:word/echo", function(req, res) {
    let word = req.params.word
    res.json({echo: word})
  })

  // devuelve el nombre enviado por metodo POST
  app.post("/name", function(req, res) {
    // Handle the data in the request
    let string = req.body.first + " " + req.body.last;
    res.json({ name: string });
  });

    // devuelve el 
  app.get("/name", function(req, res) {
    let firstname = req.query.first;
    let lastname = req.query.last;

    res.json({name: firstname + " " + lastname})
  })































 module.exports = app;
