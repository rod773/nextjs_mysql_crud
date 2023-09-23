create database if not exists productsdb;

use productsdb;

create table product(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)NOT NULL,
    description varchar(400)NOT NULL,
    price decimal,
    createAt timestamp DEFAULT CURRENT_TIMESTAMP
);


DESCRIBE product;