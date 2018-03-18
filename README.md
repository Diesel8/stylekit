# Terminal2 Stylekit

This package is used in all terminal2 websites and contains all base styling, components and utilities. It's based on Tailwind css framework and encourages utilities first approach.

# Install

```bash
yarn add terminal2-stylekit
```

# Use

Use the following `webpack.mix.js` in the root of your app

```javascript
let mix = require('laravel-mix');

require('laravel-mix-tailwind');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const mixed = mix.js('resources/assets/js/app.js', 'public/js')
  .copy('node_modules/terminal2-stylekit/fonts', 'public/fonts')
  .sass('resources/assets/sass/app.scss', 'public/css')
  .tailwind('node_modules/terminal2-stylekit/tailwind.js')
  .purgeCss()
  .version()
;
```

Add tailwind & custom styles to your `app.scss` file

```sass
@tailwind preflight;
@tailwind components;
@import "node_modules/terminal2-stylekit/components";

// Custom components here

@tailwind utilities;

// Custom utilities here
```

