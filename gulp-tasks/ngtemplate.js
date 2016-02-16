'use strict';

var gulp = require('gulp'),
  htmlMin = require('gulp-htmlmin'),
  ngTemplate = require('gulp-ng-template'),
  htmlMin_options = {
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    collapseInlineTagWhitespace: true
  };

gulp.task('ngtemplate', function() {
  return gulp.src(['client/**/*.tpl.html', '!client/jspm_packages{,/**}'])
    .pipe(htmlMin(htmlMin_options))
    .pipe(ngTemplate({
      moduleName: 'HTMLTemplates',
      standalone: true,
      filePath: 'modules/html_templates/html_templates.module.js'
    }))
    .pipe(gulp.dest('client'));
});
