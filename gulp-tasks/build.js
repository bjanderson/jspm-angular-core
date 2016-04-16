'use strict';

var  gulp = require('gulp'),
  exec = require('child_process').exec,
  fs = require('fs'),
  ngAnnotate = require('gulp-ng-annotate'),
  rename = require('gulp-rename'),
  rev = require('gulp-rev'),
  revReplace = require('gulp-rev-replace'),
  runSequence = require('run-sequence'),
  uglify = require('gulp-uglify');

gulp.task('build', function (done) {
  runSequence(
    'build:clean',
    'less',
    [
      'build:html',
      'build:js'
    ],
    'build:rev',
    'build:cleanup',
    done
  );
});

gulp.task('build:clean', function (done) {
  exec('rm -rf dist && mkdir dist', function (err) {
    if (err != null) { throw err; }
    done();
  });
});

gulp.task('build:html', function (done) {
  fs.readFile('client/index.html', 'utf8', function (err, data) {
    if (err != null) { throw err; }

    let result = data
      .replace(/<!--DEV[\s\S]*?DEV-->/g, '')
      .replace('<!--PROD', '')
      .replace('PROD-->', '')
      .replace(/\ \ +/g, '')
      .replace(/(\n\r|\n|\r)/g, '');

    fs.writeFile('./dist/index.html', result, 'utf8', function (err) {
      if (err != null) { throw err; }
      done();
    });
  });
});

gulp.task('build:js', ['bundle:js'], function () {
  return gulp.src('./dist/app.js')
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('bundle:js', ['eslint', 'ngtemplate'], function (done) {
  exec('cd client && jspm bundle-sfx modules/main/main.module.js ../dist/app.js --skip-source-maps',
    function (err) {
      if (err != null) { throw err; }
      done();
    }
  );
});

gulp.task('build:rev', ['build:revfiles'], function () {
  const manifest = gulp.src('./dist/rev-manifest.json');
  return gulp.src('./dist/index.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:revfiles', function () {
  return gulp.src('./dist/app.min.js')
    .pipe(rev())
    .pipe(gulp.dest('./dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:cleanup', function (done) {
  exec('rm ./dist/app.js ./dist/app.min.js ./dist/rev-manifest.json', function (err) {
    if (err != null) { throw err; }
    done();
  });
});
