-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2023 at 08:25 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vacationsproject3`
--
CREATE DATABASE IF NOT EXISTS `vacationsproject3` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `vacationsproject3`;

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `userId` int(11) NOT NULL,
  `tripId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `followers`
--

INSERT INTO `followers` (`userId`, `tripId`) VALUES
(80, 51),
(80, 43),
(80, 45),
(80, 48),
(80, 49),
(87, 43),
(87, 45),
(87, 46),
(87, 51),
(87, 42),
(87, 50),
(80, 42),
(80, 44),
(80, 46);

-- --------------------------------------------------------

--
-- Table structure for table `trips`
--

CREATE TABLE `trips` (
  `tripId` int(11) NOT NULL,
  `tripLocation` varchar(14) NOT NULL,
  `tripDesc` varchar(200) NOT NULL,
  `tripStartDate` date NOT NULL,
  `tripEndDate` date NOT NULL,
  `tripCost` int(11) NOT NULL,
  `tripPic` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trips`
--

INSERT INTO `trips` (`tripId`, `tripLocation`, `tripDesc`, `tripStartDate`, `tripEndDate`, `tripCost`, `tripPic`) VALUES
(42, 'Paris', 'Explore the enchanting City of Lights, known for its iconic Eiffel Tower, charming cafes, and rich art scene. Immerse yourself in the romantic ambiance of the Seine River and indulge in delicious past', '2023-12-08', '2023-12-11', 5482, 'b3568e50-2f45-4a0a-ae9a-d41911cb8d92.jpg'),
(43, 'Tokyo', 'Embark on an adventure in Tokyo, where tradition meets modernity. Discover futuristic skyscrapers, and the bustling Shibuya Crossing. ', '2023-12-10', '2023-12-17', 5843, '86eaffd9-2efa-4083-87ac-1fcee668aefc.jpg'),
(44, 'New York', 'Experience the excitement of the Big Apple with its iconic skyline, Broadway shows, and diverse neighborhoods. Stroll through Central Park, visit the Statue of Liberty.', '2023-12-13', '2023-12-20', 4875, '41337ca9-fe42-4a14-8a8b-5afce319b605.jpg'),
(45, 'Sydney', 'Delight in the wonders of Sydney, surrounded by stunning beaches and the iconic Sydney Opera House.', '2023-12-19', '2023-12-26', 8475, '44e683e8-0f44-42e1-af37-45c77ef05ba3.jpg'),
(46, 'Rome', 'Immerse yourself in the ancient wonders of Rome, where history comes alive with the Colosseum, Roman Forum, and Pantheon. ', '2023-12-21', '2023-12-12', 8514, 'ccbde765-1b7d-426a-92ce-e7a44eeacdbf.jpg'),
(47, 'Cancun', 'Escape to Cancun\'s tropical paradise with pristine beaches, crystal-clear waters, and vibrant coral reefs. Relax in luxurious resorts.', '2023-12-27', '2024-01-04', 8224, '61f7b9fe-2398-43fc-bf9d-43486ea1ec28.jpg'),
(48, 'Cape Town', 'Embark on a safari adventure in Cape Town, surrounded by stunning landscapes and diverse wildlife. Explore Table Mountain.', '2024-02-08', '2024-02-14', 8562, '0ccac685-c555-42ca-be55-d572885c4bca.jpg'),
(49, 'Barcelona', 'Immerse yourself in the Mediterranean charm of Barcelona, known for its unique architecture, vibrant markets, and lively street performances. ', '2024-01-08', '2024-01-14', 4785, '1baf2b0c-3ba9-4d63-95c6-11b59c00d9f6.jpg'),
(50, 'Bangkok', 'Explore the vibrant culture of Bangkok, where ancient temples coexist with bustling markets and modern skyscrapers. ', '2024-02-14', '2024-02-21', 9975, '5ddbfaa8-4730-4979-b09e-b1207b76697e.jpg'),
(51, 'Vancouver', 'Escape to nature in Vancouver, surrounded by mountains, forests, and the Pacific Ocean. Explore Stanley Park, go skiing in Whistler.', '2023-12-06', '2024-01-10', 2842, 'd7915b6c-547f-46fb-8026-98af6a19e87d.jpg'),
(52, 'Dubai', 'Discover the luxury and wonders of Dubai\'s desert oasis, featuring futuristic architecture, vast shopping malls, and golden sand dunes.', '2024-02-28', '2024-03-05', 5748, 'a89bfadf-08c0-4154-96e7-0230830312b9.jpg'),
(53, 'Rio de Janeiro', 'Immerse yourself in the vibrant energy of Rio de Janeiro, known for its lively Carnival, beautiful beaches, and iconic landmarks.', '2024-03-12', '2024-03-19', 8457, 'df47a438-7b94-4a55-a963-17ed9fe8fe53.jpg'),
(54, 'Amsterdam', 'Escape to Amsterdam, the canal city, known for its picturesque waterways, historic architecture, and vibrant cultural.', '2024-03-27', '2024-04-02', 8541, '9924f24f-3a17-4eb1-9c66-40457693390c.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `userEmail` varchar(50) NOT NULL,
  `userPassword` varchar(1000) NOT NULL,
  `userRole` int(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `firstName`, `lastName`, `userEmail`, `userPassword`, `userRole`) VALUES
(64, 'Reut ', 'Yashar', 'reut@gmail.com', 'd10ddc2d4e825f92694f30e69513ff2249af21d15f28c6c6de7a5d95f16030d96d705ee6e80e17a46715e6d784564bf1933e6d79bb050dccc37c153f1d1373ef', 1),
(80, 'Nomi', 'Yashar', 'nomi@gmail.com', 'd10ddc2d4e825f92694f30e69513ff2249af21d15f28c6c6de7a5d95f16030d96d705ee6e80e17a46715e6d784564bf1933e6d79bb050dccc37c153f1d1373ef', 0),
(86, 'Ploni', 'Almoni', 'ploni@gmail.com', '2296a0b73d5868184ca7dfb324f455f0256a62c775a2e4560ed35537747654160a78a40d54bcd47e3f0564f26ad3fe13d01e3827efa22f135e42ad2596c40f76', 0),
(87, 'plonit ', 'almonit', 'plonit@gmail.com', 'd10ddc2d4e825f92694f30e69513ff2249af21d15f28c6c6de7a5d95f16030d96d705ee6e80e17a46715e6d784564bf1933e6d79bb050dccc37c153f1d1373ef', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD KEY `userId` (`userId`),
  ADD KEY `tripId` (`tripId`);

--
-- Indexes for table `trips`
--
ALTER TABLE `trips`
  ADD PRIMARY KEY (`tripId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `trips`
--
ALTER TABLE `trips`
  MODIFY `tripId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `followers`
--
ALTER TABLE `followers`
  ADD CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`tripId`) REFERENCES `trips` (`tripId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
