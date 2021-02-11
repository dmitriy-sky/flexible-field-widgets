<?php

include 'classes.php';
include 'get_menus.php';
include 'get_menu_items.php';
include 'attributes.php';
include 'get_active_site.php';
include 'is_sub_page.php';
include 'get_posts_by_type.php';


add_filter('timber/twig', function ($twig) {
  $twig->addFunction(new Timber\Twig_Function('classes', 'classes'));
  $twig->addFunction(new Timber\Twig_Function('get_menus', 'get_menus'));
  $twig->addFunction(new Timber\Twig_Function('get_menu_items', 'get_menu_items'));
  $twig->addFunction(new Timber\Twig_Function('attributes', 'attributes'));
  $twig->addFunction(new Timber\Twig_Function('get_active_site', 'get_active_site'));
  $twig->addFunction(new Timber\Twig_Function('is_sub_page', 'is_sub_page'));

  return $twig;
});
