
// 向下滑动和向上滑动事件
$(".child1").hover(function(){
	//当鼠标移动到.child时候，执行下面的事件
	$(".xiaomi-child").stop(true).css("z-index","2").slideDown(200);
	},function(){
	$(".xiaomi-child").stop(true).css("z-index","1").delay(1200).slideUp(200);
});
$(".child2").hover(function(){
	$(".hongmi-child").stop(true).css("z-index","2").slideDown(200);
	},function(){
	$(".hongmi-child").stop(true).css("z-index","1").delay(1200).slideUp(200);
});
$(".child3").hover(function(){
	$(".pingban-child").stop(true).css("z-index","2").slideDown(200);
	},function(){
	$(".pingban-child").stop(true).css("z-index","1").delay(1200).slideUp(200);
});
$(".child4").hover(function(){
	$(".dianshi-child").stop(true).css("z-index","2").slideDown(200);
	},function(){
	$(".dianshi-child").stop(true).css("z-index","1").delay(1200).slideUp(200);
});
$(".child5").hover(function(){
	$(".hezi-child").stop(true).css("z-index","2").slideDown(200);
	},function(){
	$(".hezi-child").stop(true).css("z-index","1").delay(1200).slideUp(200);
});
$(".child6").hover(function(){
	$(".luyouqi-child").stop(true).css("z-index","2").slideDown(200);
	},function(){
	$(".luyouqi-child").stop(true).css("z-index","1").delay(1200).slideUp(200);
});
$(".child7").hover(function(){
	$(".zhinengyingjian-child").stop(true).css("z-index","2").slideDown(200);
	},function(){
	$(".zhinengyingjian-child").stop(true).css("z-index","1").delay(1200).slideUp(200);
});

// 向右滑动和向左滑动事件
$(".right1").hover(function(){
	$(".children1").show();$(this).css("background","rgb(255,103,0)");
	},function(){
	$(".children1").hide();$(this).css("background","rgb(80,82,84)");
});
$(".right2").hover(function(){
	$(".children2").show();$(this).css("background","rgb(255,103,0)");
	},function(){
	$(".children2").hide();$(this).css("background","rgb(80,82,84)");
});
$(".right3").hover(function(){
	$(".children3").show();$(this).css("background","rgb(255,103,0)");
	},function(){
	$(".children3").hide();$(this).css("background","rgb(80,82,84)");
});
$(".right4").hover(function(){
	$(".children4").show();$(this).css("background","rgb(255,103,0)");
	},function(){
	$(".children4").hide();$(this).css("background","rgb(80,82,84)");
});
$(".right5").hover(function(){
	$(".children5").show();$(this).css("background","rgb(255,103,0)");
	},function(){
	$(".children5").hide();$(this).css("background","rgb(80,82,84)");
});
$(".right6").hover(function(){
	$(".children6").show();$(this).css("background","rgb(255,103,0)");
	},function(){
	$(".children6").hide();$(this).css("background","rgb(80,82,84)");
});
$(".right7").hover(function(){
	$(".children7").show();$(this).css("background","rgb(255,103,0)");
	},function(){
	$(".children7").hide();$(this).css("background","rgb(80,82,84)");
});
$(".right8").hover(function(){
	$(".children8").show();$(this).css("background","rgb(255,103,0)");
	},function(){
	$(".children8").hide();$(this).css("background","rgb(80,82,84)");
});
$(".right9").hover(function(){
	$(".children9").show();$(this).css("background","rgb(255,103,0)");
	},function(){
	$(".children9").hide();$(this).css("background","rgb(80,82,84)");
});
$(".right10").hover(function(){
	$(".children10").show();$(this).css("background","rgb(255,103,0)");
	},function(){
	$(".children10").hide();$(this).css("background","rgb(80,82,84)");
});

 // banner图
 $(".list li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	var a=$(this).index();
	$(".pic img").eq(a).stop(true).fadeIn(100).siblings().hide();

	var bgColor=$(".pic img").eq(a).attr("bgc");
	$("#big").css("background",bgColor);
});


