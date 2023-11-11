module.exports = {
  plugins: [
    'nativewind/babel',
    'react-native-reanimated/plugin',
    ['@babel/plugin-transform-modules-commonjs', {
      'allowTopLevelThis': true
    }],
    [
      'module-resolver',
      {
        alias: {
          '@assets': './src/assets',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@services': './src/services'
        }
      }
    ]
  ],
  presets: [
    ['module:metro-react-native-babel-preset'],
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ]
};
