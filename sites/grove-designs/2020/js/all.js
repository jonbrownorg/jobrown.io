
/* File: common-script.js */
'use strict';

(function($) {
    $(function() {
        /**
         * Swiper Initialization
         **/
        $('.swiper-container').each(function() {

            var $this = $(this);
            var boolData = {
                breakpoints: $this.data('sw-breakpoints'),
                active_selector: $this.data('sw-active-selector'),
                cover_flow: $this.data('sw-coverflow'),
                auto_play: $this.data('sw-autoplay'),
                loop: $this.data('sw-loop'),
                centered: $this.data('sw-centered-slides'),
                pagination: $this.data('sw-pagination'),
                nav_arrows: $this.data('sw-nav-arrows'),
                dynamicBullets: $this.data('sw-dynamic-bullets')
            };

            var breakPoints = boolData.breakpoints || false;
            var auto_play = boolData.auto_play !== undefined ? boolData.auto_play : false;
            var speed = $this.data('sw-speed') || 1100;
            var effect = $this.data('sw-effect') || "slide";
            var showItems = $this.data('sw-show-items') || 1;
            var loop = boolData.loop !== undefined ? boolData.loop : true;
            var centered = boolData.centered !== undefined ? boolData.centered : true;
            var dynamicBullets = boolData.dynamicBullets !== undefined ? boolData.dynamicBullets : true;
            var spaceBetween = $this.data('sw-space-between') || (showItems > 1 ? 20 : 0);
            var scrollItems = $this.data('sw-scroll-items') || 1;
            var navigationElement = $this.data('sw-navigation');
            var navigationActiveClass = $this.data('sw-navigation-active') || "active";
            var navigationActiveSelector = boolData.active_selector !== undefined ? boolData.active_selector : false;
            var paginationCss = boolData.pagination !== undefined ? boolData.pagination : '.swiper-pagination';
            var navigationCss = boolData.nav_arrows !== undefined ? boolData.nav_arrows : '.swiper-button';

            var coverflow = boolData.cover_flow ? {
                coverflowEffect: $.extend({
                    stretch: 0,
                    depth: 0,
                    modifier: 1,
                    rotate: 0,
                    slideShadows: false
                }, boolData.cover_flow)
            } : {};

            var autoplay = auto_play ? {
                autoplay: {
                    delay: auto_play,
                    disableOnIteration: false
                },
                speed: speed
            } : {};

            var pagination = {};

            if (paginationCss) {
                pagination.pagination = {
                    el: paginationCss,
                    clickable: true
                };

                /* if (dynamicBullets) {
                    pagination.pagination.dynamicBullets = dynamicBullets;
                } */
            }

            if (navigationCss) {
                pagination.navigation = {
                    nextEl: navigationCss + '-next',
                    prevEl: navigationCss + '-prev'
                }
            }

            var events = {};

            /**/ if (navigationElement) {
                console.log("navigationElement swiper", navigationElement);
                events = {
                    transitionEnd: function () {
                        if (!navigationElement) return;

                        var $navigationElement = $(navigationElement);

                        if (navigationActiveSelector) {
                            $(navigationActiveSelector + '.' + navigationActiveClass, $navigationElement).removeClass(navigationActiveClass);
                            $('.nav-item:eq(' + swiper.realIndex + ') ' + navigationActiveSelector, $navigationElement).addClass(navigationActiveClass);
                        } else {
                            $('.' + navigationActiveClass, $navigationElement).removeClass(navigationActiveClass);
                            $('.nav-item:eq(' + swiper.realIndex + ')', $navigationElement).addClass(navigationActiveClass);
                        }
                    }
                }
            } /**/

            var options = $.extend({
                loop: loop,
                slidesPerGroup: scrollItems,
                spaceBetween: spaceBetween,
                centeredSlides: centered,
                breakpoints: breakPoints,
                slidesPerView: showItems,
                parallax: true,
                effect: effect
            }, pagination, autoplay, coverflow);

            var swiper = new Swiper (this, options);

            for (var e in events) {
                swiper.on(e, events[e]);
            }

            if (navigationElement) {
                $(navigationElement).on('click', '.nav-item', function (evt) {
                    evt.preventDefault();

                    var $item = $(this);
                    var $activeItem = $item;

                    if (navigationActiveSelector) {
                        $activeItem = $(navigationActiveSelector, $item);
                    }

                    if ($activeItem.hasClass(navigationActiveClass)) {
                        return false;
                    }

                    var index = $item.data('step') || $item.index() + 1;
                    swiper.slideTo(index);

                    if (navigationActiveSelector) {
                       $item.siblings().each(function() {
                           $(navigationActiveSelector, this).removeClass(navigationActiveClass);
                       });

                        $activeItem.addClass(navigationActiveClass);
                    } else {
                        $item.siblings('.'+navigationActiveClass).removeClass(navigationActiveClass);
                        $item.addClass(navigationActiveClass);
                    }

                    return false;
                });
            }
        });

        $('.scroll-bar').each(function (i, e) {
            var bar = new SimpleBar(e);
        });
    });
})(jQuery);

