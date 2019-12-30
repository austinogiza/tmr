<?php
$connection = mysqli_connect("localhost", "root", "", "tmr");

if (mysqli_connect_errno($connection)) {
		die ("Database connection Error");
}
?>