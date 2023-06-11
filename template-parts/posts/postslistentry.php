<?php if(isset($args['post'])):
    $post = $args['post'];
    $image = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'catlist')[0];
    
    ?>
    <div class="col-md-3 p-3">
        <img src="<?php echo $image; ?>" alt="<?php echo $args['post']->post_title; ?>" class="img-fluid slick-img"/>
        <h2><?php echo $args['post']->post_title; ?></h2>
    </div>
<?php endif; ?>