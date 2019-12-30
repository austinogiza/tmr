<?php
session_start();
require_once("../config/config.php");
//begin validation
//
if (isset($_POST['fullname']) && trim($_POST['fullname'])!= "" )
	{
	$fullname=$_POST['fullname'];
	$_SESSION['fullname']= $fullname;

}

else{

	$_SESSION['error']= "";

}

if (isset($_POST['email']) && trim($_POST['email'])!= "" )
{
$email=$_POST['email'];
$_SESSION['email']= $email;

}
else{

	$_SESSION['error']= "";

}

if (isset($_POST['phone']) && trim($_POST['phone'])!= "" )
{
$phone=$_POST['phone'];
$_SESSION['phone']= $phone;
}
else{

	$_SESSION['error']= "";

}
if (isset($_POST['message']) && trim($_POST['message'])!= "" )
{
$message=$_POST['message'];
$_SESSION['message']= $message;
}
else{

	$_SESSION['error']= "";

}
if (isset($_SESSION['error'])) 
{
	//redirect user back to registration page
	header("location: ../contact.php");
}


else {

// //save user details to database


// $to ="info@themajorresources.com";
// $subject ='Enquiry From' . " " . $fullname;

// $headers = "MIME-Version: 1.0" . "\r\n";

// $headers = "Content-type: text/html; charset=UTF-8" . "\r\n";


// $mailHeaders = "From: " .$email;
// $body = "You have received an email from" . " " . $fullname . " " .  $purpose . " " . $phone ."\r\n". . $message.;

// mail($to, $subject, $mailHeaders, $body) or die("Error!");

// $_SESSION['success']='mailsent';
//    header("location: ../contact.php");



mysqli_query($connection, "insert into contact set fullname='$fullname', email='$email', message='$message', phone='$phone'") or die(mysqli_error($connection));

$_SESSION['success']='mailsent';
   header("location: ../contact.php");
}

?>
