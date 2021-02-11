import { $elementChild } from '../../js/helpers/element'

const SUMMARY_PLACEHOLDER = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
const IMAGE_PLACEHOLDER = '/wp-content/themes/lighthouse/assets/img/news_horizontal_placeholder.png'
const LABEL_PLACEHOLDER = 'LABEL'
const DATE_IMAGE_ALT = 'Clock'
const DATE_IMAGE = '/wp-content/themes/lighthouse/assets/img/clock.png'
const LOADING_CLASS = 'loading'

/* global FormData, XMLHttpRequest */
function init ($views) {
  function printPosts ($list, posts) {
    posts.forEach((post) => {
      const $article = document.createElement('article')
      $article.setAttribute('class', 'lhl-blog-cards-item lhl-card animated')

      const $link = document.createElement('a')
      $link.setAttribute('class', 'lhl-blog-cards-item-link')
      $link.setAttribute('href', post.link)
      $article.appendChild($link)

      const $img = document.createElement('img')
      $img.setAttribute('class', 'lhl-image lhl-blog-cards-item-image')
      $img.setAttribute('src', post.hero_image.src ? post.hero_image.src : IMAGE_PLACEHOLDER)
      $img.setAttribute('alt', post.hero_image.alt)
      $link.appendChild($img)

      const $info = document.createElement('div')
      $info.setAttribute('class', 'lhl-blog-cards-item-info')
      $article.appendChild($info)

      const $inner = document.createElement('div')
      $inner.setAttribute('class', 'lhl-blog-cards-item-inner')
      $info.appendChild($inner)

      const $label = document.createElement('p')
      $label.setAttribute('class', 'lhl-blog-cards-item-lead-in')

      if (post.categories.length <= 0) {
        $label.innerText = post.hero_label ? post.hero_label : LABEL_PLACEHOLDER
      } else {
        post.categories.forEach((category, index) => {
          const $anchor = document.createElement('a')
          $anchor.setAttribute('class', 'lhl-anchor')
          $anchor.setAttribute('href', '/blog?term=' + category.slug)
          $anchor.innerText = category.name
          $label.appendChild($anchor)

          if (index !== post.categories.length - 1) {
            const $separator = document.createElement('span')
            $separator.innerText = ', '
            $label.appendChild($separator)
          }
        })
      }

      $inner.appendChild($label)

      const $title = document.createElement('h3')
      $title.setAttribute('class', 'lhl-blog-cards-item-title')
      $title.innerHTML = '<a href="' + post.link + '">' + post.title + '</a>'
      $inner.appendChild($title)

      const $summary = document.createElement('summary')
      $summary.setAttribute('class', 'lhl-blog-cards-item-summary')
      $summary.innerText = post.hero_summary ? post.hero_summary : SUMMARY_PLACEHOLDER
      $inner.appendChild($summary)

      const $date = document.createElement('div')
      $date.setAttribute('class', 'lhl-blog-cards-item-date')
      $inner.appendChild($date)

      const $icon = document.createElement('img')
      $icon.setAttribute('class', 'lhl-image lhl-blog-cards-item-icon')
      $icon.setAttribute('alt', DATE_IMAGE_ALT)
      $icon.setAttribute('src', DATE_IMAGE)
      $date.appendChild($icon)

      const $publishDate = document.createElement('span')
      $publishDate.innerText = post.post_date
      $date.appendChild($publishDate)

      $list.appendChild($article)
    })
  }

  $views.forEach($view => {
    const $list = $elementChild($view, 'blog-list')
    const $loadMore = $elementChild($view, 'blog-more')
    let page = 1

    if ($loadMore) {
      $loadMore.addEventListener('click', () => {
        const form = new FormData()
        form.append('action', 'get_blog')
        form.append('page', ++page)
        form.append('exclude', $loadMore.dataset.exclude)
        form.append('term', $loadMore.dataset.term)
        $loadMore.disabled = true
        $loadMore.classList.add(LOADING_CLASS)

        const xhr = new XMLHttpRequest()
        xhr.open('POST', '/wp-admin/admin-ajax.php', true)

        xhr.addEventListener('load', function () {
          let posts = []

          if (this.status === 200) {
            try {
              posts = JSON.parse(this.responseText)
            } catch (e) {
              console.warn(e)
              posts = []
            }
          }

          if (posts.length > 0) {
            printPosts($list, posts)
          }

          if (posts.length < 6) {
            $loadMore.style.display = 'none'
          } else {
            $loadMore.disabled = false
          }

          $loadMore.classList.remove(LOADING_CLASS)
        })

        xhr.send(form)
      })
    }
  })
}

export default {
  view: 'blog-cards',
  init
}
