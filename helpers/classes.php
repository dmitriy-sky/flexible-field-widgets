<?php

function classes($args) {
  $classes = array_key_exists('classes', $args) ? array_filter($args['classes'], 'strlen') : [];
  return count($classes) > 0 ? ' ' . implode(' ', $args['classes']) : '';
}