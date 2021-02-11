import { $elementChildren } from '../js/helpers/element'

const ANIMATED_CLASS = 'animated'

function init () {
  window.addEventListener('scroll', onScroll)
  const $widgets = $elementChildren(document, 'animated')

  function onScroll () {
    $widgets.forEach(($widget) => {
      if (!($widget.classList.contains('animated'))) {
        animate($widget)
      }
    })
  }

  function animate ($widget) {
    const top = $widget.offsetTop
    const height = $widget.offsetHeight
    const bottom = top + height
    const isOverBottom = top > (window.pageYOffset + window.innerHeight)
    const isBeforeTop = bottom < window.pageYOffset

    if (!isOverBottom && !isBeforeTop) {
      $widget.classList.add(ANIMATED_CLASS)
    }
  }
  onScroll()
}

export default {
  init
}
