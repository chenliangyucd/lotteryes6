import Timer from './lottery/timer';
import Interfaces from './lottery/interfaces';
import Calculate from './lottery/calculate';
import $ from 'jquery';
/*
*其实视频中各个模块只是提供方法，但是没有属性，卧槽这相当有问题。就因该是各个模块有自己的属性
*
*/


class Lottery {
  constructor () {
  	//倒计时模块
  	this.timer = new Timer();
  	//接口模块
  	this.interfaces = new Interfaces();
  	//计算模块	
  	this.calculate = new Calculate();

  	//所选的num的求
    this.chosenums = new Set();
    //购物车中的号码
    this.shoplists = [];
    
    this.playRules = new Map();

    this.initData();

    console.info(this.playRules);
    $(function() {
      this.initEvent();
    }.bind(this))
  }
  
  initData () {
  	this.playRules.set("p2", {
  	  nums: 2,
  	  tip: '从01～11中任选2个或多个号码，所选号码与开奖号码任意两个号码相同，即中奖<em class="red">6</em>元'
  	}).set("p3", {
  	  nums: 3,
  	  tip: '从01～11中任选3个或多个号码，所选号码与开奖号码任意三个号码相同，即中奖<em class="red">19</em>元'
  	}).set("p4", {
  	  nums: 4,
  	  tip: '从01～11中任选4个或多个号码，所选号码与开奖号码任意四个号码相同，即中奖<em class="red">78</em>元'
  	}).set("p5", {
  	  nums: 5,
  	  tip: '从01～11中任选5个或多个号码，所选号码与开奖号码任意五个号码相同，即中奖<em class="red">540</em>元'
  	}).set("p6", {
  	  nums: 6,
  	  tip: '从01～11中任选6个或多个号码，所选号码与开奖号码任意六个号码相同，即中奖<em class="red">90</em>元'
  	}).set("p7", {
  	  nums: 7,
  	  tip: '从01～11中任选7个或多个号码，所选号码与开奖号码任意七个号码相同，即中奖<em class="red">26</em>元'
  	}).set("p8", {
  	  nums: 8,
  	  tip: '从01～11中任选8个或多个号码，所选号码与开奖号码任意八个号码相同，即中奖<em class="red">9</em>元'
  	});


  }
  
  

  //初始化注册各种事件
  initEvent () {
  	console.info("execute initevent");
  	$("#plays").on("click", "li", function (e) {
  	  console.info(this);
      console.info(e.currentTarget);
      console.info(e.target);
  	});

  }
}

new Lottery();

/*
let timer = new Timer();
timer.conuntdown(new Date(2017,7,1).getTime(), (html) => {
  console.log("执行html");
  console.log(html);
}, () => {
  console.log('定时器结束');	
});

let interfaces = new Interfaces();
*/