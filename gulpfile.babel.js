import gulp from 'gulp';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import pug from 'gulp-pug';
import eslint from 'gulp-eslint';
import eslintIfFixed from 'gulp-eslint-if-fixed';
import babel from 'gulp-babel';

// 文件路径
import {Info} from './config.user';

// 默认
gulp.task('default',['html','css','flx'],()=>{
    browserSync.init({
        server: Info.dist.html
    });
    gulp.watch(Info.src.scss,['css']);
    gulp.watch(Info.src.pug,['html']);
    gulp.watch(Info.src.js,['flx']);
    gulp.watch(Info.dist.html).on('change',browserSync.reload);
})
// pug
gulp.task('html',()=>{
    return gulp.src(Info.src.pug)
            .pipe(pug({
                pretty: true
            }))
            .pipe(gulp.dest(Info.dist.html))
            .pipe(browserSync.stream());
})  
// sass
gulp.task('css',()=>{
    return gulp.src(Info.src.scss)
        .pipe(sass({outputStyle: 'compact'}))
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],
        }))
        .pipe(gulp.dest(Info.dist.css))
        .pipe(browserSync.stream());
})
// js
gulp.task('js',()=>{
    return gulp.src(Info.src.js)
        .pipe(babel())
        .pipe(gulp.dest(Info.dist.js))
        .pipe(browserSync.stream());
})
// eslint --fix
gulp.task('flx',['js'],()=>{
    return gulp.src(Info.dist.js + '*.js')
        .pipe(eslint({fix:true}))
        .pipe(eslint.format())
        .pipe(eslintIfFixed(Info.dist.js))
        .pipe(browserSync.stream());
})
