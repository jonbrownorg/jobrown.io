/**************************************************
 * dom-drag.js
 * 09.25.2001
 * www.youngpup.net
 * Script featured on Dynamic Drive (http://www.dynamicdrive.com) 12.08.2005
 **************************************************
 * 10.28.2001 - fixed minor bug where events
 * sometimes fired off the handle, not the root.
 **************************************************/

var Drag = {

	obj : null,

	init : function(o, oRoot, minX, maxX, minY, maxY, bSwapHorzRef, bSwapVertRef, fXMapper, fYMapper)
	{
		o.onmousedown	= Drag.start;

		o.hmode			= bSwapHorzRef ? false : true ;
		o.vmode			= bSwapVertRef ? false : true ;

		o.root = oRoot && oRoot != null ? oRoot : o ;

		if (o.hmode  && isNaN(parseInt(o.root.style.left  ))) o.root.style.left   = "0px";
		if (o.vmode  && isNaN(parseInt(o.root.style.top   ))) o.root.style.top    = "0px";
		if (!o.hmode && isNaN(parseInt(o.root.style.right ))) o.root.style.right  = "0px";
		if (!o.vmode && isNaN(parseInt(o.root.style.bottom))) o.root.style.bottom = "0px";

		o.minX	= typeof minX != 'undefined' ? minX : null;
		o.minY	= typeof minY != 'undefined' ? minY : null;
		o.maxX	= typeof maxX != 'undefined' ? maxX : null;
		o.maxY	= typeof maxY != 'undefined' ? maxY : null;

		o.xMapper = fXMapper ? fXMapper : null;
		o.yMapper = fYMapper ? fYMapper : null;

		o.root.onDragStart	= new Function();
		o.root.onDragEnd	= new Function();
		o.root.onDrag		= new Function();
	},

	start : function(e)
	{
		var o = Drag.obj = this;
		e = Drag.fixE(e);
		var y = parseInt(o.vmode ? o.root.style.top  : o.root.style.bottom);
		var x = parseInt(o.hmode ? o.root.style.left : o.root.style.right );
		o.root.onDragStart(x, y);

		o.lastMouseX	= e.clientX;
		o.lastMouseY	= e.clientY;

		if (o.hmode) {
			if (o.minX != null)	o.minMouseX	= e.clientX - x + o.minX;
			if (o.maxX != null)	o.maxMouseX	= o.minMouseX + o.maxX - o.minX;
		} else {
			if (o.minX != null) o.maxMouseX = -o.minX + e.clientX + x;
			if (o.maxX != null) o.minMouseX = -o.maxX + e.clientX + x;
		}

		if (o.vmode) {
			if (o.minY != null)	o.minMouseY	= e.clientY - y + o.minY;
			if (o.maxY != null)	o.maxMouseY	= o.minMouseY + o.maxY - o.minY;
		} else {
			if (o.minY != null) o.maxMouseY = -o.minY + e.clientY + y;
			if (o.maxY != null) o.minMouseY = -o.maxY + e.clientY + y;
		}

		document.onmousemove	= Drag.drag;
		document.onmouseup		= Drag.end;

		return false;
	},

	drag : function(e)
	{
		e = Drag.fixE(e);
		var o = Drag.obj;

		var ey	= e.clientY;
		var ex	= e.clientX;
		var y = parseInt(o.vmode ? o.root.style.top  : o.root.style.bottom);
		var x = parseInt(o.hmode ? o.root.style.left : o.root.style.right );
		var nx, ny;

		if (o.minX != null) ex = o.hmode ? Math.max(ex, o.minMouseX) : Math.min(ex, o.maxMouseX);
		if (o.maxX != null) ex = o.hmode ? Math.min(ex, o.maxMouseX) : Math.max(ex, o.minMouseX);
		if (o.minY != null) ey = o.vmode ? Math.max(ey, o.minMouseY) : Math.min(ey, o.maxMouseY);
		if (o.maxY != null) ey = o.vmode ? Math.min(ey, o.maxMouseY) : Math.max(ey, o.minMouseY);

		nx = x + ((ex - o.lastMouseX) * (o.hmode ? 1 : -1));
		ny = y + ((ey - o.lastMouseY) * (o.vmode ? 1 : -1));

		if (o.xMapper)		nx = o.xMapper(y)
		else if (o.yMapper)	ny = o.yMapper(x)

		Drag.obj.root.style[o.hmode ? "left" : "right"] = nx + "px";
		Drag.obj.root.style[o.vmode ? "top" : "bottom"] = ny + "px";
		Drag.obj.lastMouseX	= ex;
		Drag.obj.lastMouseY	= ey;

		Drag.obj.root.onDrag(nx, ny);
		return false;
	},

	end : function()
	{
		document.onmousemove = null;
		document.onmouseup   = null;
		Drag.obj.root.onDragEnd(	parseInt(Drag.obj.root.style[Drag.obj.hmode ? "left" : "right"]), 
									parseInt(Drag.obj.root.style[Drag.obj.vmode ? "top" : "bottom"]));
		Drag.obj = null;
	},

	fixE : function(e)
	{
		if (typeof e == 'undefined') e = window.event;
		if (typeof e.layerX == 'undefined') e.layerX = e.offsetX;
		if (typeof e.layerY == 'undefined') e.layerY = e.offsetY;
		return e;
	}
};


