var gulp = require('gulp'),
  exec = require('child_process').exec,
  replace = require('gulp-replace');

gulp.task('build', ['prepare-index-html'], function (cb) {
  exec('rm -rf dist/ && mkdir dist');

  exec('cd client && jspm bundle-sfx modules/main/main.module.js ../dist/app.min.js --skip-source-maps --minify', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });

  exec('cp client/style.css dist/style.css');
});


gulp.task('prepare-index-html', function() {
  gulp.src(['client/index.html'])
    .pipe(replace(/<!--DEV[\s\S]*?DEV-->/g, ''))
    .pipe(replace('<!--PROD', ''))
    .pipe(replace('PROD-->', ''))
    .pipe(gulp.dest('dist/'));
});
