import gulp from 'gulp';
import gulpIf from 'gulp-if';
import liveReload from 'gulp-livereload';
import args from './util/args';


/*可以不止这么简单*/
gulp.task('css', () => {
  return gulp.src("app/**/*.css")
  	.pipe(gulp.dest("server/public"))
  	.pipe(gulpIf(args.watch, liveReload()))
});