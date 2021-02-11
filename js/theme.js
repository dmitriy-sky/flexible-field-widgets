import 'core-js'
import 'regenerator-runtime/runtime.js'
import { $elements } from './helpers/element'
import { templates } from '../templates/templates'
import { widgets } from '../widgets/widgets'
import * as animations from './animations'
import { shortcodes } from '../shortcodes/shortcodes'

const theme = [
  ...templates,
  ...widgets,
  animations.default,
  ...shortcodes
]

window.addEventListener('load', () => {
  theme.forEach((module) => {
    const { view, init } = module

    if (!view) {
      return init()
    }

    const $views = $elements(view)

    if ($views.length > 0) {
      init($views)
    }
  })
})
