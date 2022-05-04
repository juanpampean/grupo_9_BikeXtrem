-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2022 at 08:49 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bikextrem`
--

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `nombre_genero` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='GÃ©neros';

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `nombre_genero`) VALUES
(1, 'Femenino'),
(2, 'Masculino'),
(3, 'Otros');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
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
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `fecha_orden`, `usuario_id`, `total_compra`, `direccion_orden`, `status_orden`) VALUES
(1, '2022-05-01 16:47:29', 2, 50000, 'Villa Urquiza, CABA', 'Aprobada');

-- --------------------------------------------------------

--
-- Table structure for table `products`
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
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `SKU`, `nombre`, `precio`, `peso`, `descripcion`, `categoria_id`, `imagen`, `create_date`, `stock`, `proveedor_id`) VALUES
(6, 123455, 'Orran - Cannondale', 80583, 15, 'La mejor bici del mundo', 1, NULL, '2022-03-22 12:36:36', 50, 1);

-- --------------------------------------------------------

--
-- Table structure for table `products_orders`
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
-- Dumping data for table `products_orders`
--

INSERT INTO `products_orders` (`id`, `orden_id`, `producto_id`, `precio`, `cantidad`, `subtotal_compra`) VALUES
(1, 1, 6, 80582.9, 1, 80582.9);

-- --------------------------------------------------------

--
-- Table structure for table `product_category`
--

CREATE TABLE `product_category` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Categoria del Producto';

--
-- Dumping data for table `product_category`
--

INSERT INTO `product_category` (`id`, `nombre`) VALUES
(1, 'Urbana'),
(2, 'Hibrida'),
(3, 'BMX'),
(4, 'Ruta');

-- --------------------------------------------------------

--
-- Table structure for table `suppliers`
--

CREATE TABLE `suppliers` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `telefono` varchar(100) DEFAULT NULL,
  `mail` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Proveedores';

--
-- Dumping data for table `suppliers`
--

INSERT INTO `suppliers` (`id`, `nombre`, `telefono`, `mail`) VALUES
(1, 'Proveedores1', '+54911198765432', 'proveedores@gmail.com'),
(2, 'Proveedor2', '+5491109876543', 'proveedor2@hotmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `mail` varchar(100) DEFAULT NULL,
  `contraseÃ±a` varchar(100) DEFAULT NULL,
  `telefono` varchar(100) DEFAULT NULL,
  `domicilio_entrega` varchar(255) DEFAULT NULL,
  `avatar` longblob DEFAULT NULL,
  `genero_id` int(11) DEFAULT NULL,
  `codigo_postal` varchar(11) DEFAULT NULL,
  `fecha_nacimiento` datetime DEFAULT NULL,
  `ciudad` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Usuarios';

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellido`, `mail`, `contraseÃ±a`, `telefono`, `domicilio_entrega`, `avatar`, `genero_id`, `codigo_postal`, `fecha_nacimiento`, `ciudad`) VALUES
(1, 'Juan', 'Garcia', 'juangarcia@gmail.com', '$10$HObbvMbGTFxwAWhiF2WL1OBG11gLAp9NegBKWPhxbnffz96Bx5t16', NULL, 'General Pico, La Pampa', NULL, 2, NULL, '2022-04-14 11:10:01', NULL),
(2, 'Kerby', 'Tovar', 'kerbytovar@gmail.com', '$2a$10$3cWTqBRxT/3hd7gguFhRm.aVO.H9FXiBXysNhSVTXYpimUWfUYuVu', '+5491123456789', 'Villa Urquiza, CABA', NULL, 1, '1431', '2022-05-01 16:10:01', NULL),
(3, 'Pedro', 'Gomez', 'pedro14@gmail.com', '$2a$10$.jRYk4pvCTTVJlltXOKcX.KGJDLayE5B31Zn1ENfpIJfrlh1V8iOG', '3516311211', 'Belgrano 45', NULL, 2, '23222', '2022-05-28 00:00:00', 'SUNCHALES'),
(4, 'Augusto', 'Garcia', 'juanfernandezborasio@gmail.com', '$2a$10$/Iv.bwgKw9lLgvMRBBjrqOOROGEBAUrqyj9/6NPYLUL1SWawmD7q.', '3516311212', 'Zapiola 96', NULL, 2, '2322', '1991-09-04 00:00:00', 'SUNCHALES'),
(5, 'Carlos', 'Garcia', 'manuel14@gmail.com', '$2a$10$NnErKEPk7kHO7/24Oi00JOeG44eKWBmviXNiS5FIG.Rj3b52mh1JG', '14423042', 'Velez 1342', NULL, 2, '5000', '1932-02-04 00:00:00', 'Cordoba'),
(6, 'Marcos', 'Gutierrez', 'manuel@gmail.com', '$2a$10$F2cxdXfAXNHyOT3bf96.P.5AV5wN2cZtpppL7S0fIlpNy0yu9F4ya', '5555555', 'Ruta 5 Km 145', NULL, 2, '4050', '1988-01-04 00:00:00', 'Buenos Aires');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoria_id` (`categoria_id`),
  ADD KEY `proveedor_id` (`proveedor_id`);

--
-- Indexes for table `products_orders`
--
ALTER TABLE `products_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orden_id` (`orden_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indexes for table `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genero_id` (`genero_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `products_orders`
--
ALTER TABLE `products_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product_category`
--
ALTER TABLE `product_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `categoria_id` FOREIGN KEY (`categoria_id`) REFERENCES `product_category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `proveedor_id` FOREIGN KEY (`proveedor_id`) REFERENCES `suppliers` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `products_orders`
--
ALTER TABLE `products_orders`
  ADD CONSTRAINT `orden_id` FOREIGN KEY (`orden_id`) REFERENCES `orders` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `producto_id` FOREIGN KEY (`producto_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `genero_id` FOREIGN KEY (`genero_id`) REFERENCES `genres` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
