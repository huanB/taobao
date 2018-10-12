//1、项目中有哪些类：轮播图

class Slider{
	constructor(boxDom,width,height,imgs,btnSize,btnColor,btnHighColor, timeSpace){
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
		
		this.createUI();
		this.createEvent();
		this.changeImg();
	}
	
	//创建UI
	createUI(){
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
		
	createEvent(){
		let obj=this;//this是轮播图对象
		
		//2、鼠标进入box停止变换
		this.boxDom.onmouseover=function(){
			obj.stopChange();
		};
		//3、鼠标离开box继续变换
		this.boxDom.onmouseout = function(){
			obj.changeImg();
		};
		//4、鼠标点击li跳转到对应的图片
		let lis = this.boxDom.getElementsByTagName("li");
		for(var i=0;i<lis.length;i++){		
			lis[i].setAttribute("index",i);
			//1、给onclick属性赋值的；
			lis[i].onclick=function(){
				//this是事件源(li)
				obj.goImg(this.getAttribute("index"));			
			}
		}
	}	
		//1、变换图片（同时变换豆豆的颜色）
	changeImg(){
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
	showImg(outOrd,inOrd){
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
	showLi(transOrd){
		let lis = this.boxDom.getElementsByTagName("li");
		//把所有li的背景颜色变成gray
		for(let i=0;i<lis.length;i++){
			lis[i].style.backgroundColor =this.btnColor;
		}
		//把当前li的背景颜色变成red；
		lis[transOrd].style.backgroundColor = this.btnHighColor;	
	}
			
		//2、停止变换
	stopChange(){
		window.clearInterval(this.sliderTimer);
	}
	
		//3、跳转到指定的图片
	goImg(transOrd){
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
