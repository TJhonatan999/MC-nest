CREATE DATABASE IF NOT EXISTS mcappdb;
USE mcappdb;

-- =====================================================
-- TABLA: usertype (roles o tipos de usuario)
-- =====================================================
CREATE TABLE usertype (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    description VARCHAR(150)
);

-- =====================================================
-- TABLA: users (usuarios del sistema)
-- =====================================================
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    usertype_id INT NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usertype_id) REFERENCES usertype(id)
);

-- =====================================================
-- TABLA: menu_categories (categorías de platillos)
-- =====================================================
CREATE TABLE menu_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    description VARCHAR(150)
);

-- =====================================================
-- TABLA: menu_items (platillos del menú)
-- =====================================================
CREATE TABLE menu_items (
    id SERIAL PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(255),
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES menu_categories(id)
);

-- =====================================================
-- TABLA: menu_today (menú del día)
-- =====================================================
CREATE TABLE menu_today (
    id SERIAL PRIMARY KEY,
    menu_item_id INT NOT NULL,
    date DATE NOT NULL,
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(id),
    UNIQUE (menu_item_id, date)
);
