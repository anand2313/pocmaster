'use strict';

var gulp = require('gulp'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify'),
connect = require('gulp-connect'),
sass = require('gulp-sass');

var DEST = 'build/';

gulp.task('minify', function() {
  return gulp.src('myelement.js')
    // This will output the non-minified version
    .pipe(gulp.dest(DEST))
    // This will minify and rename to foo.min.js
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST));
});



gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('webserver', function() {
  connect.server();
});
 
gulp.task('default', ['webserver','styles','minify']);