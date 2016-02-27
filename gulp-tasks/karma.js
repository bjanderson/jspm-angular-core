var gulp = require('gulp'),
  Server = require('karma').Server;

// for the difference between 'karma' and 'ci-karma' see https://github.com/karma-runner/gulp-karma/pull/15

// use this for development
gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/../karma.conf.js',
    singleRun: true
  }, function () {
    done();
  }).start();
});

// use this for building
gulp.task('ci-karma', function (done) {
  new Server({
    configFile: __dirname + '/../karma.conf.js',
    singleRun: true
  }, done).start();
});
