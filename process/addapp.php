<?php
session_start();

require_once("../config/config.php");

//begin validation

if (isset($_POST['appliance']) && trim($_POST['appliance'])!= "" )
{
$appliance=$_POST['appliance'];
$_SESSION['appliance']= $appliance;

}
else{

	$_SESSION['error']= "";

}

if (isset($_POST['power']) && trim($_POST['power'])!= "" )
{
$power=$_POST['power'];
$_SESSION['power']= $power;

}
else{

	$_SESSION['error']= "";

}


if (isset($_POST['appliance_id']) && trim($_POST['appliance_id'])!= "" )
{
$appliance_id=$_POST['appliance_id'];
$_SESSION['appliance_id']= $appliance_id;

}
else{

	$_SESSION['error']= "";

}


if (isset($_SESSION['error'])) 

{
	//redirect user back to registration page
header("location: ../practice.php");
}

else {
//save user details to database
	

	mysqli_query($connection, 

		"insert into power set appliance_id='$appliance_id', sub_appliance='$appliance', power_rating='$power'"
	) or die(mysqli_error($connection));
	$_SESSION['success']='mailsent';
   header("location: ../practice.php");

}



?>
