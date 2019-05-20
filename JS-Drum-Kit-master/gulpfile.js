var gulp = require("gulp");
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('serve', ['sass'], function(){
	browserSync.init({
        server: "./build"
    });
	gulp.watch('./build/scss/**/*.scss', ['sass']);
	gulp.watch('./build/js/*.js').on('change', browserSync.reload);
	gulp.watch('./build/*.html').on('change', browserSync.reload);
})
gulp.task('sass', function(){
	gulp.src('build/scss/*.scss')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.reload({
			stream: true			
		}))
})
gulp.task('default', ['serve'])