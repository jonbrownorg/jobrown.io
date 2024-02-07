(function() {
    'use strict';

    // Avoid `console` errors in browsers that lack a console.
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any code in here.
$(function() {
    'use strict';
    
    $('.dropdown-menu a').click(function (e) {
    $('.active').removeClass('active');
	});
	$('.nav-item').click(function (e) {
		$('.active').removeClass('active');
	});

    $.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    }
	});

    /** navbar reference **/
    var $navbar = $(".main-nav"),
        stickyPoint = 90;

    /** Perspective mockups reference **/
    var $perspectiveMockups = $(".perspective-mockups");

    // This element is used as reference for relocation of the mockups on mobile devices.
    // If you remove it please be sure you add another reference element preferably within the same section and/or position the button was.
    // You can change the selector (".learn-more") to one that uniquely identifies the reference element.
    var $topReference = $(".learn-more", ".lightweight-template");

    var setMockupsTop = function() {
        // check if the perspective mockups elements are on the page, if you're not going to use them, you can remove all its references
        if (!$perspectiveMockups.length) return;

        if ($(window).outerWidth() < 768) {
            $perspectiveMockups.css({top: $topReference.offset().top + "px"});
            return;
        }

        $perspectiveMockups.removeAttr("style");
    };

    var navbarSticky = function() {
        if ($(window).scrollTop() >= stickyPoint) {
            $navbar.addClass("navbar-sticky");
        } else {
            $navbar.removeClass("navbar-sticky");
        }
    };

    /**
     * STICKY MENU
     **/
    $(window).on("scroll", navbarSticky);

    navbarSticky();

    /**
     *  NAVBAR SIDE COLLAPSIBLE - On Mobiles
     **/
    $(".navbar-toggler", $navbar).on("click", function() {
        if (!$navbar.is('.st-nav')) $navbar.toggleClass("navbar-expanded");
    });

    /**
     * Blog interaction with buttons: favorite and bookmark
     **/
    $('.card-blog').on({
        click: function (e) {
            e.preventDefault();

            var $el = $(this).removeClass('far').addClass('fas');
            if ($el.hasClass('favorite')) {
                $el.addClass('text-danger');
            } else {
                $el.addClass('text-warning');
            }
        },
        mouseenter: function () {
            $(this).addClass('fas');
        },
        mouseleave: function () {
            $(this).removeClass('fas');
        }
    }, 'i.far');

    /**
     * Position the perspective mockups at the end of the first content section on mobile
     **/
    $perspectiveMockups.removeClass("hidden-preload");
    $(window).on("resize", setMockupsTop);

    setMockupsTop();

    /** PLUGINS INITIALIZATION */
    /* Bellow this, you can remove the plugins you're not going to use.
     * If you do so, remember to remove the script reference within the HTML.
     **/

    /**
     * Handle the login form, once the server has sent a successful response
     **/
    $('.login-form form').on('form.submitted', function(evt, data) {
        window.location.replace('admin/');
    });

    /**
     * typed.js
     **/
    if ($(".typed").length) {
        var typed = new Typed('.typed', {
            strings: ['time', 'money', 'hassle'],
            typeSpeed: 150,
            backDelay: 500,
            backSpeed: 50,
            loop: true
        });
    }

    /**
     * POPUPS
     **/
    (function() {
        $('.modal-popup').each(function () {
            var $element = $(this);

            // Some default to apply for all instances of Modal
            var defaults = {
                removalDelay: 500,
                preloader: false,
                midClick: true,
                callbacks: {
                    beforeOpen: function() {
                        this.st.mainClass = this.st.el.attr('data-effect');
                    }
                }
            };

            // Defaults to use for specific types
            var typeDefaults = {
                image: {
                    closeOnContentClick: true
                },
                gallery: {
                    delegate: 'a',
                    // when gallery is used change the type to 'image'
                    type: 'image',
                    tLoading: 'Loading image #%curr%...',
                    mainClass: 'mfp-with-zoom mfp-img-mobile',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                    },
                    image: {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                    }
                }
            };

            // Load configuration values from data attributes
            var type = $element.data('type') || 'inline';
            var zoomSpeed = $element.data('zoom') || false;
            var focus = $element.data('focus') || false;

            var attributes = {};

            if (zoomSpeed) {
                attributes.zoom = {
                    enabled: true,
                    duration: zoomSpeed
                }
            }

            if (focus) {
                attributes.focus = focus;
            }

            // According to the type, get the JSON configuration for each
            $.each(['image', 'gallery'], function () {
                var attr = $element.data(this) || false;

                if (attr) {
                    typeDefaults[type][this] = attr;
                }

                // remove the values from the markup
                $element.removeAttr("data-" + this);
            });

            var options = $.extend({}, defaults, {
                type: type
            }, typeDefaults[type], attributes);

            $element.magnificPopup(options);
        });

        $(document).on('click', '.modal-popup-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    })();

    /**
     * PRICING TABLES
     **/
    $(".pricing-table-basis").on("change", 'input[name="pricing-value"]', function() {
        console.log(this.value);
        var period = this.value;
        $(".price").addClass("trans");
		$(".pricedesc1").toggleText('Includes simple but powerful support for up startups with one location and a small team.', 'A great small transitionary plan to cover the implementation of a small project or for staff augmentation.');
		$(".pricedesc2").toggleText('For cutting edge companies looking to stay competitive in the market and to grow with the technology.', 'A medium transition plan to cover an implementation of a key system or to manage an internal restructure.');
		$(".pricedesc3").toggleText('Everything you can get from a our business solution and more to keep your business on track for success.', 'A large plan to help a company prepare for an acquisition or a repositioning of their systems.');
		
		$(".monitored1").toggleText('1 Monitored System', 'Project Management');
		$(".locations1").toggleText('1 Location', 'Configuration & Deployment');
		$(".support1").toggleText('8/5 Remote support', 'Documentation');
		$(".strategic1").toggleText('Network Management', 'vCIO Strategy');
		
		$(".monitored2").toggleText('3 Monitored Systems', 'Project Management');
		$(".locations2").toggleText('Multiple Locations', 'Configuration & Deployment');
		$(".support2").toggleText('8/5 Remote support', 'Documentation');
		$(".strategic2").toggleText('Network Management', 'vCIO Strategy');
		
		$(".monitored3").toggleText('4 Monitored Systems', 'Project Management');
		$(".locations3").toggleText('Multiple Locations', 'Configuration & Deployment');
		$(".support3").toggleText('8/7 Remote support', 'Documentation');
		$(".strategic3").toggleText('Network Management', 'vCIO Strategy');
		
		$(".transitional").toggleText('All on-site hours are now remote hours in the wake of COVID-19', 'Transitional Plans are in addition to not a replacement for our Annual plans.');
		
		$(".pricingtype1").toggleText('Starter', 'Small Project');
		$(".pricingtype2").toggleText('Business', 'Medium Project');
		$(".pricingtype3").toggleText('Enterprise', 'Large Transition');
		
        $(".odometer").each(function() {
            this.innerHTML = $(this).data(period + "-price");
        });
    });
});