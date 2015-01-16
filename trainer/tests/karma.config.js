// Karma configuration
// Generated on Tue Oct 07 2014 22:16:54 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
		'app/bower_components/angular/angular.js',
		'app/bower_components/angular-route/angular-route.js',
		'app/bower_components/angular-resource/angular-resource.js',
		'app/bower_components/angular-sanitize/angular-sanitize.js',
		'app/bower_components/angular-animate/angular-animate.js',
		'app/bower_components/angular-mocks/angular-mocks.js',
		'app/bower_components/angular-messages/angular-messages.js',
		'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
		'app/bower_components/angular-media-player/dist/angular-media-player.js',
		'app/bower_components/angular-local-storage/dist/angular-local-storage.js',
		'app/js/app.js',
		'app/js/root.js',
		'app/js/7MinWorkout/*.js',
		'app/js/shared/*.js',
		'app/js/WorkoutBuilder/*.js',
		'app/js/config.js',
		'app/js/config.spec.js',
		'app/partials/**/*.html',
    ],


    // list of files to exclude
    exclude: [
		'app/js/vendor/*.*'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
		'app/partials/**/*.html': ['ng-html2js']
    },

	ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'app',
    },
	

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
