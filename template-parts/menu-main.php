
    <style>
        .menu {
            width: 100%;
            background-color: #74516a;
            padding: 0;
            margin: 0;
            list-style: none;
            display: flex;
          text-transform: uppercase
        }
        
        .menu li a {
            padding: 10px 20px;
          font-size:1.6em;
            display: block;
            background: rgba(116,81,106,1);
            transition: all .4s;
            color:#fff;
          position: relative;
          z-index:999999999
        }
        
        .menu li a:hover,.menu li.current-menu-item a , .menu li.current-menu-ancestor a{
            text-decoration: none;
            background: #95a7b9;
            transition: all .4s;
            color:#fff;
        }
      
      #navcontainer{
        padding:0
      }
      
      
      @media(max-width:1200px){
        .menu li a {
            padding: 10px 20px;
          font-size:1.2em;
        }
      }
   
    </style>


<div class="container" id="navline" style="padding-left:0">
    
        <div class="row">
            <div class="col-sm-10 offset-sm-2 col-md-10 offset-md-2 col-xl-10 offset-xl-2" id="navcontainer">
                <?php
                $args = array(
                    'menu' => 'mainmenu',
                    'container' => 'false'
                );
                wp_nav_menu($args); 
                ?>
            </div>
        </div>
   
</div>