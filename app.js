//intalacion de express
const express = require("express");
const app = express();

//Requiriendo path
const path = require ("path");

//Acceso a archivos estaticos
app.use(express.static(__dirname + "/public"));

//Levantando servidor
app.listen(3030,()=>{console.log("servidor corriendo")});

//Metodo de ruta
app.get("/",function(req,res){
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
});