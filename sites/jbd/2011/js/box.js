$(document).ready(function() {
			$("a.zoom").fancybox();

			$("a.zoom1").fancybox({
				'overlayOpacity'	:	0.7,
				'overlayColor'		:	'#FFF'
			});

			$("a.zoom2").fancybox({
				'overlayShow'			: true,
				'zoomSpeedIn'			: 600,
				'zoomSpeedOut'			: 500,
				'easingIn'			: 'easeOutBack',
				'easingOut'			: 'easeInBack'
			});
			$("a.group").fancybox({
				'hideOnContentClick': false,
				'frameWidth' : 850,
				'frameHeight' : 420
			});


			$("a.learnmore2").fancybox({
				'hideOnContentClick': false,
				'frameWidth' : 850,
				'frameHeight' : 420
			});


			$("a.button").fancybox({
				'hideOnContentClick': false,
				'frameWidth' : 850,
				'frameHeight' : 420
			});


			$("a.button2").fancybox({
				'hideOnContentClick': false,
				'frameWidth' : 850,
				'frameHeight' : 420
			});
		});


