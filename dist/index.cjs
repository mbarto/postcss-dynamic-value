'use strict';

const plugin = () => {
  return {
    postcssPlugin: "postcss-dynamic-value",
    Once(css) {
      css.walkRules(rule => {
        if (rule.selector && rule.selector.indexOf(":[value") !== -1) {
          rule.selector = rule.selector.replaceAll(':[value', '[data-postcss-dynamic-value');
        }
      });
    }
  };
};
plugin.postcss = true;

module.exports = plugin;
