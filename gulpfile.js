var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglifyjs'),
  cssnano = require('gulp-cssnano'),
  rename = require('gulp-rename'),
  del = require('del'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  cache = require('gulp-cache'),
  autoprefixer = require('gulp-autoprefixer'),
  upmodul = require("gulp-update-modul"),
  browserSync = require('browser-sync');

gulp.task('sass', function() { // Создаем таск "sass"
  return gulp.src(['app/sass/**/*.sass', 'app/sass/**/*.scss']) // Берем источник
    .pipe(sass({
      outputStyle: 'extended'
    }).on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('scripts', function() {
  return gulp.src([
      'app/libs/jquery/dist/jquery.min.js',
      'app/libs/vue/vue.js',
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js/'));
});

gulp.task('css-libs', ['sass'], function() {
  return gulp.src('app/css/libs.css')
    .pipe(cssnano())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false,
		open: false
  });
});

gulp.task('clean', function() {
  return del.sync('dist');
});

gulp.task('clear', function() {
  return cache.clearAll();
});

gulp.task('img', function() {
  return gulp.src('app/img/**/*')
    .pipe(cache(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      une: [pngquant()]
    })))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('fonts', function() { // Создаем таск "sass"
  return gulp.src(['app/fonts/**/*'])
    .pipe(gulp.dest('app/fonts'))
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
  gulp.start('update-modul');
  gulp.watch(['app/sass/**/*.sass', 'app/sass/**/*.scss'], ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

//update-modul
gulp.task('update-modul', function() {
  gulp.src('package.json')
    .pipe(upmodul('latest', 'true')); //update all modules latest version.
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts', 'fonts'], function() {

  var buildCss = gulp.src([
      'app/css/main.css',
      'app/css/libs.min.css',
    ])
    .pipe(gulp.dest('dist/css'));

  var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));

  var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'));

  var buildTemplates = gulp.src('app/templates/*.html')
    .pipe(gulp.dest('dist/templates'));

  var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));

});
