-- SETTING DATABASE
CREATE DATABASE testDB;
USE testDB;

-- Create users table
CREATE TABLE users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    username VARCHAR(40) NOT NULL
);

-- Insert some values in table
INSERT INTO users (name,email,username) values
    ('Cersei Lannister', 'testUser1@gmail.com', 'BadBlondie'),
    ('John Snow', 'testUser2@gmail.com', 'Stabbed123'),
    ('Sandor Clegane', 'testUser3@gmail.com', 'theHOUND'),
    ('Bran Stark', 'testUser4@gmail.com', '3eyedRaven');

SELECT * FROM users;