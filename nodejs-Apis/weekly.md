// Reunión Semanal o Weekly 07/02/2022 //

● Qué se hizo ayer:
* Revisión de Tareas de Backlog, distribución de las tareas.

● Si se encontró con algún impedimento:
* Problemas de Distribución de las Vistas en Carpetas.
* Fallas al implementación de  las rutas de acceso a las vistas, que fuimos luego viendo en clases.

● Qué vamos a hacer hoy:
* Se propuso reunión para el próximo sábado 12 para revisión de avances del sprint y asignación de deberes a fin de completar lo requerido.


// Reunión Semanal o Weekly 12/02/2022 //

  ● Qué se hizo ayer:
* Ser realizaron los archivos partials de Footer, Head y Header.
* Se ajustó el app.js


● Si se encontró con algún impedimento.
* La renderización y los include nos dieron problemas a la hora de ubicar las carpetas.

● Qué vamos a hacer hoy:
* Googlear la forma de realizar el listado de productos.
* El formulario de Productos.

// Reunión Semanal o Weekly 17/02/2022 //

  ● Qué se hizo ayer:
* Ser ajustaron a Mobile First los archivos partials de Footer, Head y Header.
* Formulario de Productos.

● Si se encontró con algún impedimento.
* La modificación con Mobile First va en mejora contínua.

● Qué vamos a hacer hoy:
* Googlear mejoras en los Styles de CSS.

// Reunión Semanal o Weekly 23/02/2022 //

  ● Qué se hizo ayer:
* Se creó la carpeta Data Con Lista de productos y Usuarios.

● Si se encontró con algún impedimento.
* Ser ajustaron a Mobile First los archivos partials de Footer, Head y Header.
* La modificación con Mobile First va en mejora contínua.

● Qué vamos a hacer hoy:
* Realizar las respectivas Rutas:

///Kerby:///
1. /products (GET)
Listado de productos
2. /products/create (GET)
Formulario de creación de productos
3. /products/:id (GET)
Detalle de un producto particular

///Kristina:///
4. /products (POST)
Acción de creación (a donde se envía el formulario)
5. /products/:id/edit (GET)
Formulario de edición de productos

///Jonima:///
6. /products/:id (PUT)
Acción de edición (a donde se envía el formulario):
7. /products/:id (DELETE)
Acción de borrado


// Reunión Semanal o Weekly 15/03/2022 //

  ● Qué se hizo ayer:
* Se revisaron los puntos correspondientes al sprint 5 y sus respectivas asignaciones.

  ● Si se encontró con algún impedimento.
* Se acordó separar los formularios de registro y login para su mejor funcionamiento y control.
* La modificación con Mobile First va en mejora contínua.

  ● Qué vamos a hacer hoy:
* Asignaciones:
///Jonima:///
5. Implementar el formulario de registro de usuarios.
● Deberá permitir la subida de una imagen de perfil (con Multer).
● Deberá encriptar la contraseña ingresada por el usuario (con bcrypt.js).
● Deberá guardar los datos enviados en el archivo JSON de usuarios.

///Kristina:///
6. Implementar un formulario de login que:
● Incluya los campos de email y password.
● Verifique la información enviada por el usuario y según el caso:
○ Redireccione a la home o a la página de perfil en caso de éxito y muestre
los datos del usuario en algún lugar del sitio, como el header.
○ Redireccione nuevamente al login en caso de error.

///Kerby:///
7. Implementar la función de recordar al usuario
●Utilizar cookies para guardar esa información en el navegador.
● Implementar un middleware de aplicación que busque la cookie y loguee al
usuario en caso de que exista y sus datos sean correctos.

///Juan:///
Implementar rutas de huéspedes y de usuarios
● Rutas accesibles por cualquiera → sin cambios.
● Rutas accesibles solo sin login → redirigen al perfil.
● Rutas accesibles solo con login → redireccionan al login.

// Reunión Semanal o Weekly 08/04/2022 //
● Qué se hizo ayer:
* Se revisaron los puntos correspondientes al sprint 6 y sus respectivas asignaciones.
 
 ● Si se encontró con algún impedimento.
* Botón de logout que sólo se vé si haces login.(RESUELTO)
* Botón de recuerdame.(RESUELTO)

 ● Qué vamos a hacer hoy:
 *Asignaciones:

