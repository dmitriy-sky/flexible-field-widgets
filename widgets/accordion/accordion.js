import { $elementChildren } from '../../js/helpers/element'

const EXPAND_CLASS = 'expand'

function init ($views) {
  $views.forEach(($view) => {
    const $items = $elementChildren($view, 'accordion-item')
    $items.forEach(($item) => {
      $item.addEventListener('click', () => {
        if (!$item.classList.contains(EXPAND_CLASS)) {
          $items.forEach(($item) => $item.classList.remove(EXPAND_CLASS))
          $item.classList.add(EXPAND_CLASS)
        } else {
          $item.classList.remove(EXPAND_CLASS)
        }
      })
    })
  })
}

export default {
  view: 'accordion',
  init
}
