const express = require("express");
const app = express();
const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const cookies = require('cookie-parser');
const session = require("express-session");
const cors = require("cors");


const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware')
    //Necesario para sobreescribir el json
const bp = require('body-parser');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}))


// Pasar poder pasar el method="POST" en el formulario por PUT y DELETE
app.use(methodOverride('_method'));

//Requiriendo path
const path = require("path");

//Acceso a archivos estaticos
app.use('/static', express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

// Renderizando las Vistas con el motor de plantillas
app.set('view engine', 'ejs');
/*app.set('views', path.join(__dirname, 'views'));*/ // Define la ubicación de la carpeta de las Vistas
// ************ Template Engine - (don't touch) ************

/*app.set ('views/products', './src/views/products')*/
app.set('views', './src/views/');

app.use(cookies());
app.use(userLoggedMiddleware);
app.use(cors());

//Levantando servidor
const port = 3001
app.listen(process.env.PORT || `${port}`, () => { console.log("servidor corriendo") });



// REQUERIMOS RUTAS:
const rutas = require('./src/routes/mainRoutes');
const productRoutes = require('./src/routes/productRoutes');
const usersRoutes = require('./src/routes/usersRoutes');
const users = require("./src/database/models/user");


//RUTAS DE LAS APIs//
const userApiRoutes = require('./src/routes/api/userApiRoutes');
const productApiRoutes = require('./src/routes/api/productApiRoutes');


app.use('/', rutas);
app.use('/product', productRoutes);
app.use('/users', usersRoutes);

//Colección de recursos de APIs//
app.use('/api/users', userApiRoutes);
app.use('/api', productApiRoutes);


module.exports = app;