/**
 * Theme.js
 * 
 */

/*
 * jQuery
 */
 
+jQuery(function($){
	if ($('.ccchildpages_list li').length < 2) {
		$('#down_fa').removeClass('mobile-show').addClass('mobile-hide');
	} 
});
 
(function ($) {

    $sweetMenu = $('#mobile-sub #sidea .ccchildpages_list');

    $sweetMenu.on('click', function (event) {

        $this = $(this);

        if ($('.ccchildpages_list li').length >=2) {
					if ($(event.target).hasClass('toggle')) {
	          event.preventDefault();
	          $this.toggleClass('open');
					}
        }
    });

		$('.fa.fa-chevron-down').on('click', function (event) {
			if ($('.ccchildpages_list li').length >=2) {
				$sweetMenu.toggleClass('open');
			}
		});

}(jQuery));


jQuery(function($){

	/* Mobile Menu Toggle */
	var mobileMenu = $( '#mobile-menu' ),
		mobileMenuToggle = $( '.mobile-menu-toggle' );


    
    
	mobileMenuToggle.click( function(e){

	if ( $( this ).hasClass( "arcorange_ham" ) ) {
        $( this ).toggleClass( 'orback' );
    } else if ( $( this ).hasClass( "arcblue_ham" ) ) {
    	$( this ).toggleClass( 'bluback' );
    } else if ( $( this ).hasClass( "arcyellow_ham" ) ) {
    	$( this ).toggleClass( 'yellback' );
    } else if ( $( this ).hasClass( "arcgray_ham" ) ) {
    	$( this ).toggleClass( 'grback' );
    } else if ( $( this ).hasClass( "arcpurple_ham" ) ) {
    	$( this ).toggleClass( 'prback' );
    }
    
    
		$( this ).toggleClass( 'open' );
		mobileMenu.toggleClass( 'open' );
		
	} );
    
	/* Mobile Menu Sub Menu Toggles */
	$( '#mobile-menu .mobile-main-navigation #menu-primary-mobile .menu-item-has-children > a' ).click( function(e){

		var liParent = $( this ).parent( 'li' );

		// Close all other submenus
		liParent.siblings( '.open' ).removeClass( 'open' );

		// Toggle the sub menu open if it is closed, or if the link goes to "#"
		// This allows the parent url to be accessed (on 2nd click/tap) if it's a real URL
		if ( !liParent.hasClass( 'open' ) || '#' == $( this ).attr( 'href' ) ) {

			e.preventDefault();

			liParent.toggleClass( 'open' );

		}

	} );

	/* Comment Toggle */
	$( '.toggle-comments' ).click( function() {

		$( '#comments' ).toggleClass( 'hide' );

		$( '.toggle-comments' ).toggleClass( 'hide' );

	} );

	// Add fancybox to galleries
	$( '.gallery' ).each( function(){

		var galleryID = $( this ).attr( 'id' );

		$( this ).find( 'a' ).addClass( 'fancybox' ).attr( 'rel', galleryID );

	} );

	$( '.fancybox' ).fancybox();

} );

( function() {
	var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
	    is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
	    is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

	if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var element = document.getElementById( location.hash.substring( 1 ) );

			if ( element ) {
				if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) )
					element.tabIndex = -1;

				element.focus();
			}
		}, false );
	}
})();
