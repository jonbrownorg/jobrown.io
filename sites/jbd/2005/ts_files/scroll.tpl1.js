var 
LOOK = {
	// scroller box size: [width, height]
	'size' : [600, 200],
	// for on-demand mode: path to image for scrolling items backward 
	// if relative than to Tscroll_path_to_files
	'up' : 'alf.gif', 
	// for on-demand mode: path to image for scrolling items forward 
	// if relative than to Tscroll_path_to_files
	'dn' : 'art.gif'
},

BEHAVE = {
	// if scrolling mode is auto (true / false); 
	'auto'  : false, 
	// if scrolling direction is vertical (true / false, false means horisontal)
	'vertical' : false, 
	// scrolling speed, pixels per 40 miliseconds;
	// for auto mode use negative value to reverse scrolling direction
	'speed' : 40
},
// a data to build scroll window content
ITEMS = [
	{
		'file': '../s0_data/dialogue.html',
		'content': '',
		'pause_b': 1,
		'pause_a': 0
	},
	{
		'file': '../s0_data/advanced.html',
		'content': '',
		'pause_b': 1,
		'pause_a': 0
	},
	{
		'file': '../s0_data/beginner.html',
		'content': '',
		'pause_b': 1,
		'pause_a': 0
	}

]
