import * as accordion from './accordion/accordion'
import * as wysiwyg from './wysiwyg/wysiwyg'
import * as newsCards from './news-cards/news-cards'
import * as blogCards from './blog-cards/blog-cards'

const widgets = [
  accordion.default,
  wysiwyg.default,
  newsCards.default,
  blogCards.default
]

export {
  widgets
}
