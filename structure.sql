-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-05-2022 a las 17:45:44
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

CREATE DATABASE bikextrem;
USE bikextrem;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `nombre_genero` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Géneros';

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
  `imagen` longblob DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `proveedor_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Productos';

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `SKU`, `nombre`, `precio`, `peso`, `descripcion`, `categoria_id`, `imagen`, `create_date`, `stock`, `proveedor_id`) VALUES
(6, 123455, 'Orran - Cannondale', 80583, 15, 'La mejor bici del mundo', 1, NULL, '2022-03-22 12:36:36', 50, 1);

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
(1, 'Urbana'),
(2, 'Hibrida'),
(3, 'BMX'),
(4, 'Ruta');

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
(1, 'Proveedores1', '+54911198765432', 'proveedores@gmail.com'),
(2, 'Proveedor2', '+5491109876543', 'proveedor2@hotmail.com');

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
  `avatar` longblob DEFAULT NULL,
  `genero_id` int(11) NOT NULL,
  `codigo_postal` varchar(11) DEFAULT NULL,
  `fecha_nacimiento` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Usuarios';

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellido`, `mail`, `contraseña`, `telefono`, `domicilio_entrega`, `avatar`, `genero_id`, `codigo_postal`, `fecha_nacimiento`) VALUES
(1, 'Juan', 'Garcia', 'juangarcia@gmail.com', '$10$HObbvMbGTFxwAWhiF2WL1OBG11gLAp9NegBKWPhxbnffz96Bx5t16', NULL, 'General Pico, La Pampa', NULL, 2, NULL, '2022-04-14 11:10:01'),
(2, 'Kerby', 'Tovar', 'kerbytovar@gmail.com', '$2a$10$3cWTqBRxT/3hd7gguFhRm.aVO.H9FXiBXysNhSVTXYpimUWfUYuVu', '+5491123456789', 'Villa Urquiza, CABA', NULL, 1, '1431', '2022-05-01 16:10:01');

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
  ADD KEY `categoria_id` (`categoria_id`),
  ADD KEY `proveedor_id` (`proveedor_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `products_orders`
--
ALTER TABLE `products_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `product_category`
--
ALTER TABLE `product_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  ADD CONSTRAINT `categoria_id` FOREIGN KEY (`categoria_id`) REFERENCES `product_category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `proveedor_id` FOREIGN KEY (`proveedor_id`) REFERENCES `suppliers` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `products_orders`
--
ALTER TABLE `products_orders`
  ADD CONSTRAINT `orden_id` FOREIGN KEY (`orden_id`) REFERENCES `orders` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `producto_id` FOREIGN KEY (`producto_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `genero_id` FOREIGN KEY (`genero_id`) REFERENCES `genres` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;