$(document).on('ready',function(){
	$('.images-wrapper').slick();
	$('a.heart0').on('click',function(){
		x = $(this).attr("disabled");
		if (x=="disabled") return;

		$(this).removeClass('heart0');
		$(this).addClass('heart1');
		count = $(this).find('.heart-count');
		count.html(parseInt(count.html())+1);
		$(this).attr("disabled","disabled");
	});
});
