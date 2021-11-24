-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- 主机： localhost:8889
-- 生成日期： 2021-11-24 12:11:02
-- 服务器版本： 5.7.34
-- PHP 版本： 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `7381_Dataset`
--

-- --------------------------------------------------------

--
-- 表的结构 `BuyerCreditCard`
--

CREATE TABLE `BuyerCreditCard` (
  `HolderID` int(20) NOT NULL,
  `CardNum` int(30) NOT NULL,
  `ExpireDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `BuyerCreditCard`
--

INSERT INTO `BuyerCreditCard` (`HolderID`, `CardNum`, `ExpireDate`) VALUES
(2223, 1233456678, '2024-07-30'),
(2223, 1121665487, '2026-02-12'),
(2224, 1123445689, '2025-07-07'),
(2226, 1123465578, '2025-07-07');

-- --------------------------------------------------------

--
-- 表的结构 `Customer`
--

CREATE TABLE `Customer` (
  `UserID` int(20) NOT NULL,
  `Address` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `Customer`
--

INSERT INTO `Customer` (`UserID`, `Address`) VALUES
(2223, '12 Melborn St, QLD'),
(2224, '90 Sydney  Street, South Brisbane'),
(2226, 'Student One, City');

-- --------------------------------------------------------

--
-- 表的结构 `Delivery`
--

CREATE TABLE `Delivery` (
  `ProductID` int(20) NOT NULL,
  `CustomerID` int(20) NOT NULL,
  `Quantity` int(20) NOT NULL,
  `Time` date NOT NULL,
  `DeliveryType` varchar(20) NOT NULL,
  `PickUpID` int(20) NOT NULL,
  `Type` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `Delivery`
--

INSERT INTO `Delivery` (`ProductID`, `CustomerID`, `Quantity`, `Time`, `DeliveryType`, `PickUpID`, `Type`) VALUES
(222203, 2223, 3, '2021-12-25', 'Postage', 1, 'Quick'),
(222202, 2223, 1, '2021-12-25', 'Postage', 1, 'Quick'),
(222203, 2223, 3, '2021-12-25', 'Postage', 1, 'Quick'),
(222202, 2223, 1, '2021-12-25', 'Postage', 1, 'Quick'),
(222205, 2223, 4, '2021-12-25', 'Postage', 1, 'Quick'),
(222203, 2223, 15, '2021-12-25', 'Postage', 1, 'Quick'),
(222201, 2223, 17, '2021-12-25', 'Postage', 1, 'Quick'),
(222202, 2223, 13, '2021-12-25', 'Postage', 1, 'Quick'),
(222204, 2223, 26, '2021-12-25', 'Postage', 1, 'Quick'),
(222206, 2223, 33, '2021-12-25', 'Postage', 1, 'Quick'),
(222207, 2223, 7, '2021-12-25', 'Postage', 1, 'Quick'),
(222208, 2223, 3, '2021-12-25', 'Postage', 1, 'Quick'),
(222202, 2223, 1, '2021-12-25', 'Postage', 1, 'Quick'),
(222510, 2223, 3, '2021-12-25', 'Postage', 1, 'Quick'),
(222509, 2223, 2, '2021-12-25', 'Postage', 1, 'Quick'),
(222201, 2223, 1, '2021-12-25', 'Postage', 1, 'Quick'),
(222203, 2223, 3, '2021-12-25', 'Postage', 1, 'Quick'),
(222201, 2223, 17, '2021-12-25', 'Postage', 1, 'Quick'),
(222204, 2223, 26, '2021-12-25', 'Postage', 1, 'Quick'),
(222203, 2223, 15, '2021-12-25', 'Postage', 1, 'Quick'),
(222205, 2223, 4, '2021-12-25', 'Postage', 1, 'Quick'),
(222202, 2223, 13, '2021-12-25', 'Postage', 1, 'Quick'),
(222206, 2223, 33, '2021-12-25', 'Postage', 1, 'Quick'),
(222207, 2223, 7, '2021-12-25', 'Postage', 1, 'Quick'),
(222510, 2223, 3, '2021-12-25', 'Postage', 1, 'Quick'),
(222509, 2223, 2, '2021-12-25', 'Postage', 1, 'Quick'),
(222208, 2223, 3, '2021-12-25', 'Postage', 1, 'Quick'),
(222202, 2223, 1, '2021-12-25', 'Postage', 1, 'Quick'),
(222203, 2223, 3, '2021-12-25', 'Postage', 1, 'Quick'),
(222201, 2223, 1, '2021-12-25', 'Postage', 1, 'Quick');

-- --------------------------------------------------------

--
-- 表的结构 `GroupCart`
--

CREATE TABLE `GroupCart` (
  `CustomerID` int(20) NOT NULL,
  `ProductID` int(20) NOT NULL,
  `ProductPrice` float DEFAULT NULL,
  `ProductName` varchar(20) DEFAULT NULL,
  `ProductQuantity` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `GroupCart`
--

INSERT INTO `GroupCart` (`CustomerID`, `ProductID`, `ProductPrice`, `ProductName`, `ProductQuantity`) VALUES
(2223, 222201, 1.8, 'potato', 8),
(2223, 222202, 5.2, 'tomato', 50),
(2223, 222203, 1.7, 'corn', 12),
(2223, 222204, 5, 'cucumber', 14),
(2223, 222205, 5.5, 'onion', 7),
(2223, 222206, 9.5, 'eggplant', 13),
(2223, 222207, 4, 'sweetpotato', 5),
(2223, 222208, 12, 'ginger', 24);

-- --------------------------------------------------------

--
-- 表的结构 `GroupProduct`
--

CREATE TABLE `GroupProduct` (
  `ID` int(20) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Price` float NOT NULL,
  `Quantity` int(11) NOT NULL,
  `ProviderID` int(20) NOT NULL,
  `FarmName` text,
  `Description` text NOT NULL,
  `NumOfPerson` int(10) NOT NULL,
  `TimeLimit` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `GroupProduct`
--

INSERT INTO `GroupProduct` (`ID`, `Name`, `Price`, `Quantity`, `ProviderID`, `FarmName`, `Description`, `NumOfPerson`, `TimeLimit`) VALUES
(222201, 'potato', 1.8, 245, 2222, 'Sunny Farm', 'Fresh potato from Sunny Farm', 28, '2021-11-14'),
(222202, 'tomato', 5.2, 150, 2222, 'Sunny Farm', 'Fresh tomato from Ben\'s Farm', 12, '2021-11-24'),
(222203, 'corn', 1.7, 150, 2222, 'Sunny Farm', 'Fresh corn from Ben\'s Farm', 32, '2021-12-01'),
(222204, 'cucumber', 5, 135, 2222, 'Sunny Farm', 'Fresh cucumber from Ben\'s Farm', 10, '2021-12-20'),
(222205, 'onion', 5.5, 80, 2222, 'Sunny Farm', 'Fresh onion from Ben\'s Farm', 20, '2021-11-10'),
(222206, 'eggplant', 9.5, 20, 2222, 'Sunny Farm', 'Fresh eggplant from Ben\'s Farm', 12, '2021-11-30'),
(222207, 'sweetpotato', 4, 60, 2222, 'Sunny Farm', 'Fresh sweetpotato from Ben\'s Farm', 9, '2021-11-01'),
(222208, 'ginger', 12, 50, 2222, 'Sunny Farm', 'Fresh ginger from Ben\'s Farm', 20, '2021-11-11'),
(222210, 'fruit pack', 20, 10, 2222, 'Sunny Farm', 'Several fruit in a pack: peach x2, cherry x5, Mongo x4, apple x6', 15, '2022-01-01'),
(222509, 'corn', 1.5, 90, 2225, 'Fruitful Farm', 'fresh fruit from fruitful farm', 19, '2022-01-01');

--
-- 触发器 `GroupProduct`
--
DELIMITER $$
CREATE TRIGGER `GroProduct_ID_AUTO` BEFORE INSERT ON `GroupProduct` FOR EACH ROW BEGIN
DECLARE v_provider_id integer;
DECLARE v_num_products integer;
SELECT COUNT(*) INTO v_num_products FROM GroupProduct;
SET v_provider_id = NEW.ProviderID * 100;
SET NEW.ID = v_provider_id + v_num_products + 1;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- 表的结构 `PickUpPoint`
--

CREATE TABLE `PickUpPoint` (
  `ID` int(20) NOT NULL,
  `Address` text NOT NULL,
  `AvailableTime` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `PickUpPoint`
--

INSERT INTO `PickUpPoint` (`ID`, `Address`, `AvailableTime`) VALUES
(1, 'null', 'null'),
(2, 'South Brisbane', '10:00-17:00'),
(3, 'Hamilton', '07:00-15:00'),
(4, 'Garden City', '09:00-18:00'),
(5, 'Brisbane City', '08:00-17:00');

-- --------------------------------------------------------

--
-- 表的结构 `Provider`
--

CREATE TABLE `Provider` (
  `UserID` int(20) NOT NULL,
  `EmergencyContact` int(20) NOT NULL,
  `Licence` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `Provider`
--

INSERT INTO `Provider` (`UserID`, `EmergencyContact`, `Licence`) VALUES
(2222, 405096369, 'http:www.123.com'),
(2225, 407813579, 'http://www.123.com');

-- --------------------------------------------------------

--
-- 表的结构 `ProviderCreditCard`
--

CREATE TABLE `ProviderCreditCard` (
  `HolderID` int(20) NOT NULL,
  `CardNum` int(30) NOT NULL,
  `ExpireDate` date NOT NULL,
  `BankName` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `ProviderCreditCard`
--

INSERT INTO `ProviderCreditCard` (`HolderID`, `CardNum`, `ExpireDate`, `BankName`) VALUES
(2222, 1145447832, '2032-09-18', 'Commonwealth Bank'),
(2222, 1163459678, '2028-11-14', 'ANZ Bank'),
(2225, 1358916403, '2023-09-15', 'Commonwealth Bank');

-- --------------------------------------------------------

--
-- 表的结构 `QuickCart`
--

CREATE TABLE `QuickCart` (
  `CustomerID` int(20) NOT NULL,
  `ProductID` int(20) NOT NULL,
  `ProductPrice` float DEFAULT NULL,
  `ProductName` varchar(20) DEFAULT NULL,
  `ProductQuantity` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `QuickCart`
--

INSERT INTO `QuickCart` (`CustomerID`, `ProductID`, `ProductPrice`, `ProductName`, `ProductQuantity`) VALUES
(2223, 222201, 2.4, 'potato', 17),
(2223, 222202, 7.5, 'tomato', 15),
(2223, 222203, 1.5, 'corn', 15),
(2223, 222204, 8, 'cucumber', 26),
(2223, 222205, 6.2, 'onion', 4),
(2223, 222206, 10.5, 'eggplant', 33),
(2223, 222207, 4.5, 'sweetpotato', 7),
(2223, 222208, 19.5, 'ginger', 3),
(2224, 222201, 2.4, 'potato', 2),
(2224, 222202, 7.5, 'tomato', 2),
(2223, 222510, 6.5, 'pumpkin', 3),
(2223, 222509, 21.9, 'ginger', 2),
(2223, 222202, 7.5, 'tomato', 15),
(2223, 222203, 1.5, 'corn', 3),
(2223, 222201, 2.4, 'potato', 1);

-- --------------------------------------------------------

--
-- 表的结构 `QuickProduct`
--

CREATE TABLE `QuickProduct` (
  `ID` int(20) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Price` float NOT NULL,
  `Quantity` int(11) NOT NULL,
  `ProviderID` int(20) NOT NULL,
  `Description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `QuickProduct`
--

INSERT INTO `QuickProduct` (`ID`, `Name`, `Price`, `Quantity`, `ProviderID`, `Description`) VALUES
(222201, 'potato', 2.4, 520, 2222, 'It is potato'),
(222202, 'tomato', 7.5, 65, 2222, 'fresh and fruitful tomato'),
(222203, 'corn', 1.5, 170, 2222, 'It is corn'),
(222204, 'cucumber', 8, 80, 2222, 'It is cucumber'),
(222205, 'onion', 6.2, 90, 2222, 'It is onion'),
(222206, 'eggplant', 10.5, 17, 2222, 'It is eggplant'),
(222207, 'sweetpotato', 4.5, 76, 2222, 'It is sweetpotato'),
(222208, 'ginger', 15.9, 18, 2222, 'It is ginger.'),
(222509, 'ginger', 21.9, 90, 2225, 'fresh ginger from fruitful farm'),
(222510, 'pumpkin', 6.5, 75, 2225, 'Fresh pumpkin from Francy Farm');

--
-- 触发器 `QuickProduct`
--
DELIMITER $$
CREATE TRIGGER `QuickProduct_ID_AUTO` BEFORE INSERT ON `QuickProduct` FOR EACH ROW BEGIN
DECLARE v_provider_id integer;
DECLARE v_num_products integer;
SELECT COUNT(*) INTO v_num_products FROM QuickProduct;
SET v_provider_id = NEW.ProviderID * 100;
SET NEW.ID = v_provider_id + v_num_products + 1;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- 表的结构 `Shop`
--

CREATE TABLE `Shop` (
  `ID` int(20) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Address` text NOT NULL,
  `SelfPickUp` tinyint(1) NOT NULL,
  `Delivery` tinyint(1) NOT NULL,
  `FarmName` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `Shop`
--

INSERT INTO `Shop` (`ID`, `Name`, `Address`, `SelfPickUp`, `Delivery`, `FarmName`) VALUES
(2222, 'Sunny Store', '10 Winn Rd, QLD', 1, 1, 'Sunny Farm'),
(2225, 'Francy Store', '15 Slobodian Rd, QLD', 1, 1, 'Fruitful Farm');

-- --------------------------------------------------------

--
-- 表的结构 `User`
--

CREATE TABLE `User` (
  `UserID` int(20) NOT NULL,
  `Phone` int(10) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `UserName` varchar(20) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Dob` date DEFAULT NULL,
  `IconPath` text,
  `Type` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `User`
--

INSERT INTO `User` (`UserID`, `Phone`, `Email`, `UserName`, `Password`, `Dob`, `IconPath`, `Type`) VALUES
(2222, 406012345, 'rongzhao@email.com', 'Rong Zhao', '654321', '1997-04-14', NULL, 'Provider'),
(2223, 406098765, 'Zack2021@email.com', 'Zack Chen', 'abcd1234', '1994-06-27', NULL, 'Customer'),
(2224, 402012345, 'chris2001@email.com', 'Chris Yu', '123789', '2001-08-22', NULL, 'Customer'),
(2225, 402378943, 'france@email.com', 'Francisco', 'qwe987', '1997-04-14', NULL, 'Provider'),
(2226, 409087654, 'Arron1997@email.com', 'Arron Yan', '123321', '1997-09-29', NULL, 'Customer');

--
-- 触发器 `User`
--
DELIMITER $$
CREATE TRIGGER `USER_ID_INCREASE` BEFORE INSERT ON `User` FOR EACH ROW BEGIN
DECLARE v_max_ID integer;
SELECT MAX(UserID) INTO v_max_ID FROM User;
SET NEW.UserID = v_max_ID + 1;
END
$$
DELIMITER ;

--
-- 转储表的索引
--

--
-- 表的索引 `BuyerCreditCard`
--
ALTER TABLE `BuyerCreditCard`
  ADD KEY `HolderID` (`HolderID`);

--
-- 表的索引 `Customer`
--
ALTER TABLE `Customer`
  ADD PRIMARY KEY (`UserID`);

--
-- 表的索引 `Delivery`
--
ALTER TABLE `Delivery`
  ADD KEY `PickUpID` (`PickUpID`),
  ADD KEY `CustomerID` (`CustomerID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- 表的索引 `GroupCart`
--
ALTER TABLE `GroupCart`
  ADD KEY `groupcart_ibfk_1` (`CustomerID`),
  ADD KEY `groupcart_ibfk_2` (`ProductID`);

--
-- 表的索引 `GroupProduct`
--
ALTER TABLE `GroupProduct`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ProviderID` (`ProviderID`);

--
-- 表的索引 `PickUpPoint`
--
ALTER TABLE `PickUpPoint`
  ADD PRIMARY KEY (`ID`);

--
-- 表的索引 `Provider`
--
ALTER TABLE `Provider`
  ADD PRIMARY KEY (`UserID`);

--
-- 表的索引 `ProviderCreditCard`
--
ALTER TABLE `ProviderCreditCard`
  ADD KEY `HolderID` (`HolderID`);

--
-- 表的索引 `QuickCart`
--
ALTER TABLE `QuickCart`
  ADD KEY `CustomerID` (`CustomerID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- 表的索引 `QuickProduct`
--
ALTER TABLE `QuickProduct`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ProviderID` (`ProviderID`);

--
-- 表的索引 `Shop`
--
ALTER TABLE `Shop`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ShopNameIndex` (`Name`);

--
-- 表的索引 `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `Phone` (`Phone`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `UserName` (`UserName`);

--
-- 限制导出的表
--

--
-- 限制表 `BuyerCreditCard`
--
ALTER TABLE `BuyerCreditCard`
  ADD CONSTRAINT `buyercreditcard_ibfk_1` FOREIGN KEY (`HolderID`) REFERENCES `Customer` (`UserID`);

--
-- 限制表 `Customer`
--
ALTER TABLE `Customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `User` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 限制表 `GroupCart`
--
ALTER TABLE `GroupCart`
  ADD CONSTRAINT `groupcart_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `Customer` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `groupcart_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `GroupProduct` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 限制表 `GroupProduct`
--
ALTER TABLE `GroupProduct`
  ADD CONSTRAINT `groupproduct_ibfk_1` FOREIGN KEY (`ProviderID`) REFERENCES `Provider` (`UserID`);

--
-- 限制表 `Provider`
--
ALTER TABLE `Provider`
  ADD CONSTRAINT `provider_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `User` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 限制表 `ProviderCreditCard`
--
ALTER TABLE `ProviderCreditCard`
  ADD CONSTRAINT `providercreditcard_ibfk_1` FOREIGN KEY (`HolderID`) REFERENCES `Provider` (`UserID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
