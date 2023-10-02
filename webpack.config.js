// global dependencies
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/test/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: 'react-sandbox',
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'swc-loader',
        exclude: /node_modules/,
      },
    ]
  },
  devtool: 'source-map',
  externals: {
    'react': 'umd react',
    'react-dom': 'umd react-dom',
    '@emotion/react': "umd @emotion/react"
  }
};
