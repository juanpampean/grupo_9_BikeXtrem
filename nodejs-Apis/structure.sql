-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-06-2022 a las 00:19:14
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bikextrem`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE DATABASE `bikextrem`;
USE `bikextrem`;


CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `nombre_genero` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='GÃ©neros';

--
-- Volcado de datos para la tabla `genres`
--

INSERT INTO `genres` (`id`, `nombre_genero`) VALUES
(1, 'Femenino'),
(2, 'Masculino'),
(3, 'Otros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `fecha_orden` datetime DEFAULT NULL,
  `usuario_id` int(11) NOT NULL,
  `total_compra` float DEFAULT NULL,
  `direccion_orden` varchar(255) DEFAULT NULL,
  `status_orden` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Ordenes';

--
-- Volcado de datos para la tabla `orders`
--

INSERT INTO `orders` (`id`, `fecha_orden`, `usuario_id`, `total_compra`, `direccion_orden`, `status_orden`) VALUES
(1, '2022-05-01 16:47:29', 2, 50000, 'Villa Urquiza, CABA', 'Aprobada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `SKU` int(11) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `peso` float DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `categoria_id` int(11) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `proveedor_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Productos';

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `SKU`, `nombre`, `precio`, `peso`, `descripcion`, `categoria_id`, `imagen`, `create_date`, `stock`, `proveedor_id`) VALUES
(6, 123455, 'Orran Mountain', 80583, 15, 'Una bicicleta que responde a las necesidades y requerimientos de los consumidores locales. TREK en el mundo es sinÃ³nimo de garantÃ­a y confianza por la excelencia en sus procesos productivos y calidad de sus materiales.', 1, 'file-1653742601766-.png', '2022-03-22 12:36:36', 10, 5),
(7, 324895, 'Trek Merlin 6 ', 150000, 12, 'Trek Marlin 6 es una bicicleta de cross country diseÃ±ada para resultar eficiente sobre superficies de montaÃ±a gracias a su horquilla de suspensiÃ³n con bloqueo y a su sencilla transmisiÃ³n 1x. Se ha diseÃ±ado para el mountain bike, pero tambiÃ©n estÃ¡ e', 1, 'file-1653741779270-.png', '0000-00-00 00:00:00', 7, 5),
(8, 234232, 'Big Nine', 150000, 12, 'El Big Nine 15 es una construcciÃ³n versÃ¡til que se adapta tanto al ciclista recreativo como al ciclista de trail, con ruedas de 29 \"con una suspensiÃ³n delantera de recorrido de 100 mm, la transmisiÃ³n Shimano y los frenos de disco hidrÃ¡ulicos brindan ', 2, 'file-1653742713520-.png', '0000-00-00 00:00:00', 10, 2),
(9, 3112412, 'Cannondale XMax 29', 250000, 10, 'Las Bicicletas Mtb De Trinx EstÃ¡n DiseÃ±adas Para Aquellos Aventureros Que Buscan No Solo Un Viaje Diferente, Sino Una Bicicleta Diferente.', 1, 'file-1653741998509-.png', '0000-00-00 00:00:00', 10, 2),
(10, 3534, 'Kayane 14', 100000, 10, 'Para todos los dÃ­ias en las montaÃ±as. Bicicleta de Descenso de maxima fidelidad.', 6, 'file-1653742750862-.png', '0000-00-00 00:00:00', 6, 5),
(11, 31413, 'Nevada R29', 100000, 10, 'Para todos los dÃ­as del aÃ±o', 2, 'file-1653851491955-.png', '0000-00-00 00:00:00', 4, 4),
(12, 1341, 'Scultura 100', 143000, 10, 'La Bicicleta Merida Scultura 100 es una excelente bicicleta de carretera de rango medio para paseos en grupo o carreras, con su manejo Ã¡gil y comodidad ideal para la mayorÃ­a de los ciclistas que desean la simplicidad de los frenos de llanta.', 5, 'file-1653852241362-.png', '0000-00-00 00:00:00', 10, 1),
(13, 3131, 'Scultura 200', 117000, 1000, 'La bicicleta de carretera Merida Scultura 200 es una bicicleta de carretera dinÃ¡mica, diseÃ±ada con tecnologÃ­a vanguardista e innovadora para brindarte un paseo resbaladizo que es rÃ¡pido y divertido. Esta bicicleta es de toda clase en cada paseo, escal', 4, 'file-1653852333215-.png', '0000-00-00 00:00:00', 12, 1),
(14, 0, 'Trekk Merlin', 100000, 1000, 'Increible tecnologia sobre 2 ruedas', 4, 'file-1653855661689-.png', '0000-00-00 00:00:00', 10, 2),
(15, 0, 'Cannondale XMax 29', 100000, 130, 'Rutera de maximas prestaciones', 4, 'file-1653859146156-.png', '0000-00-00 00:00:00', 100, 1),
(16, 0, 'Fuji Merlin', 100, 10, 'Agregando detalle a la descripcion', 4, 'file-1653853919020-.png', '0000-00-00 00:00:00', 10, 2),
(17, 0, 'On Road Bike', 100, 10, 'Ruteras en su mÃ¡xima expresiÃ³n', 4, 'file-1653854452897-.png', '0000-00-00 00:00:00', 10, 2),
(18, 0, 'Trekk Merlin', 100, 10, 'Agregando detalle a la descripcion', 2, 'file-1653854040758-.png', '0000-00-00 00:00:00', 10, 2),
(22, 0, 'Tandem Bike', 100, 10, 'Bicicleta para salir en Equipo', 3, 'file-1653854091659-.png', '0000-00-00 00:00:00', 2, 1),
(23, 0, 'Specialized E1', 124000, 13, 'La nueva Bicicleta Specialized E1 es ideal para los ciclistas que le gustan los circuitos agresivos y descensos mÃ¡s cercanos al DH y teniendo, tambiÃ©n, un buen comportamiento en subida. Su presentaciÃ³n con un cuadro mÃ¡s ligero y manteniendo un gran re', 6, 'file-1653854916108-.png', '0000-00-00 00:00:00', 14, 2),
(24, 0, 'Max Speed', 100000, 10, 'Bicicleta ideal para las rutas.', 4, 'file-1653854559243-.png', '0000-00-00 00:00:00', 10, 2),
(28, 1313, 'E-Bike', 100, 10, 'E-bike para alcanzar las mejores rutas el mismo dia', 2, 'file-1653853252060-.jpg', '0000-00-00 00:00:00', 6, 1),
(29, 0, 'E-Bike Tornado', 10, 12, 'Para usar todos los dias!', 2, 'file-1653853397356-.png', '0000-00-00 00:00:00', 5, 2),
(30, 0, 'Karakoram', 0, 0, 'Bicicleta de Descenso', 1, 'file-1653855388023-.png', '0000-00-00 00:00:00', 0, 1),
(33, 0, 'Rafagas', 0, 0, 'Bicicleta de Descenso', 6, 'file-1653855107040-.png', '0000-00-00 00:00:00', 0, 1),
(34, 0, 'Rutera Equifax', 0, 0, 'Bicicleta de ruta para los mejores recorridos.', 2, 'file-1653856535525-.jpg', '0000-00-00 00:00:00', 0, 1),
(35, 0, 'E-Bike Pampas', 0, 0, 'E-Bike pensada para las majores salidas.', 2, 'file-1653853740556-.jpg', '0000-00-00 00:00:00', 0, 1),
(36, 0, 'Descenso', 100000, 0, 'eqwnqcqwcqifqpeqwiomqwcqwicqwcqp', 2, 'file-1653852431258-.png', '0000-00-00 00:00:00', 0, 1),
(37, 0, 'Trekk Merlin', 0, 0, 'La bicicleta de montaÃ±a recreativa perfecta para que los nuevos ciclistas se sumerjan en los senderos, una soluciÃ³n para los desplazamientos o simplemente una bicicleta divertida para la ciudad o el campo. Un cuadro completamente nuevo con geometrÃ­a ac', 2, 'file-1653853608118-.png', '0000-00-00 00:00:00', 0, 2),
(38, 0, 'Trekk Merlin', 85000, 0, 'Bicicleta Mountain Bike con lo Ãºltimo en transmisiÃ³n.', 3, 'file-1653855483319-.png', '0000-00-00 00:00:00', 0, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_orders`
--

CREATE TABLE `products_orders` (
  `id` int(11) NOT NULL,
  `orden_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `precio` float DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `subtotal_compra` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Ordenes de Producto';

--
-- Volcado de datos para la tabla `products_orders`
--

INSERT INTO `products_orders` (`id`, `orden_id`, `producto_id`, `precio`, `cantidad`, `subtotal_compra`) VALUES
(1, 1, 6, 80582.9, 1, 80582.9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_category`
--

CREATE TABLE `product_category` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Categoria del Producto';

--
-- Volcado de datos para la tabla `product_category`
--

INSERT INTO `product_category` (`id`, `nombre`) VALUES
(1, 'MTB'),
(2, 'E-BIKE'),
(3, 'BMX'),
(4, 'RUTA'),
(5, 'GRAVEL'),
(6, 'DESCENSO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suppliers`
--

CREATE TABLE `suppliers` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `telefono` varchar(100) DEFAULT NULL,
  `mail` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Proveedores';

--
-- Volcado de datos para la tabla `suppliers`
--

INSERT INTO `suppliers` (`id`, `nombre`, `telefono`, `mail`) VALUES
(1, 'MERIDA', '+54911198765432', 'proveedores@gmail.com'),
(2, 'SPECIALIZED', '+5491109876543', 'proveedor2@hotmail.com'),
(3, 'FUJI', '+351632516', 'fuji@gmail.com'),
(4, 'CUBE', '+542302606869', 'cubeargentina@hotmail.com'),
(5, 'TREK', '+542302607000', 'trekargentina@hotmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `mail` varchar(100) DEFAULT NULL,
  `contraseña` varchar(100) DEFAULT NULL,
  `telefono` varchar(100) DEFAULT NULL,
  `domicilio_entrega` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `genero_id` int(11) NOT NULL,
  `codigo_postal` varchar(11) DEFAULT NULL,
  `fecha_nacimiento` datetime DEFAULT NULL,
  `ciudad` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Usuarios';

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellido`, `mail`, `contraseña`, `telefono`, `domicilio_entrega`, `avatar`, `genero_id`, `codigo_postal`, `fecha_nacimiento`, `ciudad`) VALUES
(2, 'Kerby', 'Tovar', 'kerbytovar@gmail.com', '$2a$10$3cWTqBRxT/3hd7gguFhRm.aVO.H9FXiBXysNhSVTXYpimUWfUYuVu', '+5491123456789', 'Villa Urquiza, CABA', NULL, 1, '1431', '2022-05-01 16:10:01', NULL),
(3, 'Pedro', 'Gomez', 'pedro14@gmail.com', '$2a$10$.jRYk4pvCTTVJlltXOKcX.KGJDLayE5B31Zn1ENfpIJfrlh1V8iOG', '3516311211', 'Belgrano 45', 'avatar-1653740317103-.jpg', 2, '23222', '1975-02-09 00:00:00', 'SUNCHALES'),
(7, 'Peter', 'Jordan', 'peter@gmail.com', '$2a$10$U.wrC/2Bg9Tob2RGrSVxZuVwK8fme75Oek9U6CiOBDP4Y/GUQPFuW', '234131', 'Jalil 2403', 'avatar-1653501659967-.jpg', 2, '24230', '1992-01-03 00:00:00', 'Rafael'),
(8, 'Cacho', 'Flores', 'cacho@gmail.com', '$2a$10$ilNh9fGKBx7jaCnZDOfNLewUTAzj6rtGvswf2Fag0fpEDuQt2NU5C', '232402', 'Panteon 230', 'avatar-1653504759258-.jpg', 2, '5040', '1974-05-04 00:00:00', 'Rio Cuarto'),
(9, 'Pedro', 'Jordan', 'pedro1984@gmail.com', '$2a$10$h5xgA1PfhOaHJywpFY1bNezN1jtHngFJpFfHnBy2uFLsd.ZSEYFRC', '2302602597', 'Sabattini 1034', 'avatar-1653739711868-.jpg', 2, '5000', '1984-09-04 00:00:00', 'Cordoba'),
(10, 'Susana', 'Perez', 'susuna@gmail.com', '$2a$10$m4HyNvR5gSBwFXkaQj56vegd3ZnwgMezhX.KvR3krm.keza11ILk.', '3515023244', 'Isla 2042', 'avatar-1653739973953-.png', 1, '4230', '1989-05-05 00:00:00', 'San Rafael'),
(11, 'Valeria', 'Sanchez', 'valeria@gmail.com', '$2a$10$Fc5CXkDPFxuT3RMO//Q.h.Ck8AmGNuYsOS8Zmi02hQ3T80yEabAzi', '023949234', 'Pincen 1034', 'avatar-1653740465195-.png', 1, '4032', '1993-07-05 00:00:00', 'Santiago del Estero'),
(12, 'Marta', 'Schulz', 'marta@gmail.com', '$2a$10$OBawhKc5gR4sT4qCWvtYKeEM5Sk5bLuwo0CAyG70zX1ED8cfukGly', '91312049', 'Hungria 1039', 'avatar-1653740552378-.jpg', 1, '3948', '1995-11-02 00:00:00', 'San Luis');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `proveedor_id` (`proveedor_id`),
  ADD KEY `categoria_id` (`categoria_id`);

--
-- Indices de la tabla `products_orders`
--
ALTER TABLE `products_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orden_id` (`orden_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indices de la tabla `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genero_id` (`genero_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `products_orders`
--
ALTER TABLE `products_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `product_category`
--
ALTER TABLE `product_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `categoria__id` FOREIGN KEY (`categoria_id`) REFERENCES `product_category` (`id`),
  ADD CONSTRAINT `proveedor_id` FOREIGN KEY (`proveedor_id`) REFERENCES `suppliers` (`id`);

--
-- Filtros para la tabla `products_orders`
--
ALTER TABLE `products_orders`
  ADD CONSTRAINT `orden_id` FOREIGN KEY (`orden_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `producto_id` FOREIGN KEY (`producto_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `genero_id` FOREIGN KEY (`genero_id`) REFERENCES `genres` (`id`);
  
ALTER DATABASE bikextrem CHARACTER SET utf8 COLLATE utf8_general_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
