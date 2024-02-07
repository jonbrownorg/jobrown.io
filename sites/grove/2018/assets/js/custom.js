$(document).ready(function() {
    "use strict";
    
if( jQuery(".toggle .toggle-title").hasClass('active') ){
 		jQuery(".toggle .toggle-title.active").closest('.toggle').find('.toggle-inner').show();
 	}
 	jQuery(".toggle .toggle-title").click(function(){
 		if( jQuery(this).hasClass('active') ){
 			jQuery(this).removeClass("active").closest('.toggle').find('.toggle-inner').slideUp(200);
 		}
 		else{	jQuery(this).addClass("active").closest('.toggle').find('.toggle-inner').slideDown(200);
 		}
 	});
 	
// Swift Box for New releases for the SUS Page
  
if ($("#swift_box").length) {





$('#swift_box').lc_swift_box({

   theme: 'light',       // <- option 1
   layout: 'horizontal',   // <- option 2
   height: 150,            // <- option 3
   social_share: true,     // <- option 4
   boxed_news: true,
   touchswipe: true,
   elapsed_time: true,
   news_per_time: 5,
   read_more_btn: true,
   read_more_btn_txt: 'New Update Alert!',
   autoplay: true,
   carousel: true,
        src : [
            {
                type: 'rss',
                url: 'http://developer.apple.com/news/releases/rss/releases.rss'
            }
        ]
     });


}


if ($(".swiper-slide").length) {

	$(".typed").typed({
			strings: ['iMac', 'iPad', 'iPhone', 'Apple TV', 'Macbook', 'Macbook Air', 'Macbook Pro', 'iMac Pro', 'Mac Mini', 'Mac Pro'],
			typeSpeed: 30,
			// time before typing starts
			startDelay: 300,
			// backspacing speed
			backSpeed: 20,
			// time before backspacing
			backDelay: 800,
			// loop
			loop: true,
			// false = infinite
			loopCount: false,
			// show cursor
			showCursor: true,
			// character for cursor
			cursorChar: "|",
			// attribute to type (null == text)
			attr: null,
			// either html or text
			contentType: 'html',
			// call when done callback function
			callback: function() {},
			// starting callback function before each string
			preStringTyped: function() {},
			//callback for every typed string
			onStringTyped: function() {},
			// callback for reset
			resetCallback: function() {}
		});
		
	var slider = new Swiper('#hero', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        parallax: true,
        speed: 1000,
        autoplay: 11000,
    });	
}
			
    


//Intialize Active Class on Nav
	
	jQuery(function($) {
     var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
     $('.header-inner ul a').each(function() {
      if (this.href === path) {
       $(this).addClass('active');
      }
     });
    });
    
//Intialize Testimonials

    var testimonials_slider = new Swiper('#testimonials_slider', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        parallax: true,
        loop: true,
        speed: 1000
    });
	
	
//Intialize Subscription Form JS

	jQuery("#submit-form2").click(function(e) {

	var url = jQuery("#mc-embedded-subscribe-form").prop('action'); // the script where you handle the form input.
	jQuery.ajax({
		   type: "GET",
		   url: url,
		   data: jQuery("#mc-embedded-subscribe-form").serialize(), // serializes the form's elements.
		   dataType: "jsonp",
		   beforeSend: function() {
				alertify.logPosition("bottom right");
				alertify.log("Subscribing...");
			},
		   success: function(data)
		   {
				alertify.success("Check your email to confirm subscription!");
				$('#mce-EMAIL').val('');
				$('#mce-EMAIL').trigger('blur');
			},
			error: function(err) {
				alertify.logPosition("bottom right");
				alertify.success("Check your email to confirm subscription!");
				$('#mce-EMAIL').val('');
				$('#mce-EMAIL').trigger('blur');
			}
		 });

	e.preventDefault(); // avoid to execute the actual submit of the form.
	});

//Intialize Logo Slider

if ($(".customer-logos").length) {
	$('.customer-logos').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2500,
			arrows: false,
			dots: false,
			pauseOnHover: false,
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 520,
				settings: {
					slidesToShow: 1
				}
			}]
		});

}
	

});	


