var Devthought = {
	init: function() {
		new SlideList($E('ul', 'header'));
		
		this.setButtons();
		this.setCodes();
	},

	setButtons: function() {
		['searchsubmit'].each(function(id){
			$(id).fx = $(id).effect('opacity').set(0.8);
			$(id).addEvent('mouseover', function(){ $(id).fx.start(1); });
			$(id).addEvent('mouseout', function(){ $(id).fx.start(0.8); });
		});
	},

	setCodes: function() {
		if(window.ie)
			this.copyarea = new Element('textarea').setStyle('display', 'none').injectInside(document.body);
				
		$$('.code').each(function(el){
			var a = el.getElement('.seecode'), pre = el.getElement('ol');
			pre.h = pre.offsetHeight;
			pre.fx = pre.effect('height', {onComplete: function(){ pre.shown = ! pre.shown; }}).set(0);
						
			a.addEvent('click', function(event){
				new Event(event).stop();
				(!pre.shown) ? pre.fx.start(pre.h) : pre.fx.start(0);
			});
			
			a.fx = a.effect('margin-left', {duration: 200, wait: false});
			a.addEvent('mouseover', function(){ a.fx.start(5);});
			a.addEvent('mouseout', function(){ a.fx.start(0);});
						
			if(window.ie) $(a.parentNode).adopt(new Element('a').setProperties({
				href: '#',
				onclick: function(ev){ new Event(ev).stop(); this.copyCode(pre); }.bind(this)
			}).addClass('copycode').setHTML('Copy'));
		}.bind(this));
	},

	copyCode: function(el) {
		this.copyarea.innerText = el.innerText;
		this.copyarea.createTextRange().execCommand("Copy");
	}
}

try { Window.disableImageCache(); } catch(e){}
window.addEvent('domready', function(){ Devthought.init() });