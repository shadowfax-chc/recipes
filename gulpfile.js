var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css');
    rename = require('gulp-rename'),
    wt = require('gulp-wt');

var paths = {
    sass: ['static-src/**/*.scss', '!static-src/**/_*.scss'],
    css: ['static/css/*.css', '!static/css/*.min.css', '!static/css/bootstrap*.css'],
};

gulp.task('wt', function() {
    gulp.src(paths.sass)
        .pipe(wt({
            style: 'expanded',
            css: 'static/css',
            fonts: 'static/fonts'
        }))
});

gulp.task('css-compress', ['wt'], function() {
    gulp.src(paths.css)
        .pipe(cleanCSS())
        .pipe(rename(function (path) {
            path.extname = '.min.css';
            return path;
        }))
        .pipe(gulp.dest('static/css'));
});

gulp.task('css', ['css-compress']);

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['css']);
});

gulp.task('default', ['css']);
