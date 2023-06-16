<header class="container-fluid p-0 " id="header">

    <div class="container-fluid position-fixed" id="top-header">
        <div class="row pt-md-3 py-lg-4">

            <div class="col-2">
               <?php get_template_part('template-parts/header/menuopener'); ?>
            </div>

            <div class="col-8 text-center ">
          <h2><a href="<?php echo get_home_url(); ?>" class="text-decoration-none text-dark">Ergotherapie Glück im Grünen</a></h2>
            </div>
            <?php $bg = "bg-blue-mobile"; 
            if(!is_front_page( )){
                $bg = "bg-blue-mobile-pages";
                
            }
            ?>
                 
            <div class="col-2" id="share">
               <a href="#" id="share-opener"><img src="<?php bloginfo('stylesheet_directory'); ?>/images/share.svg" alt="Telefonnummer" id="share-icon"/></a>
            </div>

            

           
        </div>

        <div class="row" id="on-demand-container">
            <div class="col p-0" id="on-demand"> 
                <?php get_template_part('template-parts/header/share'); ?> 
                <?php get_template_part('template-parts/header/menu'); ?> 
                <?php get_template_part('template-parts/header/search'); ?> 
                
                  
            </div>
           
        </div>
        <?php get_template_part('template-parts/header/content-wave'); ?>  
    </div>

</header>