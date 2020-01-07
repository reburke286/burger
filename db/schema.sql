### Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name VARCHAR(300) NOT NULL,
	devoured BOOLEAN DEFAULT false NOT NULL,
	PRIMARY KEY (id)
);