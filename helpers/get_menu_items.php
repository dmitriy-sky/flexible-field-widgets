<?php

// get items for navigation menu
function get_menu_items($slug, $args = []) {
  $navigation = [];
  $menu_items = wp_get_nav_menu_items($slug, $args);

  if ($menu_items) {
    foreach ($menu_items as $menu_item) {
      $navigation[$menu_item->ID] = $menu_item;
      $navigation[$menu_item->ID]->children = [];
    }
  
    foreach ($navigation as $nav_item) {
      if (array_key_exists($nav_item->menu_item_parent, $navigation)) {
        $navigation[$nav_item->menu_item_parent]->children[] = $nav_item;
        unset($navigation[$nav_item->ID]);
      }
    }
  }
  
  return $navigation;
}