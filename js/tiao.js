window.onscroll=function(){
	var scrollgo=document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollgo<=150){
		$(".heng").css({
			"display":"none"
		})
	}if(scrollgo>200){
		$(".heng").css({
			"display":"block"
		})
	}
}
function tou(){
	$(".heng").css({
		"zIndex":"100",
		"display":"block",
		"position":"fixed",
		"top":"0px",
		"left":"0px"
	});
}
