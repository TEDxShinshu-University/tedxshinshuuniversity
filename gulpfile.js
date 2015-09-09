'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	del    = require('del'),
	browserSync = require('browser-sync').create();

gulp.task("concatScripts", function() {
	return gulp.src([
		'js/jquery.fittext.js',
		'js/jquery.easing.min.js',
		'js/jquery.backstretch.min.js',
		'js/bootstrap-switch.min.js',
		'js/wow.min.js',
		'js/creative.js',
		'js/main.js'])
	.pipe(concat("app.js"))
	.pipe(gulp.dest("js"));
});

gulp.task("minifyScripts", ["concatScripts"], function() {
	return gulp.src("js/app.js")
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js'));
});

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	gulp.watch("*.html").on('change', browserSync.reload);
	gulp.watch("js/main.js", ["minifyScripts"]);

});

gulp.task("build", ['minifyScripts'], function() {
	return gulp.src(["js/app.min.js", "index.html", "css/**", "img/**",
					 "fonts/**", "font-awesome/**"], { base: './'})
		   .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
	del(['dist', 'js/app*.js']);
});

gulp.task("default", ["clean"], function() {
	gulp.start('build');
});

