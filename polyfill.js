function postCssDynamicValue(doc) {
  doc.querySelectorAll("input").forEach(function (input) {
    input.setAttribute('data-postcss-dynamic-value', input.value)
    input.addEventListener('input', function (evt) {
      input.setAttribute('data-postcss-dynamic-value', evt.target.value)
    })
  })
}
