////function $(str){//#box .cls  p
////	if(str.charAt(0)=="#"){
////		return document.getElementById(str.substring(1));
////	}else if(str.charAt(0)=="."){
////		return document.getElementsByClassName(str.substring(1));
////	}else{
////		return document.getElementsByTagName(str);
////	}
////}
//
//
////初始化界面 
//function initUI(){
//	let imgs = $(".luns");
//	for(let i=0;i<imgs.length;i++){
//		imgs[i].style.left = "520px";
//	}
//	imgs[0].style.left="0px";
//	$("#lunbuo").style.overflow="hidden"; 
//}
//
//let myTimer = null;
//let ord = 0;//记录当前图片的序号
//
////把指定的图片(inOrd)显示出来(某张图片(outOrd)滑出，某张图片(inOrd)滑入)
//function showImg(outOrd,inOrd){
//	//1、滑入滑出前的准备工作；
//	$(".luns")[inOrd].style.left = "520px";
//	
//	//2、开始滑入滑出
//	let left1 = 0;
//	let myTimer = setInterval(function(){
//		//1、改变数据
//		left1 = left1-10;
//		//2、处理边界
//		
//		if(left1<=-520){
//			left1=-520;
//			window.clearInterval(myTimer);
//		}
//		
//		//3、改变外观
//		$(".luns")[outOrd].style.left = left1+"px";
//		$(".luns")[inOrd].style.left =(left1+520)+"px"		
//	},20);
//}
//
////把指定的li为红色
//function showLi(transOrd){
//	let lis = $(".ul1");
//	//把所有li的背景颜色变成gray
//	for(let i=0;i<lis.length;i++){
////		alert(lis.length);
//		lis[i].style.backgroundColor ="gray";
//	}
//	//把当前li的背景颜色变成red；
//	lis[transOrd].style.backgroundColor = "red";	
//}
//	
////1、变换图片（同时变换豆豆的颜色）
//function changeImg(){
//	myTimer = setInterval(function(){
//		//1、改变数据
//		let outOrd = ord;//记录出去的那张图片的序号
//		ord++;
//		
//		//2、处理边界
//		if(ord>3){
//			ord=0;
//		}	
//		
//		//3、改变外观
//		//1）、显示指定的图片
//		showImg(outOrd,ord);
//		//2)、改变指定豆豆的颜色
//		showLi(ord);
//	},2000);
//}
//
////2、停止变换
//function stopChange(){
//	window.clearInterval(myTimer);
//}
//
////3、跳转到指定的图片
//function goImg(transOrd){
//	//1、停止定时器
//	window.clearInterval(myTimer);
//	let outOrd = ord;
//	ord = transOrd;
//	
//	//2、改变外观
//	//1）、显示指定的图片
//	showImg(outOrd,ord);	
//	//2)、改变指定豆豆的颜色
//	showLi(ord);	
//}
//
//window.onload = function(){
//	initUI();//初始化界面
//	//1、让图片开始自动变换
//	changeImg();
//	//2、鼠标进入box停止变换
//	$("#lunbuo").onmouseover = stopChange;
//	//3、鼠标离开box继续变换
//	$("#lunbuo").onmouseout = changeImg;
//	//4、鼠标点击li跳转到对应的图片
//	let lis = $(".ul1");
//	for(var i=0;i<lis.length;i++){		
//		lis[i].setAttribute("index",i);
//		//1、给onclick属性赋值的；
//		lis[i].onclick = function(){
//			goImg(this.getAttribute("index"));			
//		}
//	}
//	// //5、超链
//	// let imgs = $("img");
//	// for(let i=0;i<imgs.length;i++){
//	// 	imgs[i].onclick = function(){
//	// 		location.href=arr[i];
//	// 	}
//	// }
//}
//




