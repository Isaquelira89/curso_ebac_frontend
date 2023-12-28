const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function sassTask() {
  return gulp.src('source/scss/**/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('build/css'));
}
function imageTask() {
  return gulp.src('source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'));
}

function jsTask() {
  return gulp.src('source/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
}

exports.sass = sassTask;
exports.image = imageTask;
exports.js = jsTask;
exports.default = gulp.parallel(sassTask, imageTask, jsTask);

gulp.watch('source/scss/**/*.scss', sassTask);
gulp.watch('source/images/*', imageTask);
gulp.watch('source/js/*.js', jsTask);

