let mix = require('laravel-mix');

class Terminal2 {
  dependencies() {
    return ["laravel-mix-svg", "laravel-mix-tailwind", "laravel-mix-purgecss"];
  }

  boot() {
    Mix.js('resources/assets/js/app.js', 'public/js')
      .copy('node_modules/terminal2-stylekit/fonts', 'public/fonts')
      .sass('resources/assets/sass/app.scss', 'public/css')
      .tailwind('node_modules/terminal2-stylekit/tailwind.js')
      .svg({
        assets: [
          './resources/assets/svg/',
          'node_modules/terminal2-stylekit/svg',
        ]
      })
      .purgeCss()
      .version()
    ;
  }
}

mix.extend('terminal2', new Terminal2());

