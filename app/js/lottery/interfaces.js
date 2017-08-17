import "babel-polyfill";
import $ from 'jquery';


class Interfaces {
  constructor () {
  	console.info("老子是Interface 执行程序");
  }

  example (issue) {
  	return new Promise(function(resolve,reject){
  		$.ajax({
  		  url:'/get/opencode',
  		  data: {
  		  	issue: issue
  		  },
  		  type: "GET",
  		  dataType:'json',
  		  success (data) {
  		  	resolve(data);
  		  },
  		  fail (error) {
  		  	reject(error);
  		  }
  		});
  	});
  }
  /*获取遗漏的号码*/
  getOmit (issue) {
  	return new Promise(function(resolve,reject){
  		$.ajax({
  		  url:'/get/omit',
  		  data: {
  		  	issue: issue
  		  },
  		  type: "GET",
  		  dataType:'json',
  		  success (data) {
  		  	resolve(data);
  		  },
  		  fail (error) {
  		  	reject(error);
  		  }
  		});
  	});
  }
  /*
  * 获取当前状态
  */
  getState (issue) {
    return new Promise(function(resolve,reject){
  		$.ajax({
  		  url:'/get/state',
  		  data: {
  		  	issue: issue
  		  },
  		  type: "GET",
  		  dataType:'json',
  		  success (data) {
  		  	resolve(data);
  		  },
  		  fail (error) {
  		  	reject(error);
  		  }
  		});
  	});
  }
  /*
  *获取开奖号码
  */
  getOpenCode (issue) {
  	return new Promise(function(resolve,reject){
  		$.ajax({
  		  url:'/get/opencode',
  		  data: {
  		  	issue: issue
  		  },
  		  type: "GET",
  		  dataType:'json',
  		  success (data) {
  		  	resolve(data);
  		  },
  		  fail (error) {
  		  	reject(error);
  		  }
  		});
  	});
  }

}


export default Interfaces;