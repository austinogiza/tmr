
<?php
session_start();
require_once("config/config.php"); 
?>


<!DOCTYPE html>
<html>
<head>
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

    <title> Contact Us - The Major Resources</title>
		<link rel="stylesheet" href="css/main.css">
		<link rel="stylesheet" href="css/bootstrap.css">
		<link rel="stylesheet" href="css/carousel.css">
		<link rel="stylesheet" href="css/freelancer.css">
		<link rel="stylesheet" href="css/stylish-portfolio.css">
		<link rel="stylesheet" href="css/grayscale.css">
		<link rel="stylesheet" href="css/creative.css">
    <link rel="stylesheet" href="css/contact.css">
    <link rel="stylesheet" href="css/sidenav.css">
    <link rel="stylesheet" href="css/popup.css">
</head>
<body>

<?php require_once('includes/header.php'); ?>


<!-- Masthead -->
  <header class="masthead">
    <div class="container h-100">
      <div class="row h-100 align-items-center justify-content-center text-center">
        <div class="col-lg-10 align-self-end">
          <h1 class="text-uppercase text-white font-weight-bold">We Are Easily Reachable Over Phone For Best-In-Class Service Support</h1>
         
        </div>
        
      </div>
    </div>
  </header>

  <!-- Contact Section -->
  <section class="page-section" id="contact">
    <div class="container">
    
    <div id="alertnav">
<?php 

	if (isset($_SESSION['error'])) {
?>

<div class="errorclass"><p> Please Fill In All Fields</p>
</div>
<?php
}


?>

<?php 

	if (isset($_SESSION['success']) && $_SESSION['success']=='mailsent'){
?>

<div class="success"><p>Thank You, Your Mail has Been Sent!</p>
</div>
<?php

unset($_SESSION['error']);
 unset($_SESSION['fullname']);
 unset($_SESSION['phone']);
 unset($_SESSION['purpose']);
 unset($_SESSION['email']);
 unset($_SESSION['message']);
 unset($_SESSION['success']);

	}
?>

</div>




      <!-- Contact Section Heading -->
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact US</h2>


      <!-- Icon Divider -->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <i class="fas fa-star"></i>
        </div>
        <div class="divider-custom-line"></div>
      </div>

      <!-- Contact Section Form -->
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
          <form name="sentMessage" id="contactForm" action="process/contact.php" method="post">
            <div class="control-group">
              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Name</label>
                <input class="form-control" name="fullname"  id="name" type="text" placeholder="Name" data-validation-required-message="Please enter your name." class="<?php
    if(!isset($_SESSION['fullname']) && isset($_SESSION['error']))
echo 'error';

			?>" value="<?php 

			if(isset($_SESSION['fullname']))
			{
echo $_SESSION['fullname'];
			}
			?>">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Email Address</label>
                <input class="form-control" id="email"  name="email"  type="email" placeholder="Email Address"  data-validation-required-message="Please enter your email address."
                class="<?php
    if( !isset($_SESSION['email']) && isset($_SESSION['error']) )

    {
        echo 'error';

    }

			?>" value="<?php 

			if(isset($_SESSION['email']))
			{
echo $_SESSION['email'];
			}

      ?>">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Phone Number</label>
                <input class="form-control" id="phone"  name="phone"  type="tel" placeholder="Phone Number"  data-validation-required-message="Please enter your phone number.">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Message</label>
                <textarea class="form-control" id="message" name="message"  rows="5" placeholder="Message"  data-validation-required-message="Please enter a message."></textarea>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <br>
            <div id="success"></div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </section>
  <button id="myPop">Check Out Our Promo</button>

<!-- The Modal -->
<div id="myModal" class="modal lazy">

  <!-- Modal content -->
  <div class="modal-content lazy">
    <span class="close"><i class="fas fa-times"></i></span>

  </div>

</div>


  <!-- Map -->
  <section id="contact" class="map">
<?php require_once('includes/map.php');

?>
  </section>


  <!-- Footer -->
  <footer class="footer text-center">
   <?php require_once('includes/footer.php');  ?>
  </footer>

  <!-- Copyright Section -->
  <section class="copyright py-4 text-center text-white">
   <?php require_once('includes/copy.php');
   ?>
  </section>

</body>
</html>

	
<script src="js/bootstrap.min.js"></script>

<!-- <script src="js/main.js">
 
</script> -->


<script src="js/top.js"></script>
<script src="js/popup.js"></script>
<script type="text/javascript" src="jquery.lazy.min.js"></script>

<?php
unset($_SESSION['error']);
unset($_SESSION['fullname']);
unset($_SESSION['phone']);
unset($_SESSION['purpose']);
unset($_SESSION['email']);
unset($_SESSION['message']);
unset($_SESSION['success']);
?>



