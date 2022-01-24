//instalacion de express
const express = require("express");
const app = express();

//Requiriendo path
const path = require ("path");

//Acceso a archivos estaticos
app.use("/static",express.static(__dirname + "/public"));

//Levantando servidor
app.listen(3000,()=>{console.log("servidor corriendo")});

//Ruta Home
app.get("/",function(req,res){
    res.sendFile(path.resolve(__dirname,"./views/index.html"));
});

//Ruta Login
app.get("/Login",function(req,res){
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
});