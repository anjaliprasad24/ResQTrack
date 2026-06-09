CREATE DATABASE IF NOT EXISTS resqtrack;
USE resqtrack;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('user', 'rescuer') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE organisations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  lat DECIMAL(10, 8) NOT NULL,
  lng DECIMAL(11, 8) NOT NULL,
  type ENUM('NGO', 'Veterinarian', 'Shelter') DEFAULT 'NGO',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cases (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description TEXT NOT NULL,
  severity ENUM('Low', 'Medium', 'Critical') DEFAULT 'Medium',
  status ENUM('Pending', 'Assigned', 'On the way', 'Reached', 'Rescued') DEFAULT 'Pending',
  lat DECIMAL(10, 8) NOT NULL,
  lng DECIMAL(11, 8) NOT NULL,
  location_label VARCHAR(255),
  photo_url VARCHAR(255),
  reported_by INT,
  assigned_to INT,
  destination VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (reported_by) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (assigned_to) REFERENCES organisations(id) ON DELETE SET NULL
);

INSERT INTO organisations (name, email, password, lat, lng, type) VALUES
('Blue Cross of India', 'bluecross@example.com', '$2a$10$placeholder', 13.012, 80.204, 'NGO'),
('PAWS Chennai', 'paws@example.com', '$2a$10$placeholder', 13.067, 80.243, 'NGO'),
('CARE Animal Hospital', 'care@example.com', '$2a$10$placeholder', 13.051, 80.198, 'Veterinarian');