/* File: site.js */
/**
 * Title:   Dashcore - HTML App Landing Page - Main Javascript file
 * Author:  http://themeforest.net/user/5studiosnet
 **/

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
     * SCROLLING NAVIGATION
     * Enable smooth transition animation when scrolling
     **/
    $('a.scrollto').on('click', function (event) {
        event.preventDefault();

        var scrollAnimationTime = 1200;
        var target = this.hash;

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 45
        }, scrollAnimationTime, 'easeInOutExpo', function () {
            window.location.hash = target;
        });
    });

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
     * Prettyprint
     **/
    window.prettyPrint && prettyPrint();

    /**
     * AOS
     * Cool scrolling animations
     **/
    AOS.init({
        offset: 100,
        duration: 1500,
        disable: 'mobile'
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
     * COUNTERS
     **/
    if ($(".counter").length) {
        $('.counter').counterUp();
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
     * ANIMATION BAR
     **/
/* 
    (function () {
        $(".whyus-progress-bars").animateBar({
            orientation: "horizontal",
            step: 100,
            duration: 1000,
            elements: [
                { label: "Implementation", value: 73, style: { progress: "progress-xs" } }, // style: { progress: "progress-4" }
                { label: "Design", value: 91, style: { progress: "progress-xs" } },
                { label: "Beauty", value: 97, style: { progress: "progress-xs" } },
                { label: "Branding", value: 61, style: { progress: "progress-xs" } },
                { label: "Responsiveness", value: 100, style: { progress: "progress-xs" }  }
            ]
        });
    })();
 */

    /**
     * PRICING TABLES
     **/
    $(".pricing-table-basis").on("change", 'input[name="pricing-value"]', function() {
        console.log(this.value);
        var period = this.value;
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

    // TODO: isolate wizard stuff in a single file
    /** WIZARD
     * Each wizard has its own configuration, if you're going to use one or another please make sure the selector matches the one used bellow
     * You can remove the code you're not going to use to speed up the site.
     **/
   /* 
 (function() {
        var defaultConfig = {
            showStepURLhash: false, // not show the hash on URL
            theme: 'circles',
            anchorSettings: {
                removeDoneStepOnNavigateBack: true // remove the "done" on visited steps when navigating back
            }
        };

        // 1. BASIC WIZARD
        // This is a basic configuration, just setting the theme and default configuration
        $("#basic-wizard").smartWizard(defaultConfig);

        // 2. AJAX WIZARD
        // To load a step content from ajax just add "data-content-url" attribute to the step.
        $("#ajax-wizard").smartWizard(defaultConfig);

        // 3. FORM WIZARD
        // Another way to load content through ajax is set the "contentUrl" via setting
        // this will send all requests to the same endpoint, you can take control of it via "step_number" variable sent automatically

        // Save the wizard variable, we'll used it below to work with it
        var $formWizard = $("#form-wizard");
        var options = $.extend({}, defaultConfig, {
            contentURL: "wizard/get-form/",
            ajaxSettings: {
                type: 'GET'
            }
        });
        var ajaxFormWizard = $formWizard.smartWizard(options);
        var doAjax = function($form, config) {
            var dfd = new $.Deferred();
            var settings = $.extend(true, {}, config, {
                url: $form.attr('action'),
                type: 'POST',
                data: $form.serializeArray(),
                dataType: 'json',
                beforeSend: function () {
                    $formWizard.smartWizard('block');
                }
            });

            $.ajax(settings).done(function(data) {
                if (data.result) {
                    $form.trigger("form.submitted", [data]);

                    $("input, textarea", $form).removeClass("error");
                    $form.addClass('submitted');
                } else {
                    if (data.errors) {
                        $.each(data.errors, function(i, v) {
                            var $input = $("[name$='[" + i + "]']", $form).addClass('error');
                            $input
                                .tooltip({title: v, placement: 'bottom', trigger: 'manual'}).tooltip('show')
                                .on('focus', function() { $(this).tooltip('destroy'); });
                        });
                    }
                }

                $formWizard.smartWizard('unblock');
                dfd.resolve(data.result);
            }).fail(function() {
                $formWizard.smartWizard('unblock');

                //show failure message
                dfd.reject();
            });

            return dfd.promise();
        };

        ajaxFormWizard
            .on("leaveStep", function(evt, anchorObject, stepNumber, stepDirection) {
                var $form = $("#form-step-" + stepNumber, $formWizard);

                // stepDirection === 'forward' :- this condition allows to do the form validation
                // only on forward navigation, that makes easy navigation on backwards still do the validation when going next
                if(stepDirection === 'forward' && $form.length) {
                    if (!$form.valid()) {
                        return false;
                    }

                    return doAjax($form);
                }

                return true;
            })
            .on("showStep", function (evt, anchorObject, stepNumber, stepDirection) {
                var validateOptions = {
                    errorPlacement: function(error, element) {
                        var $parent = element.parent();

                        if ($parent.hasClass("input-group")) {
                            error.insertAfter($parent);
                        } else if ($parent.hasClass("has-icon")) {
                            error.insertBefore($parent);
                        } else if ($parent.hasClass("control")) {
                            error.insertAfter(element.next('.control-label'));
                        } else {
                            error.insertAfter(element);
                        }
                    }
                };

                var $form = $("#form-step-" + stepNumber, $formWizard);
                $form.validate(validateOptions);

                // some work with step-2 (pricing plans)
                if (stepNumber === 2) {
                    $("input[type=radio]", $form).on("change", function (e) {
                        $(e.target)
                            .closest('.row')
                            .find(".card")
                            .removeClass('b b-3');

                        $(e.target)
                            .closest(".card")
                            .addClass("b b-3");
                    });
                }
            });
    })();
 */
});
/* File: stripe-menu.js */
/*!
 * Dashcore - HTML Startup Template, v1.1.8
 * Stripe menu.
 * Copyright © 2019 5Studios.net
 * https://5studios.net
 */

"use strict";

(function($, global, $scope) {
    $scope.Util = {
        queryArray: function(e, p) {
            p || (p = document.body);

            return Array.prototype.slice.call(p.querySelectorAll(e));
        },
        touch: {
            isSupported: "ontouchstart" in global || navigator.maxTouchPoints,
            isDragging: false
        }
    };

    function StripeMenu(menuElement) {
        var menu = this;

        /**
         * Main events used to enable interaction with menu
         **/
        var events = global.PointerEvent ? {
            end: "pointerup",
            enter: "pointerenter",
            leave: "pointerleave"
        } : {
            end: "touchend",
            enter: "mouseenter",
            leave: "mouseleave"
        };
        
        /**
         * The main navigation element.
         **/
        this.container = document.querySelector(menuElement);
        this.container.classList.add("no-dropdown-transition");

        /**
         * Element holding the menu options, not the dropdown
         **/
        this.root = this.container.querySelector(".st-nav-menu");

        /**
         * Those elements used to show the dropdown animation and transitioning
         **/
        this.dropdownBackground = this.container.querySelector(".st-dropdown-bg");
        this.dropdownBackgroundAlt = this.container.querySelector(".st-alt-bg");
        this.dropdownContainer = this.container.querySelector(".st-dropdown-container");
        this.dropdownArrow = this.container.querySelector(".st-dropdown-arrow");

        /**
         * Elements which will have the dropdown content to be shown
         **/
        this.hasDropdownLinks = $scope.Util.queryArray(".st-has-dropdown", this.root);

        /**
         * Each dropdown section to be displayed on mouse interactions
         **/
        this.dropdownSections = $scope.Util.queryArray(".st-dropdown-section", this.container).map(function(el) {
            return {
                el: el,
                name: el.getAttribute("data-dropdown"),
                content: el.querySelector(".st-dropdown-content"),
                width: el.querySelector(".st-dropdown-content").offsetWidth
            }
        });

        /**
         * Menu link interaction
         **/
        this.hasDropdownLinks.forEach(function(el) {
            el.addEventListener(events.enter, function(evt) {
                if (evt.pointerType === "touch") return;
                menu.stopCloseTimeout();
                menu.openDropdown(el);
            });

            el.addEventListener(events.leave, function(evt) {
                if (evt.pointerType === "touch") return;
                menu.startCloseTimeout();
            });

            el.addEventListener(events.end, function(evt) {
                evt.preventDefault();
                evt.stopPropagation();
                menu.toggleDropdown(el);
            });
        });

        /**
         * Menu container interaction with content
         **/
        this.dropdownContainer.addEventListener(events.enter, function(evt) {
            if (evt.pointerType === "touch") return;
            menu.stopCloseTimeout();
        });

        this.dropdownContainer.addEventListener(events.leave, function(evt) {
            if (evt.pointerType === "touch") return;
            menu.startCloseTimeout();
        });

        this.dropdownContainer.addEventListener(events.end, function(evt) {
            evt.stopPropagation();
        });

        document.body.addEventListener(events.end, function(e) {
            $scope.Util.touch.isDragging || menu.closeDropdown();
        });
    }

    function StripeMenuPopup(element) {
        var popupMenu = this;
        var eventTrigger = $scope.Util.touch.isSupported ? "touchend" : "click";
        
        this.root = document.querySelector(element);
        this.activeClass = "st-popup-active";
        this.link = this.root.querySelector(".st-root-link");
        this.popup = this.root.querySelector(".st-popup");
        this.closeButton = this.root.querySelector(".st-popup-close-button");

        this.link.addEventListener(eventTrigger, function(evt) {
            evt.stopPropagation();
            popupMenu.togglePopup();
        });

        this.popup.addEventListener(eventTrigger, function(evt) {
            evt.stopPropagation()
        });

        this.closeButton && this.closeButton.addEventListener(eventTrigger, function(evt) {
            popupMenu.closeAllPopups()
        });

        document.body.addEventListener(eventTrigger, function(evt) {
            $scope.Util.touch.isDragging || popupMenu.closeAllPopups();
        }, false);
    }

    StripeMenu.prototype.openDropdown = function(hasDropDownLink) {
        var stripeMenu = this;
        if (this.activeDropdown === hasDropDownLink) return;

        this.activeDropdown = hasDropDownLink;

        this.container.classList.add("overlay-active");
        this.container.classList.add("dropdown-active");

        /**
         * Setting the default menu active equals to this link
         **/
        this.hasDropdownLinks.forEach(function(link) {
            link.classList.remove("active")
        });
        hasDropDownLink.classList.add("active");

        /**
         * Next section to show
         **/
        var nextSection = hasDropDownLink.getAttribute("data-dropdown"),
            position = "left";

        var dropdown = {
            width: 0,
            height: 0,
            content: null
        };

        this.dropdownSections.forEach(function(dropDownSection) {
            dropDownSection.el.classList.remove("active");
            dropDownSection.el.classList.remove("left");
            dropDownSection.el.classList.remove("right");

            if (dropDownSection.name === nextSection) {
                dropDownSection.el.classList.add("active");
                position = "right";

                dropdown = {
                    width: dropDownSection.content.offsetWidth,
                    height: dropDownSection.content.offsetHeight,
                    content: dropDownSection.content
                }
            } else {
                dropDownSection.el.classList.add(position);
            }
        });

        var u = 520,
            a = 400,
            scaleX = dropdown.width / u,
            scaleY = dropdown.height / a,
            ddCr = hasDropDownLink.getBoundingClientRect(),
            translateX = ddCr.left + ddCr.width / 2 - dropdown.width / 2;

        translateX = Math.round(Math.max(translateX, 10));

        clearTimeout(this.disableTransitionTimeout);
        this.enableTransitionTimeout = setTimeout(function() {
            stripeMenu.container.classList.remove("no-dropdown-transition")
        }, 50);

        this.dropdownBackground.style.transform = "translateX(" + translateX + "px) scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
        this.dropdownContainer.style.transform = "translateX(" + translateX + "px)";

        this.dropdownContainer.style.width = dropdown.width + "px";
        this.dropdownContainer.style.height = dropdown.height + "px";

        var arrowPosX = Math.round(ddCr.left + ddCr.width / 2);
        this.dropdownArrow.style.transform = "translateX(" + arrowPosX + "px) rotate(45deg)";

        var d = dropdown.content.children[0].offsetHeight / scaleY;
        this.dropdownBackgroundAlt.style.transform = "translateY(" + d + "px)"
    };

    StripeMenu.prototype.closeDropdown = function() {
        var stripeMenu = this;
        if (!this.activeDropdown) return;

        this.hasDropdownLinks.forEach(function(link, t) {
            link.classList.remove("active")
        });

        clearTimeout(this.enableTransitionTimeout);

        this.disableTransitionTimeout = setTimeout(function() {
            stripeMenu.container.classList.add("no-dropdown-transition")
        }, 50);

        this.container.classList.remove("overlay-active");
        this.container.classList.remove("dropdown-active");
        this.activeDropdown = undefined;
    };

    StripeMenu.prototype.toggleDropdown = function(e) {
        this.activeDropdown === e ? this.closeDropdown() : this.openDropdown(e)
    };

    StripeMenu.prototype.startCloseTimeout = function() {
        var e = this;
        e.closeDropdownTimeout = setTimeout(function() {
            e.closeDropdown()
        }, 50)
    };

    StripeMenu.prototype.stopCloseTimeout = function() {
        var e = this;
        clearTimeout(e.closeDropdownTimeout)
    };

    StripeMenuPopup.prototype.togglePopup = function() {
        var isActive = this.root.classList.contains(this.activeClass);

        this.closeAllPopups(true);
        isActive || this.root.classList.add(this.activeClass);
    };

    StripeMenuPopup.prototype.closeAllPopups = function(e) {
        var activeLinks = document.getElementsByClassName(this.activeClass);

        for (var i = 0; i < activeLinks.length; i++)
            activeLinks[i].classList.remove(this.activeClass)
    };
    
    $(function() {
        new StripeMenu(".st-nav");
        new StripeMenuPopup(".st-nav .st-nav-section.st-nav-mobile");
    });
}(jQuery, this, {}));
