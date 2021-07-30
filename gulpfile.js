var gulp = require("gulp");
var ts = require("gulp-typescript");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("build", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(babel({
            presets: ["@babel/preset-env"]
          }))
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series("build"));