
<?php
session_start();
require_once("config/config.php"); 

$query=mysqli_query($connection, "select * from appliance")
or die(mysqli_error($connection));

if(mysqli_num_rows($query)>0 )

{
	while($row=mysqli_fetch_assoc($query))

	  {
	  	$appliance_id[]=$row['appliance_id'];
        $appliance_name[]=$row['appliance_name']; 
	}

	}

//subappliance query

?>

<!DOCTYPE html>
<html>
<head>
<meta name="description" content="Solar Panel Company In Abuja">
<!-- Global site tag (gtag.js) - Google Analytics -->

<meta property="og:title" content="The Solar Company">
<meta property="og:description" content="The Major Resources">
<meta property="og:url" content="https://themajorresources.com">
<meta name="twitter:card" content="summary_large_image">


<meta property=“og:image” content=“http://themajorresources.com/images/tmr.jpg” />
<meta property=”og:image:width” content=”180″ />
<meta property=”og:image:height” content=”110″ />
<meta name="keywords" content="solar panels in Nigeria, inverter Abuja, solar panels in Abuja, inverters in Nigeria, inverter price in Nigeria, solar panel price in Nigeria, solar energy in Nigeria, best inverters in Nigeria, solar inverter prices in Nigeria, solar power in Nigeria, solar inverter in Nigeria, cost of solar panels in Nigeria, solar panel prices in lagos, solar energy market in Nigeria, cost of installing solar panels in Nigeria, solar system in Nigeria, cost of solar energy in Nigeria, solar energy nigeria lagos, solar energy price in Nigeria, 1kva inverter price in Nigeria, inverter for sale in Nigeria, solar installation in Nigeria, buy solar panels in Nigeria, inverter in lagos, buy inverter in lagos, buy inverter in Nigeria, inverter prices in lagos, solar panel installation in Nigeria, solar system price in Nigeria, solar panel in lagos, solar kit in Nigeria, solar power system in Nigeria, solar panels for sale in Nigeria, inverter dealers in Nigeria, cheap solar system in Nigeria, inverter for sale in lagos, solar products in Nigeria, cheap solar panels in Nigeria, inverter prices in Abuja, used solar panels for sale in Nigeria, buy solar inverter in Nigeria, solar power installation in Nigeria, used inverter for sale in Nigeria, used inverter for sale in lagos, cost of solar power in Nigeria, solar energy in nigeria price, price of solar panel in Nigeria market,
solar power prices in Nigeria, inverter prices in lagos Nigeria, solar energy installation in Nigeria, solar system in nigeria price, power inverter in Nigeria, power inverter prices in Nigeria, cheap solar power in Nigeria, solar panels for home in Nigeria">
		<!-- Chrome, Firefox OS and Opera -->
    <meta name="theme-color" content="#2ecc71">
<!-- Windows Phone -->
<meta name="msapplication-navbutton-color" content="#2ecc71">
<!-- iOS Safari -->
<meta name="apple-mobile-web-app-status-bar-style" content="#2ecc71">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="fontawesome-free-5.10.0-web/css/all.css" />
        <link rel="stylesheet" href="fontawesome-free-5.10.0-web/css/fontawesome.css" />
        <link rel="stylesheet" href="fontawesome-free-5.10.0-web/webfonts" />
             <link rel="stylesheet" type="text/css" href="font/flaticon.css">
     <link rel="stylesheet" type="text/css" href="font/flaticon.woff">
     <link rel="stylesheet" type="text/css" href="font/flaticon.woff2">
     <link rel="stylesheet" type="text/css" href="font/flaticon.eot">

        <script src="js/jquery-3.3.1.min.js"></script>
         <link rel="shortcut icon" type="image/png" href="images/tm.jpg">

    <title> Home : TMR - The Major Resources</title>
		<!-- <link rel="stylesheet" href="css/powercalculator.css"> -->
<link rel="stylesheet" href="css/practice.css">

</head>
<body>


<div class="box">

<div>	
<select id="appliance_id" class="mainapp <?php
    if( !isset($_SESSION['appliance_id']) && isset($_SESSION['error']) )
echo 'error';
?>"
			name="appliance_id">

				<option <?php if (!isset($_SESSION['appliance_id']))

			{

				echo "selected";
			}

			?>

				value=""> -- SELECT APPLIANCE -- </option>
				<?php
				for($a=0; $a<count($appliance_id); $a++)

				{
					?>
             <option <?php  if (isset($_SESSION['appliance_id']))

             {
             if ($_SESSION['appliance_id']==$appliance_id[$a])
             {

echo "selected";
             }

             }


             ?> value="<?php echo $appliance_id[$a] ?>">

             <?php echo $appliance_name[$a]?>
             </option>

				<?php
			}

				?>
            </select></div>
            

  
					<div>

	<select class="subapp <?php
    if( !isset($_SESSION['cities_id']) && isset($_SESSION['error']) )
echo 'error';
?>" id="subapp"
			name="subapp">


				<option value="1" id="load_below_me"> -- Please Select Power -- </option>

						</select>
					</div>


<div><input type="number" class="total" id="tbNumber" name="tbNumber" value="" >
</div>

</div>




<div class="primary-btn mobile-btn"><button id="button" class="button ">Calculate</button>
</div>


<div>
<input type="text" class="subapp text-center" readonly id="totalpower" name="totalpower" value="" > 
       <!-- <img src="images/light-icon.png" alt="light"> -->
                 </div>
<input type="text" class="subapp power" readonly id="power" name="power" value="" >
</html>
</body>
<script type="text/javascript">
	$(document).ready(()=> {
	$('#appliance_id').change(()=>{
		var subapp = $(appliance_id).val();
		




			$.ajax ({
				url: "process/power.php",
				type: "POST",
				data: {app: subapp},
				dataType: "text",
				success: function(data)
				{

					$('#load_below_me').after(data);
					
				}



			});
		});

		
	$('#appliance_id').change(()=>{
		$('.delete').remove();
	});


	$('#subapp').change(()=>{
		var power = $(subapp).val();
	
			$.ajax ({
				url: "process/subapp.php",
				type: "POST",
				data: {power: power},
				dataType: "text",
				success: function(data)
				{
	 $('#power').val(data);

				}
					
			
			});


			
		});

		
	$('#subapp').change(()=>{

		$('.remove').remove();

		$('#tbNumber').delete();

	});


	$('#button').click(()=>{


		mainApp = $('#mainapp').val();
		subApp = $('.subapp').val();
		 power = $('#power').val();

		pf = 0.8; 

		tbNumber =  $('#tbNumber').val();

powerRating = power / 0.8;
totalPower = tbNumber * powerRating;




if ( (mainApp == "") || (subApp == "")  || (tbNumber == "")){
	alert("Please select Appliance, Power, and enter no of equipment");
}


else{

	$("#totalpower").val("Approx. power need is" + totalPower + "" + " VA").fadeIn(500);

}

});




	});



</script>


<?php
unset($_SESSION['error']);
unset($_SESSION['appliance']);
unset($_SESSION['appliance_id']);
unset($_SESSION['power']);
unset($_SESSION['success']);
?>