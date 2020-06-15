module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          config: './src/config',
          constants: './src/constants',
          enums: './src/enums',
          hooks: './src/hooks',
          library: './src/library',
          navigation: './src/navigation',
          screens: './src/screens',
          utils: './src/utils',
          Redux: './src/Redux',
          validations: './src/validations',
        },
      },
    ],
  ],
};
