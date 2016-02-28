exports.config = {

  framework: 'jasmine',

  // remove the default dot reporter
  jasmineNodeOpts: {
    print: function() {}
  },

  // use the jasmine-spec-reporter
  onPrepare: function() {
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: 'all'
    }));
  },

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // look for tests in all files that end in .e2e-test.js
  specs: [
    'client/**/*.e2e-test.js'
  ]

};

