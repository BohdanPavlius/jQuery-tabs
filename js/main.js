// $(document).on('click', '.gm-nav__item', function(){

// 	$(this).addClass('active');
// 	$(this).siblings('.gm-nav__item').removeClass('active');
	
// });

$(document).ready(function() {
	
	$('.gm-nav__item').on('click', function(event){
		event.preventDefault();
	$(this).addClass('active');
	$(this).siblings('.gm-nav__item').removeClass('active');
		var contentAttr = $(this).find('a').attr('href');
		$('.gm-content').not(contentAttr).css({'display' : 'none'});
		$(contentAttr).show();
	});

	  $('#rating-bar').circleProgress({
		startAngle: 4.75,
		// lineCap: "square",
		// emptyFill: rgba(98, 102, 129, 1),
	    value: 0.65,
	    thickness: 4,
	    size: 75,
	    emptyFill: "#787c9b",
	    fill: {
	      gradient: ["#01d5bb", "#13e190"]
	    }
  });


});

$(window).on('load', function(){
	$('.gm-prise').prepend('<span class="sale">20% OFF!</span>');
})

;(function($) {
      $('#star-rating').barrating({
        theme: 'fontawesome-stars'
      });
})(jQuery);

