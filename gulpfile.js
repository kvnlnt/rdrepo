var gulp = require('gulp');
var inject = require('gulp-inject');
var browserSync = require('browser-sync').create();

gulp.task('inject', function () {
  var target = gulp.src('./index.html');
  var sources = gulp.src(['./script/**/*.js', './style/**/*.css'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['inject'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});