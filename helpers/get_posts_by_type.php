<?php

function get_posts_by_type($query) {
  $posts = new Timber\PostQuery($query);
  $formatted_posts = [];

  foreach ($posts as $post) {
    $categories = [];
    $image = [
      'id' => $post->meta('hero_image'),
      'alt' => null,
      'src' => null
    ];

    if (is_numeric($image['id'])) {
      $image['alt'] = get_post_meta($image['id'], '_wp_attachment_image_alt', true);
      $src = wp_get_attachment_image_src($image['id'], 'medium_large');
      $image['src'] = is_array($src) && isset($src[0]) ? $src[0] : null;
    }

    foreach ($post->terms('category') as $category) {
      $categories[] = [
        'name' => $category->name,
        'slug' => $category->slug
      ];
    }
    
    $formatted_posts[] = [
      'title' => $post->title,
      'link' => $post->link,
      'categories' => $categories,
      'hero_summary' => $post->meta('hero_summary'),
      'hero_label' => $post->meta('hero_label'),
      'hero_image' => $image,
      'post_date' => date('F d, Y', strtotime($post->post_date))
    ];
  }

  return $formatted_posts;
}