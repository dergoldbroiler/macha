<?php get_header(); ?>

<div class="container-fluid p-0" id="main">
<div class="row">
        <div class="col-12">
          <?php get_template_part('template-parts/posts/postgrid','',array('category' => 'kardanwelle')) ?>
        </div>
    </div>   
<div class="row">
        <div class="col-12">
          <?php get_template_part('template-parts/posts/postgrid','',array('category' => 'aktuelles', 'title' => 'Aktuelles', 'bg' => 'bg-light-blue')) ?>
        </div>
    </div>   
  
   
    
    <div class="row">
        <div class="col">
          <?php echo do_shortcode('[postslist]'); ?>
        </div>
    </div> 

</div>

  

<?php get_footer(); ?>