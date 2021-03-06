const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { MedusaPlugin } = require('@medusa/webpack-plugin')

const env = {
  production: process.env.NODE_ENV === 'production',
  development: process.env.NODE_ENV === 'development',
}

const config = {
  mode: env.production ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MedusaPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}

module.exports = config
