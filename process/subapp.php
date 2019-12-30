<?php
session_start();  

require_once("../config/config.php");
//

$power=$_POST['power'];

if($power!='')
{
	$query=mysqli_query($connection, "SELECT power_rating,sub_appliance, power_id from power WHERE power_id='$power'") or die('There Was An Error');
	if (mysqli_num_rows($query)>0)
	{
		
		 while ($rows = mysqli_fetch_assoc($query)) 
		 {   
             
            $power_id[]= $rows['power_id'];
      $power_rating[]= $rows['power_rating'];

		  }
		}

}


for($a=0;$a<count($power_id);$a++)
{
?>
<?php echo $power_rating[$a] ?>

<?php
}

?>