const express = require("express");
const app = express();

//Requiriendo path
const path = require("path");

//Acceso a archivos estaticos
app.use("/static", express.static(__dirname + "/public"));

//Levantando servidor
app.listen(process.env.PORT || 3000, () => { console.log("servidor corriendo") });

//Ruta Home
app.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
});
//Ruta Login
app.get("/Login",function(req,res){
    res.sendFile(path.resolve(__dirname,"./views/login_Registro.html"));
});

//Ruta ProductDetail
app.get("/ProductDetail",function(req,res){
    res.sendFile(path.resolve(__dirname,"./views/productDetail.html"));
});

//Ruta ProductDetail_2
app.get("/ProductDetail_2",function(req,res){
    res.sendFile(path.resolve(__dirname,"./views/productDetail_2.html"));
});

//Ruta ProductDetail_3
app.get("/ProductDetail_3",function(req,res){
    res.sendFile(path.resolve(__dirname,"./views/productDetail_3.html"));
});

//Ruta ProductCart
app.get("/ProductCart", function(req, res) {
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"));
});
