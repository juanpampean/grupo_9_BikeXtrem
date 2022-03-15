const express = require("express");
const app = express();

//Necesario para sobreescribir el json
const bp = require('body-parser');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

//Requiriendo path
const path = require("path");

//Acceso a archivos estaticos
app.use('/static', express.static(__dirname + "/public"));

// Renderizando las Vistas con el motor de plantillas
app.set('view engine', 'ejs');
/*app.set('views', path.join(__dirname, 'views'));*/ // Define la ubicación de la carpeta de las Vistas
// ************ Template Engine - (don't touch) ************

/*app.set ('views/products', './src/views/products')*/
app.set('views', './src/views/');

//Levantando servidor
app.listen(process.env.PORT || 3000, () => { console.log("servidor corriendo") });

// REQUERIMOS RUTAS:
const rutas = require('./src/routes/mainRoutes');
const productRoutes = require('./src/routes/productRoutes');


app.use('/', rutas);
app.use('/product', productRoutes);

module.exports = app;