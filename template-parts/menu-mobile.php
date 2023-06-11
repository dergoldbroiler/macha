<div class="container" id="mobnavline">
    
        <div class="row">
            <div class="col-sm-12" id="mobnavcontainer">
                <?php
                $args = array(
                    'menu' => 'mobile',
                    'container' => 'false'
                );
                wp_nav_menu($args); 
                ?>
            </div>
        </div>
   
</div>