const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const CssUrlRelativePlugin = require('css-url-relative-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const OfflinePlugin = require('offline-plugin');

const IS_DEV = process.env.NODE_ENV === 'dev';

const config = {
  mode: IS_DEV ? 'development' : 'production',
  devtool: IS_DEV ? 'eval' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'js', 'index.js'),
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: IS_DEV,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name].[ext]',
              fallback: 'file-loader',
              outputPath: 'public/images',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'windows.jQuery': 'jquery',
      Util: 'exports-loader?Util!bootstrap/js/dist/util',
      ko: 'exports-loader?!knockout',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src', 'public'),
        to: 'public',
      },
    ]),
    new MiniCssExtractPlugin({
      filename: IS_DEV ? 'css/[name].css' : 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].css',
    }),
    new webpack.HashedModuleIdsPlugin(),
    new PreloadWebpackPlugin({
      include: 'initial',
    }),
    new CssUrlRelativePlugin(),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      inject: true,
      fingerprints: false,
      dir: 'auto',
      name: 'Yarn Story Editor',
      short_name: 'Yarn',
      description: 'Yarn Story Editor',
      background_color: '#3367D6',
      theme_color: '#3367D6',
      display: 'fullscreen',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/public/icon.png'),
          sizes: [96, 128], // multiple sizes
        },
        {
          src: path.resolve('src/public/icon.ico'),
          sizes: [32], // you can also use the specifications pattern
        },
      ],
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      favicon: path.resolve('src/public/icon.ico'),
      minify: {
        collapseWhitespace: true,
        removeComments: false, // This is mandatory, due to knockout's virtual bindings
        useShortDoctype: true,
      },
    }),
    new OfflinePlugin({
      // responseStrategy: 'network-first',
      externals: [
        'https://www.dropbox.com/static/api/2/dropins.js',
        'https://www.dropbox.com/static/images/widgets/dbx-saver-status.png',
      ],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    host: '0.0.0.0', //this will allow you to run it on a smartphone with 8080 port. Use ipconfig or ifconfig to see broadcast address
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
    minimizer: [],
  },
};

if (!IS_DEV) {
  const TerserPlugin = require('terser-webpack-plugin');
  const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
  config.optimization.minimizer.push(
    new TerserPlugin(),
    new OptimizeCSSAssetsPlugin({})
  );
}

module.exports = config;
