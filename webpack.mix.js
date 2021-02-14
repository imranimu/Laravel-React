const mix = require('laravel-mix');

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

// mix.styles([
//    'resources/css/style.css',
//    'resources/css/font-awesome.css',
//    'resources/css/bootstrap-custom.css',
//    'resources/css/color/turquoise.css',
//    'resources/css/responsive.css',
//    'resources/css/animate.min.css' 
// ], 'public/css/app.css');

// mix.react('resources/js/app.js', 'public/js')
//    .sass('resources/sass/app.scss', 'public/css');

// mix.postCss('resources/css/style.css', 'public/css', [
//    require('precss')()
// ]);

mix.react('resources/js/app.js', 'public/js')
   .styles([
   'resources/css/style.css',
   'resources/css/font-awesome.css',
   'resources/css/bootstrap-custom.css',
   'resources/css/color/turquoise.css',
   'resources/css/responsive.css',
   'resources/css/animate.min.css' 
], 'public/css/app.css');
