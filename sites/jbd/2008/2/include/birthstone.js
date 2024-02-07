function linkrotate(which){
var mylinks=new Array()
//add in more links if you want (ie:mylinks[3]=...)
mylinks[0]="http://www.abcnews.com"
mylinks[1]="http://www.cnn.com"
mylinks[2]="http://www.geocities.com"

window.location=mylinks[which]
}


function showimage()
{
if (!document.images)
return
document.images.pictures.src=
document.mygallery.picture.options[document.mygallery.picture.selectedIndex].id
}
function popupChanged(elem)				{					var chosenOption = elem.value;    			document.getElementById("popupMenuText").innerText = chosenOption;}

function getname()	{

	var dt = new Date();
	var hr = dt.getMonth();

if (hr == 0)
{
	document.getElementById("popupMenuText").innerText = "Garnet"
}
else if (hr == 1)
{
	document.getElementById("popupMenuText").innerText = "Amethyst"
}
else if (hr == 2)
{
	document.getElementById("popupMenuText").innerText = "Aquamarine"
}
else if (hr == 3)
{
	document.getElementById("popupMenuText").innerText = "Diamond"
}
else if (hr == 4)
{
	document.getElementById("popupMenuText").innerText = "Emerald"
}
else if (hr == 5)
{
	document.getElementById("popupMenuText").innerText = "Pearl"
}
else if (hr == 6)
{
	document.getElementById("popupMenuText").innerText = "Ruby"
}
else if (hr == 7)
{
	document.getElementById("popupMenuText").innerText = "Peridot"
}
else if (hr == 8)
{
	document.getElementById("popupMenuText").innerText = "Sapphire"
}
else if (hr == 9)
{
	document.getElementById("popupMenuText").innerText = "Opal"
}
else if (hr == 10)
{
	document.getElementById("popupMenuText").innerText = "Topaz"
}
else if (hr == 11)
{
	document.getElementById("popupMenuText").innerText = "Blue Zircon"
}
}


function showimage2()
{
    	var dt = new Date();
	var hr = dt.getMonth();
	getname()

if (!document.images)
return
document.images.pictures.src = "stone/"+hr+".png"
}