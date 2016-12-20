'use strict';

var gulp = require('gulp'),
    compass = require('gulp-compass'),
    browserSync = require('browser-sync');

var paths = {
    baseDir: 'app',
    watchFiles: ['app/*.html', 'app/scss/*.scss'],
    mainScss: 'app/scss/main.scss',
    cssDir: 'app/css',
    scssDir: 'app/scss',
    scssFiles: 'app/scss/*.scss'
};


gulp.task('server', function(){
    browserSync({
        port: 9000,
        server: { baseDir: paths.baseDir }
    });
});

gulp.task('compass', function(){
    gulp.src(paths.mainScss)
        .pipe(compass({
            config_file: 'config.rb',
            css: paths.cssDir,
            sass: paths.scssDir
        }))
});


gulp.task('watch', function(){
    gulp.watch(paths.watchFiles).on('change', browserSync.reload);
    gulp.watch(paths.scssFiles, ['compass']);
});

gulp.task('default', ['server', 'watch']);

