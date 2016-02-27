'use strict';

var gulp = require('gulp'),
  eslint = require('gulp-eslint');

gulp.task('eslint', function () {
  return gulp.src([
    '**/*.js',
    '!client/config.js',
    '!client/jspm_packages{,/**}',
    '!client/modules/html_templates/html_templates.module.js',
    '!coverage{,/**}',
    '!node_modules{,/**}'
  ])
  .pipe(eslint())
  .pipe(eslint.format());
});
