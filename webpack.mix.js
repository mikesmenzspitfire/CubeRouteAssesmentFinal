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
// Add VUE

mix.js('resources/js/app.js', 'public/js')
mix.js('resources/js/plugins.js', 'public/js')
mix.js('resources/js/theme.js', 'public/js')
    .css('resources/css/style.css', 'public/css')
    .css('resources/css/plugins.css', 'public/css');
    

