import postcss from 'postcss'

import plugin from './index'

async function run (input, output, opts = { }) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('valid dynamic value selector', async () => {
  await run('input:[value="test"] {}', 'input[data-postcss-dynamic-value="test"] {}')
})

it('invalid dynamic value selector is not changed', async () => {
  await run('input:[dummy="test"] {}', 'input:[dummy="test"] {}')
})

it('dynamic value selector with other operator', async () => {
  await run(
    'input:[value$="test"] {}',
    'input[data-postcss-dynamic-value$="test"] {}'
  )
})
