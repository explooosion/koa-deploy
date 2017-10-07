var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('ex-sass', function () {
    gulp.src('src/public/scss/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('src/public/css'))
});