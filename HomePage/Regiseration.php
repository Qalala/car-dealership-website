<?php
// Database connection
$host = "localhost"; 
$username = "omar";
$password = "1234";
$database = "projecttt";

$conn = mysqli_connect($host, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Handle form submission
include("php.php");
include("mysql.php")
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $firstName = mysqli_real_escape_string($conn, $_POST["firstName"]);
    $lastName = mysqli_real_escape_string($conn, $_POST["lastName"]);
    $phone = mysqli_real_escape_string($conn, $_POST["phone"]);
    $username = mysqli_real_escape_string($conn, $_POST["username"]);
    $password = mysqli_real_escape_string($conn, $_POST["password"]);

    // Insert data into the 'users' table
    $sql = "INSERT INTO users (first_name, last_name, phone, username, password) VALUES ('$firstName', '$lastName', '$phone', '$username', '$password')";

    if (mysqli_query($conn, $sql)) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

// Close the database connection
mysqli_close($conn);
?>
