$(document).ready(function() {
    'use strict';






// Homepage Social JS

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
	
	
$(window).scroll(function() {
      if ($(window).scrollTop() >= ($(document).height() - $(window).height())) {
        $('.popup').css( "left", "20px" )
      }else{
        $('.popup').css( "left", "-380px" ); 
    }
  });
  
  $('.close').click(function(){
    $('.popup').hide();
  });
  

// Swift Box for New releases for the SUS Page
  
if ($("#swift_box").length) {




$.getJSON('/sites/grove/2017/assets/data/apps.json', function(data){ 

   var number = data;
   var html8 = '';
   html8 += '<p><ul style="list-style: none; font-size: 20px; font-weight: lighter;">'
   
   
   
   $.each(data, function (key, data) {
   
   		
   
		$.each(data, function (index, data) {
			
			var str1 = data.title;
			var str2 = "Multi-Lingual Voices";
			var str3 = "Dictation Language Update";
			var str4 = "Voice Update";
			var str5 = "Incompatible Kernel";
			var str6 = "SpeechRecognition";
			var str7 = "iTunes";

			if(str1.indexOf(str2) == -1){
				if(str1.indexOf(str3) == -1){
					if(str1.indexOf(str4) == -1){
						if(str1.indexOf(str5) == -1){
							if(str1.indexOf(str6) == -1){
								if(str1.indexOf(str7) == -1){
			html8 += '<li><img  width="32" src="/sites/grove/2017/assets/images/icons/modified/package.png">		'+data.title+'  </li>';
								}
							}
						}
					}
				}
			}
			
		})
	})
	html8 += '</ul"></p>'
	
	function format(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
	}

	var today = new Date();
	var dateString = format(today);
	var count = 689;
		
	$('#count').html(count);
	$('#currdate').html(dateString);
	$('.col-3').html(html8);
	
});


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


//Homepage Initialize Slider

    var slider = new Swiper('#hero', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        parallax: true,
        speed: 1000,
    });


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

	jQuery("#mc-embedded-subscribe-form").submit(function(e) {

	var url = jQuery(this).prop('action'); // the script where you handle the form input.
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
			},
			error: function(err) {
				alertify.logPosition("bottom right");
				alertify.success("Check your email to confirm subscription!");
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


