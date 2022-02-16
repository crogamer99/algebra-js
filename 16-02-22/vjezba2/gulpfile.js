var gulp = require("gulp");
var uglify = require("gulp-uglify");

gulp.task("uglify", async function(){
    gulp.src("js/**/*.js") //defining source file/s
    .pipe(uglify())
    .pipe(gulp.dest("build"));

});