var gulp = require("gulp");
var path = require('path');
var plugins = require('gulp-load-plugins')({
  config: path.join(__dirname, 'package.json'),
  lazy: false
});
var del = require("del");
var runSequence = require("run-sequence");

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
