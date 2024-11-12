CREATE DATABASE job_search_db;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  address TEXT NOT NULL,
  city VARCHAR(255) NOT NULL,
  province VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  school VARCHAR(255) NOT NULL,
  program VARCHAR(255) NOT NULL,
  education_level VARCHAR(255) NOT NULL,
  graduation_date DATE NOT NULL
);
