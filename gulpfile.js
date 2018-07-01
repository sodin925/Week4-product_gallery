// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./*.scss')//抓
    .pipe(sass())
    .pipe(gulp.dest('./CSS/'))//建立
});

gulp.task('default', ['sass'], function () {
  gulp.watch('./*.scss', ['sass']);
})
