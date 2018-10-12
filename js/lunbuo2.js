

function c(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	

////初始化界面 
//function initUI(){
//	let imgs = $(".lun1");
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
//		$(".lun1")[outOrd].style.left = left1+"px";
//		$(".lun1")[inOrd].style.left =(left1+520)+"px"		
//	},20);
//}
//
////把指定的li为红色
//function showLi(transOrd){
//	let lis = $(".ul2");
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
//	$(".buo").onmouseover = stopChange;
//	//3、鼠标离开box继续变换
//	$(".buo").onmouseout = changeImg;
//	//4、鼠标点击li跳转到对应的图片	
//	let lis = $(".ul2");
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