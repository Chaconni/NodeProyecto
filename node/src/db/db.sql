-- Active: 1707480416751@@127.0.0.1@3306@userlogin
CREATE DATABASE IF NOT EXISTS userlogin;

USE userlogin;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nameuser  VARCHAR (255) NOT NULL, 
    password  VARCHAR (255) UNIQUE NOT NULL
);