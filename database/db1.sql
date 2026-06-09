CREATE DATABASE resqtrack;
CREATE USER 'resqtrack_user'@'localhost' IDENTIFIED BY 'yourpassword';
GRANT ALL PRIVILEGES ON resqtrack.* TO 'resqtrack_user'@'localhost';
FLUSH PRIVILEGES;