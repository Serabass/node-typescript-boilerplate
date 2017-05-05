var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    tsProject = ts.createProject('tsconfig.json'),
    gulpTslint = require("gulp-tslint"),
    tslint = require("tslint"),
    tsFilesGlob = (function (c) {
        return c.filesGlob || c.files || 'src/**/*.ts';
    })(require('./tsconfig.json'));

gulp.task('default', ['lint', 'build']);

gulp.task('build', function () {
    var tsResult = tsProject.src()
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('.'));
});

gulp.task('lint', function () {
    return gulp.src(tsFilesGlob)
        .pipe(gulpTslint({
            formatter: 'verbose'
        }))
        .pipe(gulpTslint.report());
});
