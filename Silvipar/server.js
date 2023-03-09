//jshint esversion:6

const express = require("express");
const app = express();

app.use( express.static('/Users/paulomedina/OneDrive/FREELANCE/GIS/SOIL TECH/Main'));

app.get("/", function(req, res){
    res.sendFile( path.join(__dirname, "Main", "/index.html"))
})

app.listen(3000, function(){
    console.log("Servidor en línea.")
    console.log("Para salir, hacer Control+C .")
});