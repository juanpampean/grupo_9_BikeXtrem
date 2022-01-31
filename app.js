const express = require("express");
const app = express();

//Requiriendo path
const path = require("path");

//Acceso a archivos estaticos
app.use("/static", express.static(__dirname + "/public"));

//Levantando servidor
app.listen(3000, () => { console.log("servidor corriendo") });

//Ruta Home
app.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

//Ruta Login
<<
<< << < HEAD
app.get("/Login", function(req, res) {
            res.sendFile(path.resolve(__dirname, "./views/login.html")); ===
            === =
            app.get("/Login", function(req, res) {
                res.sendFile(path.resolve(__dirname, "./views/login_Registro.html")); >
                ace >>> >>> 6 ca464c8534bcb596073c4a61f55d4f31178b9cf
            });

            //Ruta ProductDetail
            app.get("/ProductDetail", function(req, res) {
                res.sendFile(path.resolve(__dirname, "./views/ProductDetail.html"));
            });
            //Ruta ProductCart
            app.get("/ProductCart", function(req, res) {
                res.sendFile(path.resolve(__dirname, "./views/ProductCart.html"));
            });