const mix = require("laravel-mix");


// npm install typescript ts-loader
//https://github.com/laravel-mix/laravel-mix/issues/548
/*mix
    .webpackConfig({
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    loader: 'ts-loader'
                }
            ]
        }
    })
    .scripts([
        'resources/assets/js/app.js',
        'resources/assets/ts/defs/!*.d.ts',
        'resources/assets/ts/base.ts',
        'resources/assets/ts/models/!**!/!*.ts',
        'resources/assets/ts/starter.ts'
    ], 'public/js/app.js')
    .sass('resources/assets/sass/app.scss', 'public/css');*/

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts("resources/js/index.tsx", "public/js").react();
