import { $element, $elementChild } from '../../js/helpers/element'

const ACTIVE_CLASS = 'active'
const VIOLATOR_DISTANCE = 400

function init ([$view]) {
  const $navMenusBlock = $elementChild($view, 'header-nav-menus')
  const $headerBottom = $elementChild($view, 'header-bottom')
  const $menuBtn = $elementChild($view, 'header-mobile-button')
  const $violator = $element('lead-violator')

  $menuBtn.addEventListener('click', () => {
    $navMenusBlock.classList.toggle(ACTIVE_CLASS)
  })

  let prevScrollY = 0

  function scroll () {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop

    if (scrollY > prevScrollY) {
      $view.style.top = `-${$headerBottom.offsetTop}px`

      if ($violator && document.documentElement.scrollTop > VIOLATOR_DISTANCE) {
        $violator.style.top = ($view.offsetHeight - $headerBottom.offsetTop) + 'px'
      } else if ($violator) {
        $violator.style.top = '0px'
      }
    } else {
      $view.style.top = '0'

      if ($violator && document.documentElement.scrollTop > VIOLATOR_DISTANCE) {
        $violator.style.top = $view.offsetHeight + 'px'
      } else if ($violator) {
        $violator.style.top = '0px'
      }
    }
    prevScrollY = scrollY <= 0 ? 0 : scrollY
  }

  window.addEventListener('scroll', scroll)
}

export default {
  view: 'header',
  init
}
