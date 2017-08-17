import gulp from 'gulp';
import gulpIf from 'gulp-if';
import liveServer from 'gulp-live-server';//在命令行执行命令
import args from './util/args';

gulp.task("server", (cb) => {
  if (!args.watch) return cb();
  var server = liveServer.new(['--harmony', 'server/bin/www']);
  server.start();

  gulp.watch(["server/public/**/*.js", "server/views/**/*.ejs"], function(file) {
    server.notify.apply(server,[file]);      
  });

  gulp.watch(["server/routes/**/*.js", "server/app.js"], function() {
    server.start.bind(server)();
  });    
});
