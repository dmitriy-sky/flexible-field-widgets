<?php

// get menus by slugs
function get_menus($slugs = []) {
  $locations = get_nav_menu_locations();
  $term_ids = [];
  $menus = [];

  if ($locations) {
    foreach ($slugs as $slug) {
      if (array_key_exists($slug, $locations)) {
        $term_ids[] = $locations[$slug];
      }
    }
  }

  if ($term_ids) {
    $menus = wp_get_nav_menus([
      'term_taxonomy_id' => $term_ids
    ]);
  }

  return $menus ? $menus : [];
}