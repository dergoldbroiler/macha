<ul id="sharelist">
    <li>
        <a href="#" id="copylink"  data-link="<?php the_permalink($post); ?>">Link Kopieren <span class="copied d-none">Kopiert!</span></a>
    </li>
    <li>
        <a href="#" id="telegram" data-text="Reuss Gelenkwellen <?php echo $post->post_title; ?>" data-link="<?php the_permalink($post); ?>">Über Telegram teilen</a>
    </li>
    <li>
        <a href="#" data-text="Reuss Gelenkwellen <?php echo $post->post_title; ?>" id="whatsapp" data-link="<?php the_permalink($post); ?>">Über WhatsAppp teilen</a>
    </li>
</ul>