function Slider(boxDom,width,height,imgs,btnSize,btnColor,btnHighColor, timeSpace){
	this.boxDom = boxDom;//轮播图所在容器
	this.width = width;
	this.height = height;
	this.imgs=imgs;//图片路径数组
	this.ord = 0;//轮播图当前的图片序号	
	this.timeSpace = timeSpace
	
	this.sliderTimer = null;
	this.btnSize = btnSize;//每个豆豆的尺寸
	this.btnColor = btnColor;//每个豆豆的原始颜色
	this.btnHighColor = btnHighColor;//每个豆豆的高亮颜色
	
	//创建UI
	this.createUI = function(){
		this.boxDom.style.position="relative";
		this.boxDom.style.overflow="hidden";
		//1、创建所有的图片
		for(let i=0;i<this.imgs.length;i++){
			let imgDom = document.createElement("img");
			imgDom.src = this.imgs[i];
			imgDom.style.cssText = "position:absolute;top:0px;z-index:0;";
			imgDom.style.left = this.width+"px";
			imgDom.style.width=this.width+"px";
			imgDom.style.height=this.height+"px";
			this.boxDom.appendChild(imgDom);
		}		
		this.boxDom.children[0].style.left="0px";
		
		//2、创建豆豆
		let ulDom = document.createElement("ul");
		ulDom.style.cssText="list-style:none;position:absolute;right:20px;bottom:20px;z-index:2;";
		this.boxDom.appendChild(ulDom);
		for(let i=0;i<this.imgs.length;i++){
			let liDom = document.createElement("li");
			liDom.style.cssText= "float:left;margin-left:20px;border-radius:50%;";
			liDom.style.width= this.btnSize+"px";
			liDom.style.height= this.btnSize+"px";
			liDom.style.backgroundColor= this.btnColor;
			ulDom.appendChild(liDom);
		}
		ulDom.children[0].style.backgroundColor = this.btnHighColor;
	}
	
	this.createEvent=function(){
		let obj=this;//this是轮播图对象
		
		//2、鼠标进入box停止变换
		this.boxDom.onmouseover = function(){
			obj.stopChange();
		};
		//3、鼠标离开box继续变换
		this.boxDom.onmouseout =  function(){
			obj.changeImg();
		};
		//4、鼠标点击li跳转到对应的图片
		let lis = this.boxDom.getElementsByTagName("li");
		for(var i=0;i<lis.length;i++){		
			lis[i].setAttribute("index",i);
			//1、给onclick属性赋值的；
			lis[i].onclick = function(){
				//this是事件源(li)
				obj.goImg(this.getAttribute("index"));			
			}
		}
	}
	
	
	//1、变换图片（同时变换豆豆的颜色）
	this.changeImg=function(){
		this.sliderTimer = setInterval(()=>{
			//1、改变数据
			let outOrd = this.ord;//记录出去的那张图片的序号
			this.ord++;
			
			//2、处理边界
			if(this.ord>this.imgs.length-1){
				this.ord=0;
			}	
			
			//3、改变外观
			//1）、显示指定的图片
			this.showImg(outOrd,this.ord);
			//2)、改变指定豆豆的颜色
			this.showLi(this.ord);
		},this.timeSpace);
	}
	
	//把指定的图片(inOrd)显示出来(某张图片(outOrd)滑出，某张图片(inOrd)滑入)
	this.showImg=function(outOrd,inOrd){
		//1、滑入滑出前的准备工作；
		let imgDoms =  this.boxDom.getElementsByTagName("img");
		imgDoms[inOrd].style.left = this.width+"px";
		
		//2、开始滑入滑出
		let left1 = 0;
		let myTimer = setInterval(()=>{
			//1、改变数据
			left1 = left1-10;
			//2、处理边界
			
			if(left1<=-1*this.width){
				left1=-1*this.width;
				window.clearInterval(myTimer);
			}
			
			//3、改变外观
			imgDoms[outOrd].style.left = left1+"px";
			imgDoms[inOrd].style.left =(left1+this.width)+"px"		
		},20);
	}

	//把指定的li为红色
	this.showLi=function(transOrd){
		let lis = this.boxDom.getElementsByTagName("li");
		//把所有li的背景颜色变成gray
		for(let i=0;i<lis.length;i++){
			lis[i].style.backgroundColor =this.btnColor;
		}
		//把当前li的背景颜色变成red；
		lis[transOrd].style.backgroundColor = this.btnHighColor;	
	}
		
	//2、停止变换
	this.stopChange=function(){
		window.clearInterval(this.sliderTimer);
	}

	//3、跳转到指定的图片
	this.goImg=function(transOrd){
		//1、停止定时器
		window.clearInterval(this.sliderTimer);
		let outOrd = this.ord;
		this.ord = transOrd;
		
		//2、改变外观
		//1）、显示指定的图片
		this.showImg(outOrd,this.ord);	
		//2)、改变指定豆豆的颜色
		this.showLi(this.ord);	
	}
}
