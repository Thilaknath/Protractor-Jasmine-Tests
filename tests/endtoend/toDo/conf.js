// conf.js
var SpecReporter = require('/root/node_modules/jasmine-spec-reporter/src/jasmine-spec-reporter.js');

exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
    
 onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter());
  },
 
 jasmineNodeOpts: {
    showColors: true,
    silent: true,
    defaultTimeoutInterval: 360000,
    print: function () {
    }
 }
};