var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
gulp.task('sass', function(){
	return gulp.src('build/scss/**/*.scss')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(gulp.dest('build/css/'))
		.pipe(browserSync.reload({
			stream: true
		}))
})
gulp.task('serve', ['sass'], function(){
	browserSync.init({
		server: {
			baseDir: './build'
		}
	})	
	gulp.watch('./build/scss/**/*.scss', ['sass']);	
	gulp.watch('./build/js/**/*.js').on('change',  browserSync.reload);	
	gulp.watch('./build/*.html').on('change',  browserSync.reload);	
})
gulp.task('default', ['serve']);