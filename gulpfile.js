var gulp = require('gulp'),
    del = require('del'),
    image = require('gulp-image');

gulp.task('image', function (done) {
    gulp.src('./src/**/*')
        .pipe(image())
        .pipe(gulp.dest('./dist/'));
    done()
});

gulp.task('clean', async function (done) {
    del.sync('dist');
    done()
});

gulp.task('watch', function () {
    gulp.watch('src/**/*', gulp.series('image'));
});

gulp.task('build', gulp.series('clean', 'image'));
gulp.task('default', gulp.parallel('image', 'watch'));