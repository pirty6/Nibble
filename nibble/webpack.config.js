var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
var _ = require('lodash');

var PROD = process.argv.indexOf('-p') !== -1;

var entries = {
  app: './lib/nibble_web/static/js/app.js',
  appCSS: './lib/nibble_web/static/css/app.pcss',
  PageApp: './lib/nibble_web/static/js/page/app.jsx',
};

var cleanPlugin = new CleanWebpackPlugin(['static'], {
    root: path.resolve('./priv'),
    verbose: true,
    dry: false,
  });

function setCssExt(ext) {
  return ext.replace(/\.js$/, '.css');
};

var generateManifestPlugin = function (compiler) {
  return this.plugin('done', function (stats) {
    stats = stats.toJson();
    var assetStats = stats.assetsByChunkName;

    for (var entryName in assetStats) {
      var entryPath = assetStats[entryName];
      if (/\.(?:pcss|scss|sass|css)$/.test(entries[entryName])) {
        if (_.isArray(entryPath)) {
          assetStats[entryName] = entryPath.map(function (ass) {
            return setCssExt(ass);
          });
        } else {
          assetStats[entryName] = setCssExt(entryPath);
        }
      }
    }

    // return fs.writeFileSync(
    //   path.join(outputDir,
    //   'asset-stats.json'), JSON.stringify(stats.assetsByChunkName, null, 2)
    // );
  });
};

webpackConfiguration = {
  devtool: PROD ? false : 'eval',
  entry: entries,

  output: {
    path: path.resolve(__dirname, 'priv/static'),
    publicPath: '/',
    filename: PROD ? 'js/[name].min.js' : 'js/[name].js',
    chunkFilename:  PROD ? 'js/[name].[id].min.js' : 'js/[name].[id].js',
  },

  resolve: {
    modules: [
      'node_modules',
      `${__dirname}/web/static/js`,
      `${__dirname}/web/static/css`,
    ],
  },

  module: {
    noParse: /node_modules\/localforage\/dist\/localforage.js/,
    rules: [
      { test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['es2015', { modules: false }], 'stage-2'],
            plugins: [
              'dynamic-import-webpack',
            ],
          }, },
        ], },
      { test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', ['es2015', { modules: false }], 'stage-2'],
              plugins: [
                'dynamic-import-webpack',
              ],
            }, },
        ], },
      { test: /\.pcss$/, exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'], }), },
      { test: /\.css$/, exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader', }), },
    ],
  },

  plugins: [
      cleanPlugin,
      new webpack.DefinePlugin({
        __PRODUCTION__: PROD ? JSON.stringify(false) : JSON.stringify(true),
        __DEVTOOLS__: PROD ? false : true,
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.DJANGO_ENV),
        },
      }),
      new webpack.LoaderOptionsPlugin({
        debug: !PROD,
      }),
      new ExtractTextPlugin({
        filename: (getPath) => (getPath('css/[name].css').replace('CSS', '')),
        allChunks: true, }),

      // generateManifestPlugin,
      // new CopyWebpackPlugin([
      //   { from: './web/static/assets' },
      //   { from: './web/static/css/vendors/normalize.css', to: 'css/normalize.css' },
      //   { from: './web/static/vendor/active_admin.css.css', to: 'css/active_admin.css.css' },
      //   { from: './web/static/vendor/admin_lte2.css', to: 'css/admin_lte2.css' },
      //   { from: './web/static/vendor/admin_lte2.js', to: 'js/admin_lte2.js' },
      //   { from: './web/static/vendor/ex_admin_common.js', to: 'js/ex_admin_common.js' },
      //   { from: './web/static/vendor/jquery.min.js', to: 'js/jquery.min.js' },
      // ]),
  ],
};

if (PROD) {
  webpackConfiguration.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: `"production"`,
    },
  }));
  webpackConfiguration.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: !PROD,
      compress: {
        warnings: PROD ? false : true,
      },
    })
  );
}

module.exports = webpackConfiguration;
