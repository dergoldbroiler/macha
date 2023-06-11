<?php get_header(); ?>
<?php
  $categories = get_the_terms( $post->ID, 'category' )
?>
<div class="container-fluid p-0 bg-light-blue sub-bg" id="main">

  <article class="container-fluid">

    <div class="row">
        <div class="col-12 text-center">
          <h2 class="category-headline"><?php echo $categories[0]->name; ?></h2> 
          <hr class="yellow-line" />
        </div>
    </div>   
     

    <div class="row">
        <div class="col my-4">
         <?php the_content(); ?>
        </div>
    </div>  

    
</article>
<div class="row">
        <div class="col-12">
          <?php get_template_part('template-parts/posts/postgrid','',array('category' => 'aktuelles', 'title' => 'Aktuelles', 'bg' => '')) ?>
        </div>
    </div>    
</div>

  

<?php get_footer(); ?>