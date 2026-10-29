# Car Dealership Website

## Brief description
A multi-page car dealership website with browsing pages for car models, company info, contact, and user registration/login backed by PHP and MySQL.

## Tech stack
- HTML5
- CSS3
- JavaScript
- PHP
- MySQL

## Project purpose
Provide a classic full-stack (HTML/CSS/JS + PHP/MySQL) dealership site for managing customer access and presenting inventory-style pages.

## Project requirements
- A local web stack with PHP and MySQL (e.g. XAMPP, WAMP, or Laragon)
- Modern browser
- Import/create the MySQL schema used by the PHP scripts (see `scripts-php`)

## How to navigate
- `HomePage/` — landing page, registration/login PHP
- `AboutUs/` — about pages
- `car models/` — vehicle listing pages
- `contact us/` — contact page
- `scripts-php/` — PHP/MySQL helpers and validation JS used during development

## How to run
1. Place this folder under your web root (e.g. `htdocs/car-dealership-website`).
2. Start Apache + MySQL.
3. Create a MySQL database and update connection settings in the PHP files (`mysql.php` / related scripts).
4. Open `http://localhost/car-dealership-website/HomePage/Homepage.html` (path may vary by stack).

> Tip: Start from `HomePage` and follow links to About, Cars, Contact, and registration flows.
