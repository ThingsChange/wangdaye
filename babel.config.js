const plugins = [
    '@babel/plugin-transform-exponentiation-operator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
]
// 生产环境移除console
if (process.env.NODE_ENV === 'production') {
    plugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
