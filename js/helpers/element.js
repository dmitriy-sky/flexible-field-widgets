function $element (name) {
  return document.querySelector(`[lhl-element*="${name}"]`)
}

function $elements (name) {
  return document.querySelectorAll(`[lhl-element*="${name}"]`)
}

function $elementChild (element, name) {
  return element.querySelector(`[lhl-element*="${name}"]`)
}

function $elementChildren (element, name) {
  return element.querySelectorAll(`[lhl-element*="${name}"]`)
}

export { $element, $elements, $elementChild, $elementChildren }
