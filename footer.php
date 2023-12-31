<?php
/**
 * The template for displaying the footer
 *
 */
?>




</div>
<!-- / Pagewrap --> 

<footer class="container-fluid w-100 p-0 bg-yellow">

<img src="<?php bloginfo('stylesheet_directory'); ?>/images/Logo-DVE.png" alt="DVE" class="dve-logo"/>
<img src="<?php bloginfo('stylesheet_directory'); ?>/images/bottom-wave-desktop.svg" alt="Welle" class="img-fluid-macha" id="footer-wave"/>
<?php
    wp_nav_menu(array('menu' => 'footer', 'menu_id'=>'footermenu', 'menu_container' => false));
?>
</footer>
<?php wp_footer(); ?>


<script src="<?php bloginfo('stylesheet_directory'); ?>/bootstrap-5.3.0-alpha3-dist/js/bootstrap.min.js"></script>
<script src="<?php bloginfo('stylesheet_directory'); ?>/fontawesome/js/all.js"></script>
<script type="module" src="<?php bloginfo('stylesheet_directory'); ?>/js/toggle.js"></script>
<script type="module"  src="<?php bloginfo('stylesheet_directory'); ?>/js/myjs.js"></script>

<script type="module" src="<?php bloginfo('stylesheet_directory'); ?>/js/sharefn.js"></script>
<script src="<?php bloginfo('stylesheet_directory'); ?>/js/macy.js"></script>
<script src="<?php bloginfo('stylesheet_directory'); ?>/js/slick/slick.js"></script>

<?php if(isset($_GET['info'])): ?>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("field_9uxn5").value ="<?php echo $_GET['info']; ?>";
            document.getElementById("field_j03t6").value = 'Mein Suchbegriff wurde nicht gefunden.';
        });

    </script>
<?php endif; ?>    


</body>
</html>
