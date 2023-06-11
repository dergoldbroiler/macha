<?php
/**
 * The template for displaying the footer
 *
 */
?>


<footer class="container-fluid w-100 bg-1">
<?php
    wp_nav_menu(array('menu' => 'footer', 'menu_id'=>'footermenu', 'menu_container' => false));
?>
</footer>

</div>
<!-- / Pagewrap --> 

<?php wp_footer(); ?>
<!-- ProvenExpert Bewertungssiegel -->
<style type="text/css">body {-ms-overflow-style: scrollbar;} @media(max-width:991px){.ProvenExpert_widget_container {display:none !important;}}</style>
<a class="ProvenExpert_widget_container" href="https://www.provenexpert.com/reuss-gelenkwellen/?utm_source=Widget&utm_medium=Widget&utm_campaign=Widget" title="Kundenbewertungen & Erfahrungen zu REUSS Gelenkwellen. Mehr Infos anzeigen." target="_blank" style="text-decoration:none;z-index:9999;position:fixed;float:left;line-height:0;right:0;top:250px;" rel="noopener noreferrer"><img src="https://images.provenexpert.com/0a/0a/b5d99c176f07e2d5430d30b2bce6/widget_square_180_de_0.png" alt="Erfahrungen & Bewertungen zu REUSS Gelenkwellen" width="180" height="180" style="border:0" /></a>


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
