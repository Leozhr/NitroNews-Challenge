module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['@babel/plugin-transform-runtime'],
    ['module-resolver', {
      alias: {
        '@': './src'
      }
    }],
  ],
  ignore: ['node_modules']
};