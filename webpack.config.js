const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const PostcssSafeParser = require('postcss-safe-parser');

const TARGET = process.env.TARGET;
const ROOT_PATH = path.resolve(__dirname);

//Common configuration settings
const common = {
  entry: path.resolve(ROOT_PATH, 'src/index.js'),
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(ROOT_PATH, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: false }],
              '@babel/plugin-proposal-object-rest-spread',
            ],
          },
        },
      },
    ]
  }
};

//Development configuration settings
if (TARGET === 'dev') {
  module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'content-type,authorization,accept',
      },
      port: 8181,
      inline: true,
      historyApiFallback: true,
      clientLogLevel: 'none',
      open: true,
      contentBase: 'dist',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development')
        },
        '__DEV__': true
      })
    ]
  });
}

//Production configuration settings
if (TARGET === 'build') {
  module.exports = merge(common, {
    mode: 'production',
    entry: {
      'material-ui-banner': path.resolve(ROOT_PATH, 'src/index.js')
    },
    output: {
      path: path.resolve(ROOT_PATH, 'dist'),
      filename: 'index.js',
      library: 'MaterialUiBanner',
      libraryTarget: 'umd'
    },
    externals: [{
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }],
    optimization: {
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            parse: {
              // we want terser to parse ecma 8 code. However, we don't want it
              // to apply any minfication steps that turns valid ecma 5 code
              // into invalid ecma 5 code. This is why the 'compress' and 'output'
              // sections only apply transformations that are ecma 5 safe
              // https://github.com/facebook/create-react-app/pull/4234
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              // Disabled because of an issue with Uglify breaking seemingly valid code:
              // https://github.com/facebook/create-react-app/issues/2376
              // Pending further investigation:
              // https://github.com/mishoo/UglifyJS2/issues/2011
              comparisons: false,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              // Turned on because emoji and regex is not minified properly using default
              // https://github.com/facebook/create-react-app/issues/2488
              ascii_only: true,
            },
          },
          // Use multi-process parallel running to improve the build speed
          // Default number of concurrent runs: os.cpus().length - 1
          parallel: true,
          // Enable file caching
          cache: true,
          sourceMap: true,
        }),
        new OptimizeCSSAssetsWebpackPlugin({
          cssProcessorOptions: { parser: PostcssSafeParser },
        }),
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        },
        '__DEV__': false
      }),
    ]
  });
}
