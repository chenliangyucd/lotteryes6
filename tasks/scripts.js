import gulp from 'gulp';
import gulpIf from 'gulp-if';
import concact from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import liveReload from 'gulp-livereload';
import plumber from 'gulp-plumber';//管道拼接
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log, colors} from 'gulp-util';
import args from './util/args';

gulp.task("scripts", () => {
  return gulp.src('./app/js/index.js')
  .pipe(plumber({
    errorHandle: function () {
      
    }
  }))
  .pipe(named())
  .pipe(gulpWebpack({
  	module: {
      loaders:[{
        test: /\.js$/,
        loader: 'babel'    
      }]
  	}
  }, null, (err, stats) => {


  }))
  .pipe(gulp.dest('./server/public/js'))
  .pipe(rename({
  	basename: 'cp',
    extname: 'min.js'
  }))
  .pipe(uglify({compress: {properties: false}, output: {'quote_keys': true}}))
  .pipe(gulp.dest('./server/public/js'))
  .pipe(gulpIf(args.watch, liveReload()));
});