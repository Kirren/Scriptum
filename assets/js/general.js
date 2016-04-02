$(document).ready(function() {
	$('.menu').on('click', 'a', function(){
		$('.menu a').removeClass("active");
		$(this).addClass("active");
	});


	$('.slide-controls').on('click', 'li', function(){
		$("#slide-quotes").css("transform","translateX("+$(this).index() * -580+"px)");
		$("#slide-controls li").removeClass("selected");
		$(this).addClass("selected");
	});
});