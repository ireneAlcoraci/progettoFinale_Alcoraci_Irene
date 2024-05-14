-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: progetto_finale
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tempo`
--

DROP TABLE IF EXISTS `tempo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempo` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `nome_citta` varchar(255) DEFAULT '',
  `temperatura` decimal(10,2) DEFAULT '0.00',
  `max_temp` decimal(10,2) DEFAULT '0.00',
  `min_temp` decimal(10,2) DEFAULT '0.00',
  `umidita` int DEFAULT '0',
  `tempo` varchar(255) DEFAULT '',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempo`
--

LOCK TABLES `tempo` WRITE;
/*!40000 ALTER TABLE `tempo` DISABLE KEYS */;
INSERT INTO `tempo` VALUES (1,'palermo',12.50,23.50,18.60,12,'piove'),(2,NULL,0.00,0.00,0.00,0,NULL),(3,'Province of Palermo',299.43,300.69,291.34,44,'Clouds'),(4,'Catania',295.36,296.03,295.00,74,'Clouds'),(5,'Messina',295.36,298.69,293.90,75,'Clouds'),(6,'Provincia di Genova',290.87,292.39,287.86,52,'Clouds'),(7,'Parma',296.29,297.33,295.60,53,'Clouds'),(8,'Catanzaro',293.01,295.35,293.01,87,'Clouds'),(9,'New York',293.16,295.94,290.24,67,'Clear'),(10,'Chicago',284.62,287.64,282.64,87,'Clouds'),(11,'Province of Trapani',296.20,299.97,296.20,83,'Clear');
/*!40000 ALTER TABLE `tempo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-14 17:33:54
