<?php get_header(); ?>
<?php
  $categories = get_the_terms( $post->ID, 'category' )
?>
<div class="container-fluid p-0 sub-bg" id="main">

  <article class="container-fluid">

   

    <div class="row">
        <div class="col my-4">
         <?php the_content(); ?>
        </div>
    </div>  

    
</article>


  

<?php get_footer(); ?>