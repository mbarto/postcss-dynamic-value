# postcss-dynamic-value

[PostCSS] plugin that implements CSS actual value selectors for inputs.

Standard CSS [attribute selectors](https://www.w3schools.com/css/css_attribute_selectors.asp) do not capture the actual (user modified) value attribute for HTML input elements. They, instead, use the static initially set value.

This plugin allows capturing the dynamic value, by using a colon prefixed value attribute selector.

```css
input:[value="test"]
```


[PostCSS]: https://github.com/postcss/postcss


## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-dynamic-value
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-dynamic-value'),
    require('autoprefixer')
  ]
}
```

**Step 4:** Add the plugin polyfill to your HTML and activate it:

```html
<script src="https://unpkg.com/postcss-dynamic-value@0.0.4/polyfill.js"></script>
<script>
    postCssDynamicValue(document)
</script>
```

[official docs]: https://github.com/postcss/postcss#usage
