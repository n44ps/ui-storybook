const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = ({ config }) => {
  config.module.rules[0].use[0].loader = require.resolve('babel-loader');

  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ];

  config.module.rules[0].use[0].options.plugins = [
    require.resolve('@babel/plugin-proposal-object-rest-spread'),
  ];

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            require.resolve('@babel/preset-react'),
            require.resolve('@babel/preset-env'),
          ],
          plugins: [
            require.resolve('@babel/plugin-proposal-object-rest-spread'),
          ],
        },
      },
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      { loader: 'react-docgen-typescript-loader' },
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          parser: 'typescript',
        },
      },
    ],
  });
  config.resolve.plugins = [
    new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, '../tsconfig.json'),
    }),
  ];
  config.resolve.extensions.push('.ts', '.tsx', '.json');
  return config;
};
