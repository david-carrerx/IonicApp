-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 07, 2024 at 04:03 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `therapy`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `appointment_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `hour` varchar(100) NOT NULL,
  `notes` varchar(1000) NOT NULL,
  `therapist` bigint(100) NOT NULL,
  `patient` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`appointment_id`, `date`, `hour`, `notes`, `therapist`, `patient`, `status`) VALUES
(15, '2024-03-23', '8:00 pm', 'Cumpleaños negado por familiares.', 8, 'Ángel Lerma Carrera', 'active'),
(17, '2024-03-28', '6:00 pm', 'Problemas económicos generan depresión.', 8, 'Jesus Manuel Corona', 'activo'),
(18, '2024-03-28', '6:00 pm', 'Problemas económicos generan depresión.', 8, 'Jesus Manuel Corona', 'activo');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `payment_id` int(11) NOT NULL,
  `appointment_id` int(11) NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `progress`
--

CREATE TABLE `progress` (
  `progress_id` int(11) NOT NULL,
  `appointment_id` int(11) NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `phone` bigint(12) DEFAULT NULL,
  `role` varchar(100) NOT NULL,
  `specialty` varchar(100) DEFAULT NULL,
  `license` varchar(100) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `phone`, `role`, `specialty`, `license`, `description`) VALUES
(1, 'Jennifer Lawrence', 'jennifer@gmail.com', '12345678', 6711137152, 'patient', NULL, NULL, NULL),
(2, 'Willem Dafoe', 'willem@gmail.com', '$2y$10$LtjPuUJiiHDym4OJdENPaOFIpe8446VLSoHOlVMCVWunf9BD9X3vO', 6711137152, 'patient', NULL, NULL, NULL),
(3, 'Elmer Meraz', 'elmer@gmail.com', '$2y$10$9EQ0ToSID7.TVyMsonQ/Reky9xLf9sB2Q56kfnQThqGKsOleOMGqW', 6187675521, 'patient', NULL, NULL, NULL),
(4, 'Alonso', 'alonso@hotmail.com', '$2y$10$5PbggMKd3ZxyPj6F1wo2QuhWLLTua5SA6Ze6x/Sgm4yhLaq7gn1lW', 6187678767, 'patient', NULL, NULL, NULL),
(5, 'Javier Manuel', 'javi@gmail.com', '$2y$10$dpztgH1GnxMpqbI7cRz6We.WWyxw35iNJs.kN8nDDXuR6B6uzPiN2', 6187675439, 'patient', NULL, NULL, NULL),
(6, 'Jesus', 'jesus@gmail.com', '$2y$10$X.z9rjQ64czRHJivcAMkdOSiV8tZVPxh4dRYj4wzh5/r/AIiFGnlC', 6711137155, 'patient', NULL, NULL, NULL),
(7, 'Martín', 'martin@gmail.com', '$2y$10$zQZ.RSkOH0ycV0SUVQTiyOSSFvq/OzZMUmqHlP1ljrDfyx272dSgu', 6711145645, 'patient', NULL, NULL, NULL),
(8, 'Paul Logan', 'logan@gmail.com', '$2y$10$LBSzYFQav0JpvlZ5HjV7XOkNd4jOgWFKc.Mu8bXA.XjrsGAgqj2X6', 6187675643, 'therapist', NULL, NULL, NULL),
(9, 'Jazziel Camacho', 'jazziel@gmail.com', '$2y$10$JNuvaeyMw7MmuIf0xgAQheec1qZF2ie9OCfRWfT95hDF5ijPCQDuy', 6187672725, 'patient', NULL, NULL, NULL),
(10, 'Dembele', 'dembele@gmail.com', '$2y$10$T91Z7wjZKIZV3gQstOQJrOfkg6Urk2lvzLeJ87SLAgqR//ujDMqqe', 6711137152, 'patient', NULL, NULL, NULL),
(11, 'Jose', 'jose@gmail.com', '12345678', 671116256, 'patient', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`appointment_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `appointment_id` (`appointment_id`);

--
-- Indexes for table `progress`
--
ALTER TABLE `progress`
  ADD PRIMARY KEY (`progress_id`),
  ADD KEY `appointment_id` (`appointment_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `appointment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `progress`
--
ALTER TABLE `progress`
  MODIFY `progress_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
