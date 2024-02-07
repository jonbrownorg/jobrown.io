window.addEvent('domready', function() {
	// orange menu demo
	if($('fancymenu'))
		FancyExample = new SlideList($E('ul', 'fancymenu'), {transition: Fx.Transitions.backOut, duration: 700, onClick: function(ev, item) { /*ev.stop();document.location.href=item.href;*/ }});

});