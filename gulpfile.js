var gulp = require("gulp");
var path = require('path');
var plugins = require('gulp-load-plugins')({
  config: path.join(__dirname, 'package.json'),
  lazy: false
});
var del = require("del");
var runSequence = require("run-sequence");

//Additional dependencies added for browserify and lint
var jshint = require('gulp-jshint'); 

var sourcemaps = require('gulp-sourcemaps')
var rollup = require('gulp-rollup')

// webpack
var gutil = require('gulp-util')
var webpackBuild = require('ionic-gulp-webpack');
var webpackConfig = require('./tests/webpack.config.js');

/**
 * Used to load the gulp task with the given name from resources/build/tasks
 * http://macr.ae/article/splitting-gulpfile-multiple-files.html
 */
function getTask(taskName) {
  var fileName = taskName.replace(":", "-");
  return require("./tasks/" + fileName)(gulp, plugins);
}

gulp.task("help", plugins.taskListing.withFilters(/:/));

gulp.task("ts", ["ts:src"], getTask("ts"));
gulp.task("ts:src", ["ts:src-readme"], getTask("ts:src"));
gulp.task("ts:src-readme", getTask("ts:src-readme"));
gulp.task("ts:tests", ["ts"], getTask("ts:tests"));

gulp.task('lint', function() { 
 gulp.src(['./www/js/**/*.js']) 
  .pipe(jshint()) 
  .pipe(jshint.reporter('default')) 
  .pipe(jshint.reporter('fail')); 
});

gulp.task('build-test', function(){
  return webpackBuild({
    watch: false,
    config: webpackConfig,
    statsOptions: {
      'colors': false,
      'errorDetails': true
    }  
  })
});

gulp.task('test', ['ts:tests', 'build-test'], function() {
  console.log('DONE')
});