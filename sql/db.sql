-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : ven. 8 avr. 2021 à 10:14
-- Version du serveur : 10.6.5-MariaDB-1:10.6.5+maria~focal
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `db`
--

CREATE DATABASE IF NOT EXISTS db;
USE db;
-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(400) NOT NULL,
  `password` varchar(400) NOT NULL,
  `token` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `user` (`id`, `username`, `password`, `token`) VALUES
(1, 'admin', 'password', '9HrAiHTTjIELY65qfWNlMNXFBwDJsUUJxwSD6Jh5qVJlNb7xys'),
(2, 'mama', 'mama', 'XPHmnXllnXIq4Q4FLFUg3MwuhhcL8WWdxYOrCmKQlZp4opeZyJ');

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `token` varchar(400) NOT NULL,
  `title` varchar(1000) NOT NULL,
  `content` varchar(10000) NOT NULL,
  `currentDate` datetime NOT NULL DEFAULT current_timestamp()
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `posts`
--

INSERT INTO `posts` (`id`, `token`, `title`, `content`, `currentDate`) VALUES
(1, '9HrAiHTTjIELY65qfWNlMNXFBwDJsUUJxwSD6Jh5qVJlNb7xys', 'Bonjour c&#39;est le test', 'c&#39;est le test ouais !', '2022-04-08 09:10:02'),
(2, '9HrAiHTTjIELY65qfWNlMNXFBwDJsUUJxwSD6Jh5qVJlNb7xys', 'Game Awards : triomphe de « It Takes Two » et « Deathloop », nouveau jeu', 'Cette soirée animée par le Canadien Geoff Keighley, ex-journaliste devenu Monsieur Loyal de l’industrie du jeu vidéo, a aussi honoré un studio français puisque Arkane Lyon s’est imposé dans deux catégories phares avec Deathloop : le prix de la meilleure réalisation est revenu au réalisateur du jeu, le Français Dinga Bakaba, accompagné de l’Américaine Dana Nightingale, tandis que la direction artistique de Sébastien Mitton et Michel Trémsdfsdouiller a été distinguée pour l’univers foisonnant de ce jeu de tir qui se déroule dans des années 1960 dystopiques.', '2022-04-08 10:23:14'),
(3, 'XPHmnXllnXIq4Q4FLFUg3MwuhhcL8WWdxYOrCmKQlZp4opeZyJ', 'Le post de test', 'dqfdsfsdwf', '2022-04-08 10:03:47');

-- --------------------------------------------------------

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `token` (`token`),
  ADD KEY `title` (`title`),
  ADD KEY `content` (`content`),
  ADD KEY `currentDate` (`currentDate`);

--
-- Index pour la table `users`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`),
  ADD KEY `password` (`password`),
  ADD KEY `token` (`token`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
