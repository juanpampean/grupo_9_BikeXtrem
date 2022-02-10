const express = require("express");
const app = express();

//Requiriendo path
const path = require("path");

//Acceso a archivos estaticos
app.use("/static", express.static(__dirname + "/public"));

//Levantando servidor
app.listen(process.env.PORT || 3000, () => { console.log("servidor corriendo") });

// AGREGAMOS ROUTER:
const rutas = require('./src/routes/mainRoutes.js');
app.use('/', rutas);


//Ruta Home
/*app.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname, "./src/views/users/index.html"));
});*/
//Ruta Login
/*app.get("/Login",function(req,res){
    res.sendFile(path.resolve(__dirname,"./src/views/users/login_Registro.html"));
});*/

//Ruta ProductDetail
app.get("/ProductDetail",function(req,res){
    res.sendFile(path.resolve(__dirname,"./src/views/products/productDetail.html"));
});

//Ruta ProductDetail_2
app.get("/ProductDetail_2",function(req,res){
    res.sendFile(path.resolve(__dirname,"./src/views/products/productDetail_2.html"));
});

//Ruta ProductDetail_3
app.get("/ProductDetail_3",function(req,res){
    res.sendFile(path.resolve(__dirname,"./src/views/products/productDetail_3.html"));
});


//Ruta ProductCart
/*app.get("/ProductCart", function(req, res) {
    res.sendFile(path.resolve(__dirname, "./src/views/products/productCart.html"));
});*/
