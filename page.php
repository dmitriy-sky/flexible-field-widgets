<?php

$context = Timber::context();

if(isset($_GET['email'])) {
  $context['email'] = $_GET['email'];
}

if(isset($_GET['name'])) {
  $context['name'] = $_GET['name'];
}

$context['post'] = new Timber\Post();

Timber::render( array( 'templates/page/page.twig' ), $context );
