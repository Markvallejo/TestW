var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('sass', function(){
    return gulp.src('App/scss/Estilo.scss')
    .pipe(sass())
    .pipe(gulp.dest('App/css'))
});

gulp.task('pug', function(){
    return gulp.src('App/pug/index.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('index'))
});

gulp.task('default', function(){
    gulp.watch('./App/**/*.scss', gulp.series('sass'));
    gulp.watch('./App/**/*.pug', gulp.series('pug'));
});
