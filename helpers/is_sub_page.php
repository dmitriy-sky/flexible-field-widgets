<?php

function is_sub_page($url, $post_url) {
  if (empty($url) || empty($post_url) || !is_string($url) || !is_string($post_url)) {
    return false;
  }

  $relative_url = array_values(array_filter(explode("/", wp_make_link_relative($url)), 'trim'));
  $relative_post_url = array_values(array_filter(explode("/", wp_make_link_relative($post_url)), 'trim'));
  return count($relative_url) > 0 && $relative_url[0] == $relative_post_url[0];
}