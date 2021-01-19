$(document).ready(function(){
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});



function ibg(){
	$.each($('.ibg'), function(index, val) { 
		if($(this).find('img').length>0){ 
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")'); 
		} 
	});

}

ibg();


$(document).ready(function(){

	$('.sliderbig').slick({
		arrows:false,
		dots:true,
		fade:true,
		slidesToShow:1,
		slidesToScroll:1,
		speed:1000,
		autoplay:true,
		autoplaySpeed:1500,
		infinite:true,
		
		
	});

	$('.slider').slick({
		arrows:false,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:2,
		slidesToScroll:2,
		speed:1000,
		easing:'ease',
		infinite:true,
		initialSlide:0,
		autoplay:false,
		autoplaySpeed:300,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		draggable:true,
		swipe:true,
		touchThreshold:5,
		touchMove:true,
		waitForAnimate:false,
		centerMode:false,
		variableWidth:false,
		rows:1,
		slidesPerRow:1,
		vertical:false,
		verticalSwiping:false,
		responsive:[
		{
			breakpoint: 768,
			settings:{
				slidesToShow: 1,
				arrows:false,
			}
			breakpoint: 440,
			settings:{
				
			}
		 }
		]

	});


		$('.sliderauthor').slick({
			arrows:false,
			dots:true,
			adaptiveHeight:true,
			slidesToShow:1,
			slidesToScroll:1,
			centerMode:false,
			asNavFor:".slidersay",
		});

		$('.slidersay').slick({
			asNavFor:".sliderauthor",
			responsive:[
		{
			breakpoint: 768,
			settings:{
				arrows:false,
			}
		 }
		]
		});
});







