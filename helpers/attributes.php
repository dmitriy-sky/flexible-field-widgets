<?php

const BOOL_ATTRIBUTES = ['disabled', 'readonly', 'required'];
const STRING_ATTRIBUTES = ['lhl-element'];

// Render attributes for the components
function attributes($args) {
  $attrs = '';

  foreach ($args as $attr => $value) {
    if (strpos($attr, 'data') === 0 || in_array($attr, STRING_ATTRIBUTES)) {
      $attrs .= ' ' . $attr . ' = ' . $value;
    } else if (in_array($attr, BOOL_ATTRIBUTES)) {
      $attrs .= ' ' . $attr;
    }
  }

  return $attrs;
}
