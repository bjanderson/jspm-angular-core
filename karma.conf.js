// Karma configuration
// Generated on Fri Feb 19 2016 15:10:40 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      }
    },

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS'
      //,'Chrome'
    ],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


    // list of files to exclude
    exclude: [],

    // list of files / patterns to load in the browser
    files: [],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm', 'jasmine'],

    jspm: {
      // Edit this to your needs
      config: 'client/config.js',
      packages: 'client/jspm_packages/',
      loadFiles: [
        'client/**/*.unit-test.js'
      ],
      serveFiles: [
        'client/**/*.js'
      ]
    },

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    plugins: [
      'karma-babel-preprocessor',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-jspm',
      'karma-phantomjs-launcher',
      'karma-spec-reporter'
    ],

    // web server port
    port: 9876,

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'client/{*.js,!jspm_packages{,/**}}': ['babel']
    },

    proxies: {
      '/client/': '/base/client/',
      '/jspm_packages/': '/base/client/jspm_packages/'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
