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
    .pipe(pug())
    .pipe(gulp.dest('App/html'))
});