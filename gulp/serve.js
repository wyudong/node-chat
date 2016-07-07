var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Static server + watching css/html/js files
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: ['./']
        }
    });
    gulp.watch('./*.css', reload);
    gulp.watch('./*.html', reload);
    gulp.watch('./*.js', reload);
});
