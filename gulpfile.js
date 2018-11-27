var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', () => {
    gulp.src('scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/custom/'));
})

gulp.task('watch', () => {
    gulp.watch(['scss/**/*.scss', 'scss/main.scss'], ['styles']);
})