///Juan:///
Punto 4. Diagrama de base de datos
● Usuarios (recuerden ver los campos sugeridos en el sprint 3).
● Productos (recuerden ver los campos sugeridos en el sprint 3).
● Tablas secundarias (según lo requiera su proyecto).
○ Para productos: categorías, marcas, colores, talles, etc.


///Kerby:///
5. Script de estructura
Tomando como referencia el diagrama del punto anterior, tienen que escribir las
sentencias de SQL que crearán las tablas y sus relaciones.
● Deberá incluir la creación de la base de datos (create database…).
● Deberá incluir la creación de todas las tablas del sitio (create table…).
● Deberá incluir los tipos de datos de los campos y sus restricciones (primary keys,
(not) null, unique, default, etc).
● Deberá incluir las relaciones entre las diferentes tablas (foreign keys)

///Jonima:///
7. Creación de carpeta Sequelize y archivos de
modelos
Mediante la herramienta sequelize-cli deberán crear la carpeta que contenga los
archivos de configuración de Sequelize. Una vez configurado Sequelize, seguirá crear los
archivos de modelos para explicarle cómo es la estructura de la base de datos.
La carpeta database deberá incluir:
● Los archivos de configuración para que Sequelize se conecte a la base de datos.
● Los archivos de modelos para representar las tablas de:
○ Usuarios.
○ Productos.
○ Tablas secundarias (categorías, marcas, colores, talles, etc).
○ (Opcional) Carrito de compras.
○ (Opcional) Productos de cada carrito de compras.
● Los modelos deben incluir todas las relaciones existentes en la base de datos.

///Kristina:///
8. ¡CRUD!
● Para productos:
○ Crear
○ Editar
○ Eliminar
○ Listar
○ Ver el detalle
○ Buscar

///Todos:///
8. ¡CRUD!
● Para usuarios:
○ Crear
○ Editar
○ Ver el detalle

// Reunión Semanal o Weekly 20/04/2022 //
● Qué se hizo ayer:
* Se revisaron los modelos en donde se consideraba la subida de imagenes; las cuales no están permitidas de forma tan directa con sequelize.

● Si se encontró con algún impedimento.
* Donde usabamos el parámetro Datatypes definido arriba entre paréntesis (sequelize,DataTypes) luego debajo no lo escribíamos igual, estaba por ejemplo "datatype", y por otro lado  según lo que dice la bibliografia de Sequelize, si queremos poner una cantidad de dígitos al INTEGER entonces se deja de usar INTEGER para usar BIGINT(10) por ejemplo.
 
 ● Qué vamos a hacer hoy:
 *Asignaciones:
  Queda pendiente declarar las imágenes en sql; para poder subirlas.

// Reunión Semanal o Weekly 25/04/2022 //
● Qué se hizo: Revisión de Crasheos, y mejoras, se dejó funcionando la aplicación.

// Reunión Semanal o Weekly 25/04/2022 //

● Qué se hizo:
 Se revisaron los puntos correspondientes al sprint actual y sus respectivas asignaciones.

● Qué vamos a hacer hoy: Puntos pendientes:
CRUD Productos:
   - Destroy 
   - Update
   - Buscar 
CRUD tablas carrito / ordenes (opcional)
Paginado listados de productos y buscadores (opcional)
Vista Registro : Mejorar CSS

// Reunión Semanal o Weekly 09/05/2022 //
● Qué se hizo ayer:
* Se revisaron los puntos correspondientes al sprint 7 y sus respectivas asignaciones.

 ● Qué vamos a hacer hoy: Validaciones de back-end y front-end
 *Asignaciones:
 
 ** Validaciones del back-end
● Registro de usuarios ///Juan///
○ Nombre y apellido
■ Obligatorio.
■ Deberá tener al menos 2 caracteres.
○ Email
■ Obligatorio.
■ Deberá ser un formato de e-mail válido.
■ No puede repetirse con los e-mails ya registrados.
○ Contraseña
■ Obligatoria.
■ Deberá tener al menos 8 caracteres.
■ (Opcional) → Deberá tener letras mayúsculas, minúsculas, un
número y un carácter especial.
○ Imagen
■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).

