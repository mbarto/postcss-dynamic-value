import babel from '@rollup/plugin-babel'

export default [
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: false,
        exports: 'auto'
      },
      {
        file: 'dist/index.mjs',
        format: 'esm',
        sourcemap: false,
        exports: 'auto'
      }
    ],
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: [
          [
            '@babel/preset-env',
            {
              loose: true,
              modules: false,
              targets: { node: 12 },
              useBuiltIns: false
            }
          ]
        ]
      })
    ]
  }
]
