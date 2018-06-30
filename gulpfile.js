// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./Week4-product_gallery/*.scss')//抓
        .pipe(sass())
        .pipe(gulp.dest('./Week4-product_gallery/CSS/'))//建立
});

gulp.task('default', ['sass'], function() {
    gulp.watch('./*.scss', ['sass']);
})