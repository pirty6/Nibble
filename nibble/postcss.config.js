module.exports = {
  plugins: [
    require('postcss-custom-media'),
    require('postcss-partial-import')({ extension: '.pcss' }),
    require('postcss-nested'),
    require('lost'),
    require('postcss-cssnext'),
    require('postcss-custom-properties'),
    require('postcss-color-function'),
    require('postcss-mixins'),
    require('postcss-will-change'),
    require('postcss-vertical-rhythm'),
    require('postcss-minify-selectors'),
    require('postcss-minify-params'),
  ],
};
