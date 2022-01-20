<?php require_once('./news/wp/wp-load.php'); ?>

<!DOCTYPE html>
<html lang="en-US" dir="ltr">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <!--  
    Document Title
    =============================================
-->
<title>Connectcrew</title>
    <!--  
    Favicons
    =============================================
-->
<link rel="apple-touch-icon" sizes="57x57" href="assets/images/favicons/connectcrew_logo.jpg">
<link rel="apple-touch-icon" sizes="60x60" href="assets/images/favicons/connectcrew_logo.jpg">
<link rel="apple-touch-icon" sizes="72x72" href="assets/images/favicons/connectcrew_logo.jpg">
<link rel="apple-touch-icon" sizes="76x76" href="assets/images/favicons/connectcrew_logo.jpg">
<link rel="apple-touch-icon" sizes="114x114" href="assets/images/favicons/connectcrew_logo.jpg">
<link rel="apple-touch-icon" sizes="120x120" href="assets/images/favicons/connectcrew_logo.jpg">
<link rel="apple-touch-icon" sizes="144x144" href="assets/images/favicons/connectcrew_logo.jpg">
<link rel="apple-touch-icon" sizes="152x152" href="assets/images/favicons/connectcrew_logo.jpg">
<link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicons/connectcrew_logo.jpg">
<link rel="icon" type="image/png" sizes="192x192" href="assets/images/favicons/connectcrew_logo.jpg">
<link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicons/connectcrew_logo.jpg">
<link rel="icon" type="image/png" sizes="96x96" href="assets/images/favicons/connectcrew_logo.jpg">
<link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicons/connectcrew_logo.jpg">
<link rel="manifest" href="/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="assets/images/favicons/connectcrew_logo.jpg">
<meta name="theme-color" content="#ffffff">
    <!--  
    Stylesheets
    =============================================
    
-->
<!-- Default stylesheets-->
<link href="assets/lib/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
<!-- Template specific stylesheets-->
<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Volkhov:400i" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
<link href="assets/lib/animate.css/animate.css" rel="stylesheet">
<link href="assets/lib/components-font-awesome/css/font-awesome.min.css" rel="stylesheet">
<link href="assets/lib/et-line-font/et-line-font.css" rel="stylesheet">
<link href="assets/lib/flexslider/flexslider.css" rel="stylesheet">
<link href="assets/lib/owl.carousel/dist/assets/owl.carousel.min.css" rel="stylesheet">
<link href="assets/lib/owl.carousel/dist/assets/owl.theme.default.min.css" rel="stylesheet">
<link href="assets/lib/magnific-popup/dist/magnific-popup.css" rel="stylesheet">
<link href="assets/lib/simple-text-rotator/simpletextrotator.css" rel="stylesheet">
<!-- Main stylesheet and color file-->
<link href="assets/css/style.css" rel="stylesheet">
<link id="color-scheme" href="assets/css/colors/default.css" rel="stylesheet">
</head>
<body data-spy="scroll" data-target=".onpage-navigation" data-offset="60">
	<main>
		<div class="page-loader">
			<div class="loader">Loading...</div>
		</div>
		<nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="index.php">Connectcrew</a>
				</div>
				<div class="collapse navbar-collapse" id="custom-collapse">
					<ul class="nav navbar-nav navbar-right">
						<li><a href="index.php">Home</a></li>

					</ul>
				</div>
			</div>
		</nav>
		<div class="main">
                  <section class="module" id="news">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-sm-offset-2">
                <h2 class="module-title1 font-alt" style="color:#ff0000;">NEWS</h2>
                <h3 class="alt-features-title font-alt text-center margin50">一覧</h3>
                  <?php
                  $posts = get_posts('numberposts=100&category=1');
                  global $post;
                  ?>
                  <?php
                  if($posts): foreach($posts as $post): setup_postdata($post);
                  ?>

                  <dl class="accordion">
                    <dt class="features-title font-alt">
                      <?php the_time( 'Y/m/d' ); ?>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><?php the_title(); ?></span>
                    </dt>
                    <dd class="accordion-contents">
                      <?php echo mb_substr(the_content(), 0, 120); ?>
                    </dd>
                    <hr>
                  </dl>
                  <?php 
                  endforeach; endif; 
                  ?>
              </div>
            </div>
          </div>
        </section>
			
      	<footer class="footer bg-red">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <p class="copyright font-alt">&copy; 2008&nbsp;CONNECTCREW, All Rights Reserved</p>
              </div>
              <div class="col-sm-6">
                <!--<div class="footer-social-links"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-dribbble"></i></a><a href="#"><i class="fa fa-skype"></i></a>
                </div>-->
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div class="scroll-up"><a href="#totop"><i class="fa fa-angle-double-up"></i></a></div>
  </main>
    <!--  
    JavaScripts
    =============================================
-->
<script src="assets/lib/jquery/dist/jquery.js"></script>
<script src="assets/lib/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="assets/lib/wow/dist/wow.js"></script>
<script src="assets/lib/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js"></script>
<script src="assets/lib/isotope/dist/isotope.pkgd.js"></script>
<script src="assets/lib/imagesloaded/imagesloaded.pkgd.js"></script>
<script src="assets/lib/flexslider/jquery.flexslider.js"></script>
<script src="assets/lib/owl.carousel/dist/owl.carousel.min.js"></script>
<script src="assets/lib/smoothscroll.js"></script>
<script src="assets/lib/magnific-popup/dist/jquery.magnific-popup.js"></script>
<script src="assets/lib/simple-text-rotator/jquery.simple-text-rotator.min.js"></script>
<script src="assets/js/plugins.js"></script>
<script src="assets/js/main.js"></script>
<script src="assets/js/accordion.js"></script>
</body>
</html>