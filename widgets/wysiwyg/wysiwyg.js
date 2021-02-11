import IMask from 'imask'

const PHONE_MASK_OPTIONS = {
  mask: '(000) 000-0000',
  lazy: false
}

function init ($views) {
  $views.forEach(($view) => {
    $view.querySelectorAll('input[type=tel]').forEach($input => new IMask($input, PHONE_MASK_OPTIONS))
  })
}

export default {
  view: 'wysiwyg',
  init
}
