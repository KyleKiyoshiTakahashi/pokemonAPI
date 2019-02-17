var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/pokemon-app/dist/public' ));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

// app.get('//pokeapi.co/api/v2/pokemon/1/', function(req, res){

//     res.json('a;klsdfj')
// })




app.listen(8000, function() {
    console.log("listening on port 8000");
})