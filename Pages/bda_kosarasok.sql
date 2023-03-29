-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Már 29. 13:55
-- Kiszolgáló verziója: 10.4.25-MariaDB
-- PHP verzió: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `bda_kosarasok`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `mecsek_eredmenyek`
--

CREATE TABLE `mecsek_eredmenyek` (
  `id` int(3) NOT NULL,
  `datum` date NOT NULL,
  `csapatnev_hazai` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `csapatnev_ellenfel` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `eredmeny_hazai` int(2) NOT NULL,
  `eredmeny_ellenfel` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `mecsek_eredmenyek`
--

INSERT INTO `mecsek_eredmenyek` (`id`, `datum`, `csapatnev_hazai`, `csapatnev_ellenfel`, `eredmeny_hazai`, `eredmeny_ellenfel`) VALUES
(1, '2009-12-23', 'bal', 'jobb', 10, 0),
(2, '2017-02-18', 'test_1', 'test_2', 8, 7);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `mecsek_eredmenyek`
--
ALTER TABLE `mecsek_eredmenyek`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `mecsek_eredmenyek`
--
ALTER TABLE `mecsek_eredmenyek`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
