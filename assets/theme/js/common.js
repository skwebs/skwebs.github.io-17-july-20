$(()=>{		
	$(window).scroll(function() {
		var scrollTop=$(window).scrollTop()
		if(scrollTop > 500){
		    $("#top").show(300).removeClass("fadeOutLeftBig slower").addClass("animated zoomInLeft");
		}else{
			$("#top").removeClass("zoomInLeft").addClass("fadeOutLeftBig slower").hide(1000);
		}
	});
		
	$("#top").click(function(e) {
	    e.preventDefault();
	    $('body,html').animate({scrollTop: 0},600)
	});
	
	
	$(".slider__one_item").backstretch("./assets/img/web/laptop-typing.jpg")
	
	
	
	
});



