module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: "",

        browserNoActivityTimeout: 0,

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ["mocha", "chai"],

        // plugins: [
        //     require('karma-jasmine'),
        //     require('karma-chrome-launcher'),
        // ],
        plugins: [
            require('karma-mocha'),
            require('karma-chai'),
            require('karma-chrome-launcher'),
        ],


        // list of files / patterns to load in the browser
        files: [
            // Tests
            "node_modules/angular/angular.js",
            "www/bundle.tests.js",

            {
                pattern: "node_modules/**/*.ts",
                included: true,
                watched: false,
                served: true
            },

            // Allow the source maps and source for the TypeScript test files to be served
            // so they can be used for debugging tests, but do not include them as script
            // references in the browser instance.
            {
                pattern: "www/bundle.tests.js.map",
                included: false,
                watched: false,
                served: true
            },
            {
                pattern: "tests/**/*.ts",
                included: false,
                watched: false,
                served: true
            }
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },

        client: {
          captureConsole: true,
          mocha: {
            bail: true
          }
        },


        // test results reporter to use
        // possible values: "dots", "progress"
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ["progress"],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ["Chrome"],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    })
}
