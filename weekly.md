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