<?php
session_start();  

require_once("../config/config.php");
//

$app=$_POST['app'];

if($app!='')
{
	$query=mysqli_query($connection, "SELECT power_id,sub_appliance from power WHERE appliance_id='$app'") or die('There Was An Error');
	if (mysqli_num_rows($query)>0)
	{
		
		 while ($rows = mysqli_fetch_assoc($query)) 
		 {
            $power_id[]= $rows['power_id'];
		   $sub_appliance[]= $rows['sub_appliance'];
  
		  }
		}

}


for($a=0;$a<count($power_id);$a++)
{
?>

<option class="delete" value="<?php echo $power_id[$a]?>"> <?php echo $sub_appliance[$a] ?> </option>

<?php
}
?>