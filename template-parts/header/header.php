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
            <div class="col bg-white p-0" id="on-demand"> 
                <?php get_template_part('template-parts/header/share'); ?> 
                <?php get_template_part('template-parts/header/menu'); ?> 
                <?php get_template_part('template-parts/header/search'); ?> 
            </div>
           
        </div>
    </div>
        
        <?php if( is_front_page() ): ?>

            <div class="container-fluid p-0" id="image-header">
                <div class="row">
                    <div class="col d-none d-lg-flex">
                        <?php // get_template_part('template-parts/header/imageslider'); ?>        
                    </div>
                    <div class="col d-block d-lg-none">
                        <?php get_template_part('template-parts/header/frontpage-mobile'); ?>    
                        
                    </div>
                </div>
            </div>

        <?php endif; ?> 
    
</header>