function toggleImage() {
	
	var toggleBanner = document.getElementById('sourceBanner');
	var currentImage = toggleBanner.getAttribute('src');

	// Retrieve path after domain for comparison.
	if (currentImage.indexOf('.com') != -1) {
		currentImage = currentImage.split('.com')[1];
	}

	// Set image values.
	var firstImage = '../images/widget1.png';
	var firstAlt = 'Front';
	var secondImage = '../images/widget1back.png';
	var secondAlt = 'Back';

	// Toggle image based on current SRC.
	if (currentImage == firstImage) {
		toggleBanner.setAttribute('src', secondImage);
		toggleBanner.setAttribute('alt', firstAlt);
	} else {
		toggleBanner.setAttribute('src', firstImage);
		toggleBanner.setAttribute('alt', secondAlt);
	}
}






function toggleImage2() {
	
	var toggleBanner = document.getElementById('sourceBanner2');
	var currentImage = toggleBanner.getAttribute('src');

	// Retrieve path after domain for comparison.
	if (currentImage.indexOf('.com') != -1) {
		currentImage = currentImage.split('.com')[1];
	}

	// Set image values.
	var firstImage = '../images/ccfront.png';
	var firstAlt = 'Front';
	var secondImage = '../images/ccback.png';
	var secondAlt = 'Back';

	// Toggle image based on current SRC.
	if (currentImage == firstImage) {
		toggleBanner.setAttribute('src', secondImage);
		toggleBanner.setAttribute('alt', firstAlt);
	} else {
		toggleBanner.setAttribute('src', firstImage);
		toggleBanner.setAttribute('alt', secondAlt);
	}
}


function toggleImage3() {
	
	var toggleBanner = document.getElementById('sourceBanner3');
	var currentImage = toggleBanner.getAttribute('src');

	// Retrieve path after domain for comparison.
	if (currentImage.indexOf('.com') != -1) {
		currentImage = currentImage.split('.com')[1];
	}

	// Set image values.
	var firstImage = '../images/dogfront.png';
	var firstAlt = 'Front';
	var secondImage = '../images/dogback.png';
	var secondAlt = 'Back';

	// Toggle image based on current SRC.
	if (currentImage == firstImage) {
		toggleBanner.setAttribute('src', secondImage);
		toggleBanner.setAttribute('alt', firstAlt);
	} else {
		toggleBanner.setAttribute('src', firstImage);
		toggleBanner.setAttribute('alt', secondAlt);
	}
}



function toggleImage4() {
	
	var toggleBanner = document.getElementById('sourceBanner4');
	var currentImage = toggleBanner.getAttribute('src');

	// Retrieve path after domain for comparison.
	if (currentImage.indexOf('.com') != -1) {
		currentImage = currentImage.split('.com')[1];
	}

	// Set image values.
	var firstImage = '../images/pigfront.png';
	var firstAlt = 'Front';
	var secondImage = '../images/pigback.png';
	var secondAlt = 'Back';

	// Toggle image based on current SRC.
	if (currentImage == firstImage) {
		toggleBanner.setAttribute('src', secondImage);
		toggleBanner.setAttribute('alt', firstAlt);
	} else {
		toggleBanner.setAttribute('src', firstImage);
		toggleBanner.setAttribute('alt', secondAlt);
	}
}



