
class Timer {
  /*
  *end: 结束时间
  *update:  
  *handle:
  */
  conuntdown(end, update, handle) {
    const now = new Date().getTime();
    const self = this;
    let minus = end - now;
    Timer.count ++;
    if(Timer.count > 20) {
      return;
    }
    if ( minus < 0 ) {
      handle.call(self);
    } else {
      const timeDay = 1000*60*60*24;
      const timeHour = 1000*60*60;
      const timeMinute = 1000*60;
      const timeSecond = 1000;
      var count = minus;
      let day = Math.floor(minus/timeDay); 
      count -= day * timeDay;
      let hour = Math.floor(count/timeHour);
      count -= hour * timeHour;
      let minute = Math.floor(count/timeMinute);
      count -= minute * timeMinute;
      let second = Math.floor(count/timeSecond);

      let result = `<em>${day}天</em><em>${hour}时</em><em>${minute}分</em><em>${second}秒</em>`;

      
      update.call(self, result);
      
      setTimeout(function() {
        self.conuntdown(end, update, handle);
      }, 1000);
      
    }
  }
}

Timer.count = 0;




export default Timer;