var gulp = require('gulp'),
  Server = require('karma').Server;

gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/../karma.conf.js',
    singleRun: true
  }, function () {    // <-- use this for local development
    done();           // creating a function to call done eats the error code, if any,
  }).start();         // and allows gulp to keep running

  //}, done).start(); // <-- use this on your CI server. see: https://github.com/karma-runner/gulp-karma/pull/15
});
