let mix = require('laravel-mix');

require('laravel-mix-svg');
require('laravel-mix-tailwind');
require('laravel-mix-purgecss');

module.exports = () => {
  return mix.js('resources/assets/js/app.js', 'public/js')
    .copy('node_modules/terminal2-stylekit/fonts', 'public/fonts')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .tailwind('node_modules/terminal2-stylekit/tailwind.js')
    .svg({
      assets: [
        'resources/assets/svg/',
        'node_modules/terminal2-stylekit/svg/',
      ]
    })
    .purgeCss()
    .version()
  ;
}
