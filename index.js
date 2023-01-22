const searchDynamicValueSelector = /:\[value(.*?)\]/gi
const dynamicAttribute = "data-postcss-dynamic-value"

const plugin = () => {
  return {
    postcssPlugin: "postcss-dynamic-value",

    Once (css) {
      css.walkRules(rule => {
        if (
          rule.selector &&
          rule.selector.match(searchDynamicValueSelector) !== -1
        ) {
          rule.selector = rule.selector.replace(
            searchDynamicValueSelector,
            `[${dynamicAttribute}$1]`
          )
        }
      })
    },
}}

plugin.postcss = true

export default plugin
