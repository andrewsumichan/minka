
$(document).ready(function(e){

	$("#main-slider ul").lightSlider({
		item:1,
		pause: 5000,
		loop: true,
		auto: true,
		mode: "fade",
		pager:false,
		pauseOnHover: true,
		freeMove : false,
		enableDrag : false,
		enableTouch : false
	});
	
	
	$(".lightslider").lightSlider({
		item:1,
		pause: 5000,
		loop: true,
		auto: true,
		mode: "fade",
		pager:false,
		pauseOnHover: true,
		freeMove : false,
		enableDrag : false,
		enableTouch : false	
	});
	
	$("div.toggle").click(function(e){
		e.preventDefault();
		var target = $(this).attr('data-target');
		$("#"+target).slideToggle(250);
	});

	$(".services ul").lightSlider({
		item:5, 
		auto:true,
		pager:false,
		slideMargin:0,
		loop:true,
		pauseOnHover: true,
		pause:6000,
		responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:0,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]

	});

	$(window).resize(function(){
		if($(this).width() > 1200){
			$("#main-menu").removeAttr("style");
		}

	});
	
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
		var secondPage = $("#second-page").offset();
		var value = secondPage.top - 90;
	    if (scroll >= value) {
	        $("#main-nav").addClass("scrolling");
	    } else {
	        $("#main-nav").removeClass("scrolling");
	    }
	});
	
	$('a').smoothScroll();
	
	if($(".imageGallery").length > 0){
		$(".imageGallery ul").lightSlider({
			item:5, 
			auto:true,
			pager:false,
			slideMargin:0,
			loop:true,
			pauseOnHover: true,
			pause:6000,
			responsive : [
				{
					breakpoint:800,
					settings: {
						item:3,
						slideMove:1,
						slideMargin:0,
					  }
				},
				{
					breakpoint:480,
					settings: {
						item:2,
						slideMove:1
					  }
				}
			]
		});
	}
});

