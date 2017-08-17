import yargs from 'yargs';//对于命令行参数的处理

//区分开发环境和线上环境 gulp -production -production就是选项部分
const args = yargs.option('production', {
  boolean: true,
  default: false,
  describe: 'min all scripts'
}).option('watch', {//是否监听文件变化
  boolean: true,
  default: false,
  describe:"watch the file change"
}).option('verbose', {//详细输出命令行中的日志
  boolean: true,
  default: false,
  describe:"log"
}).option('sourcemaps',{//文件映射
  boolean: true,
  default: false,
  describe: "force the creation of sroucemaps"
}).option('port', {
  string: true,
  default: '8080',
  describe: "server port"
}).argv;

export default args;

