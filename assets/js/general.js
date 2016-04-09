$(document).ready(function() {
	$('.menu').on('click', 'a', function(){
		$('.menu a').removeClass("active");
		$(this).addClass("active");
	});


	$('.navigation-bar').on('click', 'input', function(event){
		var buttonIndex = $(this).index();
		switch(buttonIndex){
			case 0:
				$(".slider-inner").css({
					"-webkit-transform":"translateX(0%)",
					"-ms-transform":"translateX(0%)",
					"transform":"translateX(0%)"
				});
				break;
			case 1:
				$(".slider-inner").css({
					"-webkit-transform":"translateX(-25%)",
					"-ms-transform":"translateX(-25%)",
					"transform":"translateX(-25%)"
				});
				break;
			case 2:
				$(".slider-inner").css({
					"-webkit-transform":"translateX(-50%)",
					"-ms-transform":"translateX(-50%)",
					"transform":"translateX(-50%)"
				});
				break;
			case 3:
				$(".slider-inner").css({
					"-webkit-transform":"translateX(-75%)",
					"-ms-transform":"translateX(-75%)",
					"transform":"translateX(-75%)"
				});
				break;
		}
	});
});