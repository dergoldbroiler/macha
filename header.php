<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/x-icon"  href="<?php bloginfo('stylesheet_directory'); ?>/images/favicon.png" type="images/png"/>
	<?php wp_head(); ?>
  
  <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/fontawesome/css/all.css">

	<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/bootstrap-5.3.0-alpha3-dist/css/bootstrap.min.css">

	
	<link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_directory'); ?>/js/slick/slick.css">
	<link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_directory'); ?>/js/slick/slick-theme.css"/>
	
	
 
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/style.css">

	<script>
		var searchable_content = [];
	</script>
</head>

<body> 
  

<!-- Pagewrap -->
<div id="page-wrap" class="w-100"> 

  <?php get_template_part('template-parts/header/header'); ?>

 