● Login de usuarios ///Joni//
○ Email
■ Obligatorio.
■ Deberá ser válido.
■ Deberá existir en base.
○ Contraseña
■ Obligatoria.
■ Deberá coincidir con la existente en base.

● Creación de productos.///Juan///
○ Nombre
■ Obligatorio.
■ Deberá tener al menos 5 caracteres.
○ Descripción
■ Deberá tener al menos 20 caracteres.
○ Imagen
■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).
○ (Opcional) Tablas secundarias
■ Verificar que los valores existan en base. Es decir, que los valores
de talles, colores, etc. que lleguen sean válidos en la base.
● (Opcional) Resto de los formularios del sitio


● Modificación de productos.///Joni///
○ Nombre
■ Obligatorio.
■ Deberá tener al menos 5 caracteres.
○ Descripción
■ Deberá tener al menos 20 caracteres.
○ Imagen
■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).
○ (Opcional) Tablas secundarias
■ Verificar que los valores existan en base. Es decir, que los valores
de talles, colores, etc. que lleguen sean válidos en la base.
● (Opcional) Resto de los formularios del sitio


** Validaciones del front-end:
Registro de usuarios ///KRIS///
○ Nombre y apellido
■ Obligatorio.
■ Deberá tener al menos 2 caracteres.
○ Email
■ Obligatorio.
■ Deberá ser válido.
■ (Opcional) → No puede repetirse con los e-mails ya registrados.
○ Contraseña
■ Obligatoria.
■ Deberá tener al menos 8 caracteres.
■ (Opcional) → Deberá tener letras mayúsculas, minúsculas, un
número y un carácter especial.
○ Imagen
■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).

Login de usuarios ///JONI///
○ Email
■ Obligatorio.
■ Deberá ser válido.
■ (Opcional) → Debe existir en la base.
○ Contraseña
■ Obligatoria.

Creación de productos ///Ker///
○ Nombre
■ Obligatorio.
■ Deberá tener al menos 5 caracteres.
○ Descripción
■ Deberá tener al menos 20 caracteres.
○ Imagen
■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF)

Modificación de productos ///Juan///
○ Nombre
■ Obligatorio.
■ Deberá tener al menos 5 caracteres.
○ Descripción
■ Deberá tener al menos 20 caracteres.
○ Imagen
■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF)

// Reunión Semanal o Weekly 26/05/2022 //

● Qué se hizo ayer:
* Se revisaron los puntos correspondientes al sprint 8 y sus respectivas asignaciones.

● Qué vamos a hacer hoy: Apis + React
 *Asignaciones:

 API de usuarios ///Joni///
● api/users/
  ○ Deberá devolver un objeto literal con la siguiente estructura:
  ■ count → cantidad total de usuarios en la base.
  ■ users → array con la colección de usuarios, cada uno con:
  ● id
  ● name
  ● email
  ● detail → URL para obtener el detalle.
● api/users/:id
  ○ Deberá devolver un objeto literal con la siguiente estructura:
  ■ Una propiedad por cada campo en base.
  ■ Una URL para la imagen de perfil (para mostrar la imagen).
  ■ Sin información sensible (ej: password y categoría).


API de productos /// Kris///
● api/products/
  ○ Deberá devolver un objeto literal con la siguiente estructura:
  ■ count → cantidad total de productos en la base.
  ■ countByCategory → objeto literal con una propiedad por categoría
  con el total de productos.
  ■ products → array con la colección de productos, cada uno con:
  ● id
  ● name
  ● description
  ● un array con principal relación de uno a muchos (ej:
  categories).
  ● detail → URL para obtener el detalle.
● api/products/:id
  ○ Deberá devolver un objeto literal con la siguiente estructura:
  ■ una propiedad por cada campo en base.
  ■ un array por cada relación de uno a muchos (categories, colors,
  sizes, etc).
  ■ Una URL para la imagen del producto (para mostrar la imagen).

Dashboard en React ///Juan, Kerby///
El dashboard deberá contener al menos:
● 3 a 6 paneles simples con los siguientes totales:
○ Total de productos
○ Total de usuarios
○ Total de categorías
● Panel de detalle de último producto o usuario creado.
● Panel de categorías con el total de productos de cada una.
● Panel con el listado de productos.
