module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-styled-components',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          src: './src',
          components: './src/components',
          screens: './src/screens',
          assets: './src/assets',
          types: './src/types',
          hooks: './src/hooks',
        },
      },
    ],
  ],
};
