var dashingReport = require('istanbul-reporter-dashing');
var istanbul = require('istanbul');
istanbul.Report.register(dashingReport);
module.exports = function(config) {
    'use strict';

    var sourcePreprocessors = [];
    var reporters = ['mocha', 'junit'];
    var coverageReporters = [{
        type: 'cobertura',
        subdir: '.',
        file: 'cobertura.xml'
    }, {
        type: 'html',
        subdir: 'html'
    }];

    function isDebug(argument) {
        return argument === '--debug';
    }

    function updateDashboard(argument) {
        return argument === '--dashboard';
    }

    if (!process.argv.some(isDebug)) {
        sourcePreprocessors.push('coverage');
        reporters.push('coverage');
    }

    config.set({

        basePath: '.',

        frameworks: ['mocha', 'requirejs', 'chai', 'sinon'],

        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js', {
                pattern: 'app/**/*.js',
                included: false
            }, {
                pattern: 'test/helpers/testSetup.js',
                included: false
            }, {
                pattern: 'test/specs.js',
                included: false
            }, {
                pattern: 'test/spec/*.js',
                included: false
            }, {
                pattern: 'test/spec/tenacity/*.js',
                included: false
            }, {
                pattern: 'app/events.js',
                included: true
            },
            'test/main-tests.js'
        ],

        exclude: [
            'app/scripts/main.js'
        ],

        reporters: reporters,

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'app/scripts/!(lib)**/!(apiManagerFake).js': sourcePreprocessors
        },

        // optionally, configure the reporter
        coverageReporter: {
            reporters: coverageReporters,
            dir: 'coverage/'
        },

        // the default configuration
        junitReporter: {
            outputDir: 'junit', // results will be saved as $outputDir/$browserName.xml
            outputFile: 'testrun.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: '', // suite will become the package name attribute in xml testsuite element
            useBrowserName: true // add browser name to report and classes names
        },

        port: 9001,
        colors: true,
        autoWatch: true,
        singleRun: false,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        browsers: ['PhantomJS'],

        eventHandlers: {
            'stuff': function() {
                return 'things';
            }
        }

    });

    console.log(JSON.stringify(this));

    // this.on('coverage_complete', function(browser, coverageReport) {
    //     console.log('Covrage report: ', coverageReport);
    // });
};