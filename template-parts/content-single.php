
<div class="container-fluid" id="content">
    
        <div class="row">
            <div class="col-12">
              
                <?php
                // Start the loop.
                while ( have_posts() ) :
                    the_post();
                    ?>
                    
                    <?php
                endwhile;
                ?>
                </div>
  </div>
</div>