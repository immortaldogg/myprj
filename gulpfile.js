var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', () => {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
})

// Watch task
gulp.task('default', () => {
    gulp.watch('sass/**/*.scss', ['styles']);
})