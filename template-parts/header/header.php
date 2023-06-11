<header class="container-fluid p-0 " id="header">
    <?php //if( is_front_page() ): ?>
        <?php get_template_part('template-parts/header/circle'); ?> 
    <?php //endif; ?>

    <div class="container-fluid bg-white position-fixed" id="top-header">
        <div class="row pt-md-3 py-lg-4">

            <div class="col-2  col-lg-1 order-1 order-lg-1 ps-lg-3 ps-xl-5">
               <?php get_template_part('template-parts/header/menuopener'); ?>
            </div>

            <div class="col-5 col-lg-3 order-2 order-lg-2 ps-lg-2 ps-xl-5">
            <a href="/"><img  src="<?php bloginfo('stylesheet_directory'); ?>/images/logo.svg" alt="Log Reuss Gelenkwellen" class="img-fluid" id="top-logo"/></a>
            </div>
            <?php $bg = "bg-blue-mobile"; 
            if(!is_front_page( )){
                $bg = "bg-blue-mobile-pages";
                
            }
            ?>
            <div class="col-12 col-lg-6 order-4 order-lg-3 px-3 ps-lg-1 ps-xl-4 <?php echo $bg; ?>">
                <form id="searchform">
                    <div class="d-flex">
                        <input type="text" class="form-control searchfield" placeholder="" id="searchfield"><button type="button" class="btn-close" aria-label="Close"></button>
                    </div>
                </form>
            </div>
            
            <div class="col-5 col-lg-2 order-3 order-md-3 justify-content-end text-end ps-2" id="share">
               <a href="#" id="share-opener"><img src="<?php bloginfo('stylesheet_directory'); ?>/images/share.svg" alt="Telefonnummer" id="share-icon"/></a>
            </div>

            

            
        </div>

        <div class="row bg-white" id="on-demand-container">
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
                        <?php get_template_part('template-parts/header/imageslider'); ?>        
                    </div>
                    <div class="col d-block d-lg-none">
                        <?php get_template_part('template-parts/header/frontpage-mobile'); ?>    
                        
                    </div>
                </div>
            </div>

        <?php endif; ?> 
    
</header>