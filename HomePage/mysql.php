-- Create a new database
CREATE DATABASE IF NOT EXISTS projecttt;
USE projecttt;

-- Create a table for user registration
CREATE TABLE IF NOT EXISTS registration (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Unique constraint on the email field to ensure uniqueness
ALTER TABLE registration ADD CONSTRAINT unique_email UNIQUE (email);