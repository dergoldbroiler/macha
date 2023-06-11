<?php
    $arguments = array(
        'posts_per_page' => 10,
        'orderby' => 'date',
        'order' => 'DESC',
        'post_status' => 'publish',
        'post_type' => 'post',
        'page' => 1,
        'tax_query' => array(
            array(
                'taxonomy' => 'category',
                'field' => 'slug',
                'terms' => 'kardanwelle',
            )
        )
      );
    $title = "Produkte und Services";
    $bg = "bg-2";

    if(isset($args['category'])) :
        $arguments['tax_query'][0]['terms'] = $args['category'];
    endif;
    if(isset($args['title'])) :
        $title = $args['title'];
    endif;
    if(isset($args['bg'])) :
        $bg = $args['bg'];
    endif;
    $posts = get_posts($arguments);

    
?>
<div class="w-100 text-center <?php echo $bg; ?>">
          
        </div>
<div class="posts-grid-large  <?php echo $bg; ?>">

    <?php foreach($posts as $post): ?>

    <?php
        $image = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'catlist')[0];
        $readmore_text = get_post_meta( $post->ID, 'readmore-text', true );
    ?>    
        <div class="single-post">
        <img src="<?php echo $image; ?>" alt="<?php echo $post->post_title; ?>" class="img-fluid"/>
        <h2> <a href="<?php echo get_permalink($post->ID); ?>"><?php echo $post->post_title; ?></a></h2>
        <p><?php echo $post->post_excerpt; ?></p>
        <a href="<?php echo get_permalink($post->ID); ?>" class="readmore"><?php echo $readmore_text; ?></a>
        </div>
    <?php endforeach; ?>    
</div>