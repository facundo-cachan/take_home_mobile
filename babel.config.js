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
          '@/': './src/',
          '@assets': './src/assets',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@providers': './src/providers',
          '@screens': './src/screens',
          '@services': './src/services',
          '@utils': './src/utils'
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