function toggleImage5() {
	
	var toggleBanner = document.getElementById('sourceBanner5');
	var currentImage = toggleBanner.getAttribute('src');

	// Retrieve path after domain for comparison.
	if (currentImage.indexOf('.com') != -1) {
		currentImage = currentImage.split('.com')[1];
	}

	// Set image values.
	var firstImage = '../images/birthfront.png';
	var firstAlt = 'Front';
	var secondImage = '../images/birthback.png';
	var secondAlt = 'Back';

	// Toggle image based on current SRC.
	if (currentImage == firstImage) {
		toggleBanner.setAttribute('src', secondImage);
		toggleBanner.setAttribute('alt', firstAlt);
	} else {
		toggleBanner.setAttribute('src', firstImage);
		toggleBanner.setAttribute('alt', secondAlt);
	}
}

function toggleImage6() {
	
	var toggleBanner = document.getElementById('sourceBanner6');
	var currentImage = toggleBanner.getAttribute('src');

	// Retrieve path after domain for comparison.
	if (currentImage.indexOf('.com') != -1) {
		currentImage = currentImage.split('.com')[1];
	}

	// Set image values.
	var firstImage = '../images/popfront.png';
	var firstAlt = 'Front';
	var secondImage = '../images/popback.png';
	var secondAlt = 'Back';

	// Toggle image based on current SRC.
	if (currentImage == firstImage) {
		toggleBanner.setAttribute('src', secondImage);
		toggleBanner.setAttribute('alt', firstAlt);
	} else {
		toggleBanner.setAttribute('src', firstImage);
		toggleBanner.setAttribute('alt', secondAlt);
	}
}



function toggleImage7() {
	
	var toggleBanner = document.getElementById('sourceBanner7');
	var currentImage = toggleBanner.getAttribute('src');

	// Retrieve path after domain for comparison.
	if (currentImage.indexOf('.com') != -1) {
		currentImage = currentImage.split('.com')[1];
	}

	// Set image values.
	var firstImage = '../images/timefront.png';
	var firstAlt = 'Front';
	var secondImage = '../images/timeback.png';
	var secondAlt = 'Back';

	// Toggle image based on current SRC.
	if (currentImage == firstImage) {
		toggleBanner.setAttribute('src', secondImage);
		toggleBanner.setAttribute('alt', firstAlt);
	} else {
		toggleBanner.setAttribute('src', firstImage);
		toggleBanner.setAttribute('alt', secondAlt);
	}
}


function toggleImage8() {
	
	var toggleBanner = document.getElementById('sourceBanner8');
	var currentImage = toggleBanner.getAttribute('src');

	// Retrieve path after domain for comparison.
	if (currentImage.indexOf('.com') != -1) {
		currentImage = currentImage.split('.com')[1];
	}

	// Set image values.
	var firstImage = '../images/deffront.png';
	var firstAlt = 'Front';
	var secondImage = '../images/defback.png';
	var secondAlt = 'Back';

	// Toggle image based on current SRC.
	if (currentImage == firstImage) {
		toggleBanner.setAttribute('src', secondImage);
		toggleBanner.setAttribute('alt', firstAlt);
	} else {
		toggleBanner.setAttribute('src', firstImage);
		toggleBanner.setAttribute('alt', secondAlt);
	}
}



function toggleImage9() {
	
	var toggleBanner = document.getElementById('sourceBanner9');
	var currentImage = toggleBanner.getAttribute('src');

	// Retrieve path after domain for comparison.
	if (currentImage.indexOf('.com') != -1) {
		currentImage = currentImage.split('.com')[1];
	}

	// Set image values.
	var firstImage = '../images/searchfront.png';
	var firstAlt = 'Front';
	var secondImage = '../images/searchback.png';
	var secondAlt = 'Back';

	// Toggle image based on current SRC.
	if (currentImage == firstImage) {
		toggleBanner.setAttribute('src', secondImage);
		toggleBanner.setAttribute('alt', firstAlt);
	} else {
		toggleBanner.setAttribute('src', firstImage);
		toggleBanner.setAttribute('alt', secondAlt);
	}
}


