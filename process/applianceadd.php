<?php
session_start();

require_once("../config/config.php");

//begin validation

if (isset($_POST['appliance_id']) && trim($_POST['appliance_id'])!= "" )
{
$appliance_id=$_POST['appliance_id'];
$_SESSION['appliance_id']= $appliance_id;

}

else{

	$_SESSION['error']= "";

}

if (isset($_POST['sub_appliance']) && trim($_POST['sub_appliance'])!= "" )
{
$sub_appliance=$_POST['sub_appliance'];
$_SESSION['sub_appliance']= $sub_appliance;

}
else{

	$_SESSION['error']= "";

}


if (isset($_POST['power_rating']) && trim($_POST['power_rating'])!= "" )
{
$power_rating=$_POST['power_rating'];
$_SESSION['power_rating']= $power_rating;

}
else{

	$_SESSION['error']= "";

}

if (isset($_SESSION['error'])) 

{
	//redirect user back to registration page

header("location:../practice.php");
}

else {
//save user details to database


	mysqli_query($connection, 

		"insert into power set appliance_id='$appliance_id', sub_appliance='$sub_appliance',  power_rating='$power_rating'")
		 or die(mysqli_error($connection));
	$_SESSION['message']='itemcreationsuccess';
	header("location:../practice.php");

}


?>

