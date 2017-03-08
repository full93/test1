
$(".modol_img").hover(function(){
	$(this).children("img").addClass("back");
	$(this) .find(".txt p").stop().show();
	},function(){
	$(this).children("img").removeClass("back");
	$(this) .find(".txt p").stop().hide();
		})
	
    $(".modol_img2").hover(function(){
	$(this).children("img").addClass("bule");
	$(this) .find(".txt2 p").stop().show();
	},function(){
	$(this).children("img").removeClass("bule");
	$(this) .find(".txt2 p").stop().hide();
		})
    

