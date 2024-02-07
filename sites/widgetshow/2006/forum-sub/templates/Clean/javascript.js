function erase(area)
{
	if(area.defaultValue==area.value)
	{
		area.value="";
	};
}
function popup(url, naam)
{
	window.open(url, naam, 'height=400, resizable=yes, scrollbars=yes, width=250');
}

function launch(link) 
{
	window.open(link);
}
var domain = "doublejweb.net";  
var at = "@";  
 
function ShowHide(id1, id2, id3) 
{
	var res = expMenu(id1);
	if (id2 != '') expMenu(id2);
	if (id3 != '') SetCookie(id3, res, exp);
}
function expMenu(id) 
{
	var itm = null;
	if (document.getElementById) 
	{
		itm = document.getElementById(id);
	}
	else if (document.all)
	{
		itm = document.all[id];
	} 
	else if (document.layers)
	{
		itm = document.layers[id];
	}
	if (!itm) 
	{
		// do nothing
	}
	else if (itm.style) 
	{
		if (itm.style.display == "none")
		{ 
			itm.style.display = ""; 
			return 1;
		}
		else
		{
			itm.style.display = "none"; 
			return 2;
		}
	}
	else 
	{
		itm.visibility = "show"; 
		return 1;
	}
}

// bbCode control by
// subBlue design
// www.subBlue.com

function emoticon(text) {
	var txtarea = document.shoutbox.message;
	text = ' ' + text + ' ';
	if (txtarea.createTextRange && txtarea.caretPos) {
		var caretPos = txtarea.caretPos;
		caretPos.text = caretPos.text.charAt(caretPos.text.length - 1) == ' ' ? caretPos.text + text + ' ' : caretPos.text + text;
		txtarea.focus();
	} else {
		txtarea.value  += text;
		txtarea.focus();
	}
}
function storeCaret(textEl) {
	if (textEl.createTextRange) textEl.caretPos = document.selection.createRange().duplicate();
}