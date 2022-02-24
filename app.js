const express = require("express");
const app = express();

//Requiriendo path
const path = require("path");

//Acceso a archivos estaticos
app.use("/static", express.static(__dirname + "/public"));

// Renderizando las Vistas con el motor de plantillas
app.set('view engine', 'ejs');
/*app.set('views', path.join(__dirname, 'views'));*/ // Define la ubicación de la carpeta de las Vistas
// ************ Template Engine - (don't touch) ************

/*app.set ('views/products', './src/views/products')*/
app.set('views', './src/views/');

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
/*
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
});*/


//Ruta ProductCart
/*app.get("/productCart", (req, res) => {
    res.render("productCart", { titulo: "BikeXtrem Carrito" });
});
/*app.get("/ProductCart", function(req, res) {
    res.sendFile(path.resolve(__dirname, "./src/views/products/productCart.html"));
});
*/

module.exports = app;