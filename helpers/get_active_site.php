<?php

define('SITE_PO', 'po');
define('SITE_PO_SLUG', 'policy-owners');
define('SITE_FP', 'fp');
define('SITE_FP_SLUG', 'financial-professionals');

function get_active_site($site, $post_name, $post_type) {
  if ($post_name == SITE_PO_SLUG) {
    $_SESSION['post_site'] = SITE_PO;
  } else if ($post_name == SITE_FP_SLUG) {
    $_SESSION['post_site'] = SITE_FP;
  }

  $sites = is_array($site) ? $site : (empty($site) ? [] : [$site]);

  if (count($sites) == 1 && $post_type == 'page') {
    return $sites[0];
  }

  if (array_key_exists('post_site', $_SESSION)) {
    return $_SESSION['post_site'];
  }

  return SITE_PO;
}
