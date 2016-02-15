'use strict';

var gulp = require('gulp'),
  inject = require('gulp-inject'),
  less = require('gulp-less'),
  LessAutoPrefixPlugin = require('less-plugin-autoprefix'),
  LessCleanCssPlugin = require('less-plugin-clean-css'),

  less_autoprefix = new LessAutoPrefixPlugin({
    browsers: ['last 2 versions']
  }),

  less_clean_css = new LessCleanCssPlugin({
    advanced: true
  });

gulp.task('less', function () {

  return gulp.src(['client/style.less'])
    .pipe(
      inject(gulp.src(['**/*.less', '!jspm_packages{,/**}'], {
        read: false,
        cwd: 'client'
      }), {
        starttag: '/* inject:less-imports */',
        endtag: '/* endinject */',
        transform: function (filepath) {
          return '@import ".' + filepath + '";';
        }
      })
    )
    .pipe(less({
      plugins: [less_autoprefix, less_clean_css]
    }))
    .pipe(gulp.dest('client'));
});
