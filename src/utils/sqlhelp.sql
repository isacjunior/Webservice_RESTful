-- Create database example
CREATE DATABASE webservice;

-- Create table
CREATE TABLE categories(id INT(11) unsigned not null auto_increment, name VARCHAR(255), primary key(id));

-- Insert some data
INSERT INTO categories (name) VALUES ('Comedia');
INSERT INTO categories (name) VALUES ('Romance');
