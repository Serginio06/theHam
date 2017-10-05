const manifest = require('./package.json');
const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util');
const concat = require('gulp-concat');
// const webpack = require('webpack');
// const webpack = require('gulp-webpack');
// const webpack = require('webpack-stream');
const express = require('express');
const mime = require('mime');
const isProduction = gutil.env.production;
const sass = require ('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
var run = require('gulp-run');
var replace = require('gulp-replace');
// const plugins = require('gulp-load-plugins'); // replaces all your requires
// var gulpLoadPlugins = require('gulp-load-plugins');
// var plugins = gulpLoadPlugins();
// var urlAdjuster = require('gulp-css-url-adjuster');

// var toChange1 = "url('./../../static";
// var changeOn1 = "url(''./React/TheHam/build";
// let changeOn1 = "";
// var yourDirectory = "/Content/images/";


gulp.task('yarnStart', function() {
    return run('yarn start').exec();
});

// gulp.task('webpackBuild', function() {
//     return run('webpack').exec();
// });


gulp.task('js', function (callback) {
    build(false, callback);
});

gulp.task('watch', function () {
    build(true);
});


// compile css from sass
gulp.task('build-css', function() {
    gutil.log ('Building css from sass...');
    return gulp.src('src/scss/**/*.scss')

               .pipe(sourcemaps.init())  // Process the original sources
               .pipe(concat('all.scss'))
               .pipe(sass ().on ('error', sass.logError))
               .pipe(sourcemaps.write())// Add the map to modified source.
               // .pipe(replace('./../../static', './React/TheHam/build')) //unrem before publish on github pages
               .pipe(replace('./../../public', '.')) //unrem for local test

               .pipe(gulp.dest('src/css'));
});

// copy components
// gulp.task('templates-copy', function () {
//     gutil.log ('Components copying...');
//     return gulp.src('source/assets/templates/**/*.*')
//                .pipe(gulp.dest('public/assets/templates'))
// });
//
// gulp.task('copyIndexFile', function () {
//     gutil.log ('Index.html copying...');
//     return gulp.src('public/index.html')
//                // .pipe(gulp.dest('build'))
//                .pipe(gulp.dest('./'))
// });

gulp.task('copyData', function () {
    gutil.log ('/Data copying...');
    return gulp.src('src/data/*.*')
               .pipe(gulp.dest('public/data'))
});

gulp.task('copyImages', function () {
    gutil.log ('/Images copying...');
    return gulp.src('src/images/**/*.*')
               .pipe(gulp.dest('public/images'))
});

gulp.task('copyIcons', function () {
    gutil.log ('/Icons copying...');
    return gulp.src('src/icons/**/*.*')
               .pipe(gulp.dest('public/icons'))
});

gulp.task('copyVendors', function () {
// gulp.task('default', function () {
    gutil.log ('/Vendors copying...');
    return gulp.src('src/vendors/**/*.*')
               .pipe(gulp.dest('public/vendors'))
});

gulp.task('express', function () {
    var app = express();
    // app.use(express.static(__dirname + '/static'));
    app.use(express.static(__dirname + '/build'));

    app.use(function (req, res) {
        // express.static.mime.define({
        //     'application/x-font-woff': ['woff'],
        //     'application/font-woff': ['woff'],
        //     'application/font-woff2': ['woff2']
        // });
        // res.contentType(filename);
        // res.sendFile(__dirname + '/build/index.html');
        res.sendFile(__dirname + '/index.html');
    });
    app.listen(process.env.PORT || 4000);
});

// configure which files to watch and what tasks to use on file changes
gulp.task ('watch', function () {
    // build(true);
    // gulp.watch ('source/assets/javascript/**/*.js', ['logChanges', 'jshint']);
    gulp.watch ('src/scss/**/*.scss', [ 'build-css']);
    gulp.watch ('src/data/*.*', [ 'copyData']);
    gulp.watch ('src/images/**/*.*', [ 'copyImages']);
    gulp.watch ('src/icons/**/*.*', [ 'copyIcons']);
    gulp.watch ('src/vendors/**/*.*', [ 'copyVendors']);
    // gulp.watch ('source/assets/templates/**/*.*', [ 'templates-copy']);
    // gulp.watch ('public/index.html', [ 'copyIndexFile']);
    // gulp.watch ('src/**/*.*', [ 'webpackBuild']);
});

// gulp.task ('default', function () {
//     return gutil.log ('Changes detected! Start checking....')
// });
//
// // define the default task and add the watch task to it
// gulp.task ('default', ['default']);

// gulp.task('build', ['js']);
// gulp.task('dev', ['build', 'watch', 'express']);
// gulp.task('default', ['build']);

// create a default task and just log a message
// gulp.task('default',['watch'], function() {
//     return gutil.log('Gulp is running!')
// });

// gulp.task('default', ['copyIndexFile', 'copyData', 'copyImages', 'copyVendors','build-css', 'webpackBuild', 'watch']);
// gulp.task('default', ['copyData','build-css','copyVendors', 'copyImages','copyIcons','express', 'watch',]);
gulp.task('default', ['copyData','build-css','copyVendors', 'copyImages','copyIcons','watch', 'yarnStart']);
gulp.task('build', ['copyData','build-css','copyVendors', 'copyImages','copyIcons']);
// gulp.task('default', ['webpackBuild']);