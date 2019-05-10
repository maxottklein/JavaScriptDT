const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/* 

-- TOP LEVEL FUNCTION -- 

gulp.task - define tasks
gulp.src - point to the files to use
gulp.dest - point to the folder to output
gulp.watch - watch files and folders for changes


*/

// Logs Message

gulp.task('message', async function(){
	return console.log('Gulp is running');
});



//Cope all HTML Files

gulp.task('copyHTML', async function(){
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
});


// Optimize Images 

gulp.task('imageMin', () =>
	gulp.src('src/Images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/Images'))
);

// Minify JS

// gulp.task('minify', async function(){
// 	gulp.src('src/js/*.js')
// 		.pipe(uglify())
// 		.pipe(gulp.dest('dist/js'));
// });


// Scripts

gulp.task('scripts', async function(){
  gulp.src('src/js/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});


// Compile Sass

gulp.task('sass', async function(){
  gulp.src('src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css'));
});



gulp.task('default', ['message', 'copyHTML', 'imageMin', 'sass', 'scripts']);


gulp.task('watch', async function(){
  gulp.watch('src/js/*.js', 'scripts');
  gulp.watch('src/images/*', 'imageMin');
  gulp.watch('src/sass/*.scss', 'sass');
  gulp.watch('src/*.html', 'copyHTML');
});


