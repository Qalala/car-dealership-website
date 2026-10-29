# Car Dealership Website

A multi-page car dealership website with browsing pages for company info, car models, and contact, plus **user registration / login** backed by **PHP and MySQL**.

The stack is:
- **Frontend pages**: HTML5 + CSS3 + JavaScript
- **Server logic**: PHP form handling and MySQL access
- **Local hosting**: classic LAMP/WAMP/XAMPP-style setup

This is a traditional full-stack academic web project: static presentation pages combined with server-side account flows.

## Tech stack
- HTML5
- CSS3
- JavaScript
- PHP
- MySQL

## Architecture (high level)

```
car-dealership-website/
├─ HomePage/
│  ├─ Homepage.html / Homepage.css
│  ├─ NewAccount.html / NewAccount.css
│  ├─ Regiseration.php
│  ├─ mysql.php / php.php
│  └─ validation.js
├─ AboutUs/
│  ├─ About Us.html / About Us.css
│  └─ Script.js + images
├─ car models/
│  ├─ car models.html / car models.css
│  └─ Script.js + images
├─ contact us/
│  └─ contact us.html / contact us.css
└─ scripts-php/
   ├─ mysql.php / php.php
   ├─ validation.js
   └─ notes / helper text files used during development
```

### Page roles
- **HomePage** — landing page and account entry point (register / login related PHP)
- **AboutUs** — dealership story / company presentation
- **car models** — inventory-style browsing pages
- **contact us** — contact information / form presentation
- **scripts-php** — shared PHP/MySQL helpers and validation scripts

### Auth / data flow (typical)
1. Visitor opens `HomePage/Homepage.html`
2. Registration/login forms post to PHP endpoints
3. PHP validates input (client JS + server checks)
4. PHP talks to MySQL using connection settings in `mysql.php`
5. Successful auth can gate customer access / personalized flows depending on how pages are linked

> Connection strings and DB names in the PHP files are local/dev oriented. Update them for your machine before running.

---

## Running the project

### Prerequisites
- Windows/macOS/Linux with a local web stack:
  - **XAMPP**, **WAMP**, **Laragon**, or equivalent
- Apache (or another PHP-capable web server)
- MySQL / MariaDB
- PHP enabled

### Install / place the project
1. Copy this repository into your web root, for example:
   - XAMPP: `C:\xampp\htdocs\car-dealership-website`
2. Start **Apache** and **MySQL** from the control panel.

### Database setup
1. Create a MySQL database (name it to match your PHP config, or change the PHP config to match).
2. Open `HomePage/mysql.php` and `scripts-php/mysql.php` (and related PHP files).
3. Update host / username / password / database name for your local MySQL.
4. Create any required tables used by registration/login (based on the INSERT/SELECT statements in the PHP files).

### Open the site
Browse to:

```text
http://localhost/car-dealership-website/HomePage/Homepage.html
```

(Exact URL depends on your stack and folder name.)

From the homepage, navigate to About, Car Models, Contact, and registration pages via the site links.

---

## How to navigate the repo
- Start reading from `HomePage/` — main entry and auth-related files
- Use `AboutUs/`, `car models/`, `contact us/` for presentation pages
- Use `scripts-php/` when debugging DB connection / validation helpers
- Images for each section live beside the HTML/CSS for that page

---

## Demo walkthrough
1. Open the homepage in the browser.
2. Browse **About Us**, **Car Models**, and **Contact**.
3. Open the registration / new-account page.
4. Submit a test account (after DB is configured).
5. Attempt login with the created credentials.
6. Confirm PHP error logs / MySQL data if something fails — most first-run issues are connection credentials or missing tables.

### Common first-run issues
- Apache/MySQL not started
- Wrong DB credentials in `mysql.php`
- Project not under the web root
- PHP file opened as a local file (`file://`) instead of through `http://localhost`

---

## Project purpose
Demonstrate a classic multi-page dealership website with customer-facing pages and PHP/MySQL registration/login for managing customer access.
