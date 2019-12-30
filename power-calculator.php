
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

<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head><title>
    Calculate your Inverter / UPS Power Need </title>


    <meta name="description" content="Solar Panel Company In Abuja">
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-145413850-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-145413850-1');
</script>


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


         <link rel="stylesheet" href="css/main.css">
		<link rel="stylesheet" href="css/bootstrap.css">
		<link rel="stylesheet" href="css/carousel.css">
		<link rel="stylesheet" href="css/freelancer.css">
		<link rel="stylesheet" href="css/stylish-portfolio.css">
		<link rel="stylesheet" href="css/grayscale.css">
		<link rel="stylesheet" href="css/video.css">
		  <link rel="stylesheet" href="css/landing-page.css">
      <link rel="stylesheet" href="css/popup.css">
      <link rel="stylesheet" href="css/sidenav.css">

      <link rel="stylesheet" href="css/powercalculator.css">
      
      <link rel="stylesheet" href="css/power.css">

</head>
<body>




<?php require_once('includes/header.php'); ?>

    <div id="home-banner" class="home-section-banner">
        <div class="container">
            <div class="row">
                <div class="col-10 col-sm-7">
                    <div class="heading-wrap">
                        <h1 class="banner-heading">Calculate Your Power Needs</h1>
                    </div>
                </div>

                <div class="col-2 col-sm-5">
                    <picture class="d-none d-sm-block">
                            <source srcset="images/mainbanner-image.webp" type="image/webp">
                            <source srcset="images/mainbanner-image.png" type="image/jpeg">
                            <img src="images/mainbanner-image.png" alt="Alt Text!">
                        </picture>

                    <picture class="d-block d-sm-none centered">
                            <source srcset="images/power.webp" type="image/webp">
                            <source srcset="images/power.webp" type="image/jpeg">
                            <img src="images/power.png" alt="Alt Text!">
                        </picture>


                </div>

            </div>
        </div>

    </div>
    <!-- Site Banner -->
    <div class="section padB0">
        <div class="container ">
            <div class="row">
                <div class="col-md-12">
                    <p class="  ">Calculate the best UPS Batteries capacity needed to run your home and office electrical appliances?</p>
                    <p>Please Select Your Options</p>


                </div>
            </div>
        </div>

    </div>


<div class="headtitle"> <p id="tab-A" class="nav-link active" data-toggle="tab" >Home Inverter + UPS</p></div>

    <div class="section Enquire-section PowerCalculatorWrapper" id="EnquireNowform">


        <div class="container ">
            <div class="row">
                <div class="col-md-8">
                    <!-- <h2 class="section-main--heading hide">Please Select Your Options</h2>-->


                    <div class="tab-navigation">
                        <ul id="tabs" class="tab-navigation  nav nav-tabs" role="tablist">
                            <li class="nav-item">
                               
                            </li>
                            <li class="nav-item">
                                <!-- <a id="tab-B" href="#pane-B" class="nav-link" data-toggle="tab" role="tab">Corporate UPS </a> -->
                            </li>
                        </ul>


                        <div id="content" class="tab-content" role="tablist">
                            <div id="pane-A" class="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">
                                <div class="card-header" role="tab" id="heading-A">
                                    <div class="form_area grey-gradient_bg-2">
                                        <div class="three_block_format">
                                            <div class="full_block">
                                                <ul class="TableHead">
                                                    <li>Appliance</li>
                                                    <li>Power</li>
                                                    <li>No</li>
                                                </ul>
                                                <div id="AppliancesRowWrapper">
                                                </div>

                                                <div id="BotArea" class="CalculateButton">
                                                    <div class="center">
                                                      
                                                      
                                                      
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>



                        </div>
                    </div>
                </div>

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

				value=""> -- Select Appliance -- </option>
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


<input type="text" class="subapp power" readonly id="power" name="power" value="" >





            <!-- Footer -->

        </div>

        

        <div class="buttoncover"><button id="button" class="button">Calculate</button>
</div>

<div class="col-md-4 d-none d-sm-block">
                </div>
            </div>
        </div>
    </div>

    <div class="result">                    <div id="ContentPlaceHolder1_ResultArea" class="power-calculator-banner">
                        <div id="TtlGreen">
                            Your approximate
                                <br>
                            power need is
                        </div>
                        <div id="ResultText">
                        </div>
                    </div>
                    


</div>


        <!-- Container -->
    <!-- Footer -->
    <footer class="footer text-center">
   <?php require_once('includes/footer.php');  ?>
  </footer>

  <!-- Copyright Section -->
  <section class="copyright py-4 text-center text-white">
   <?php require_once('includes/copy.php');
   ?>
  </section>





        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900" rel="stylesheet">

















</body>
</html>



<script src="js/top.js"></script>

<script src="js/power.js"></script>


<?php
unset($_SESSION['error']);
unset($_SESSION['appliance']);
unset($_SESSION['appliance_id']);
unset($_SESSION['power']);
unset($_SESSION['success']);
?>