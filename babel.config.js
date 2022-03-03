module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@Components': './src/Components',
            '@globalStyle':"./src/globalStyle",
            '@navigation':"./src/navigation",
            '@screens':"./src/screens",
            '@shared':'./src/shared',
            "@store":"./src/store"
          },
        },
      ],
      "react-native-reanimated/plugin"],
  };
};
