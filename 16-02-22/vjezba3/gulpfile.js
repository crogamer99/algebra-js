var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var babel = require("gulp-babel");
var sass = require('gulp-sass')(require("sass"));
var uglify = require('gulp-uglify');

gulp.task("task1", async function(){
    gulp.src("scripts/*.js")
    .pipe(babel({
        presets : ["es2015"]
    }))
    .pipe(uglify())
    .pipe(gulp.dest("build"));

});

gulp.task("task2", async function(){
    gulp.src("*.scss")
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest("css"));

});