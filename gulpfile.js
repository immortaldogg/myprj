const { src, dest, series, watch } = require('gulp');
var sass = require('gulp-sass');

function autocompile(cb) {
    console.log("Some files changed. Updating...")
    src('./sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./css/'));
    
    cb();
}

// gulp.task('styles', () => {
//     gulp.src('sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./css/'));
// })

function myprj_watcher(cb) {
    // Watch task
    watch('./sass/**/*.scss', autocompile);
    cb();
}

function myprj_default(cb) {
    console.log("Watching changes...")
    cb();
}

exports.watch = myprj_watcher;

exports.default = series(myprj_default, myprj_watcher);
