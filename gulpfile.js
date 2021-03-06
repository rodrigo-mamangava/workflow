var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');



var coffeeSources = ['components/coffee/tagline.coffee'];

var jsSources = [
	'components/scripts/alert.js',
	'components/scripts/tagline.js',
	'components/scripts/template.js',
	'components/scripts/test.js',
];


gulp.task('coffee', function (){
	gulp.src(coffeeSources)
		.pipe(coffee({bare: true})
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))

});

gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js'))
});

