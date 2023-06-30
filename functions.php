<?php

require_once('inc/func_rest_api.php');




if ( ! function_exists( 'theme_slug_setup' ) ) :
    /**
     * Sets up theme and registers support for various WordPress features.
     */
    function theme_slug_setup() {
        // Other Theme Setup code...

        // Enable support for Post Thumbnails on posts and pages.
        add_theme_support( 'post-thumbnails' );
        add_theme_support('menus');
    }
endif;
add_action( 'after_setup_theme', 'theme_slug_setup' );


function wpb_modify_jquery() {
    //check if front-end is being viewed
    if (!is_admin()) {
        // Remove default WordPress jQuery
        wp_deregister_script('jquery');
        // Register new jQuery script via Google Library    
        wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', false, '3.6.0');
        // Enqueue the script   
        wp_enqueue_script('jquery');
    }
}
// Execute the action when WordPress is initialized
add_action('init', 'wpb_modify_jquery');


function textCut($text, $anzahlZeichen = 120) {
	$text = nl2br($text);
	$text = str_replace('<br /><br />', '<br />', $text);
	$text = strip_tags($text, '<img><br></br>');
	if (strlen($text) > $anzahlZeichen) {
		//Wenn der Text abgeschnitten werden muss

		//Array $woerter aus $text durch ' ' getrennt
		$woerter = explode(" ", $text);

		$neuertext = "";
		//Zählervariable für Array $woerter
		$i = 0;
		while (strlen($neuertext) < $anzahlZeichen) {
			//Text wird zusammengesetzt
			$neuertext .= $woerter[$i] . " ";
			$i++;
		}
	} else {
		//Wenn der Text nicht abgeschnitten werden muss
		$neuertext = $text . "</em></span>";

	}
	return $neuertext;
}
add_image_size('catlist','680','350',true);


function getPostsList($atts) {

  $posttype = 'post';

  if(isset($atts['posttype'])) {
    $posttype = $atts['posttype'];
  }

  $posts = get_posts(array(
    'posts_per_page' => 20,
    'orderby' => 'date',
    'order' => 'DESC',
    'post_status' => 'publish',
    'post_type' => $posttype,
    'tax_query' => array(
      array(
        'taxonomy' => 'category',
        'field' => 'slug',
        'terms' => 'anwendung',
      )
    )
  ));

  
  $content = '<div class="w-100 text-center bg-3 ">
  <h2 class="category-headline">Anwendungen</h2> 
</div><div class="w-100 slider p-3 bg-3">';

  ob_start();

  foreach($posts as $post):
    $args = array(
      'post' => $post,
      'atts' => $atts,
    );
    
    get_template_part('template-parts/posts/postslistentry','',$args);
  endforeach; 
  
  $content .= ob_get_clean();

  $arrows = "<ul id='arrows' class='w-100 justify-content-end d-flex mb-5'><li class='left'>&nbsp;</li><li class='right' ></li></ul><br/><br/>";

  return $content.'</div>'.$arrows;
  
}

add_shortcode('postslist','getPostsList');

