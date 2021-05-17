const {src, dest, series} = require('gulp')
const scss = require('gulp-sass')
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const pug = require('gulp-pug');
const rename = require("gulp-rename");

const appPath = {
    scss: './app/scss/**/*.scss',
    js: './app/js/*.js',
    img: [
        './app/img/**/*.jpg',
        './app/img/**/*.png'
    ]
}
const destPath = {
    css: './dist/css/',
    js: './dist/js/',
    img: './dist/img/'
}

function image() {
    return src(appPath.img)
        .pipe(imagemin())
        .pipe(rename(function (path) {
            return {
                dirname: path.dirname,
                basename: path.basename.substr(0,3) + "-test",
                extname: path.extname
            };
        }))
        .pipe(dest(destPath.img))
}

function scssCompress() {
    return src(appPath.scss)
        .pipe(scss({
            outputStyle: 'compressed'
        }))
        .pipe(dest(destPath.css))
}

function pugToHtml() {
    return src('./app/index.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(dest('./dist/'))
}

function jsMin() {
   return src(appPath.js)
       .pipe(uglify())
       .pipe(dest(destPath.js))
}

exports.default = series(scssCompress, image, pugToHtml, jsMin)
