/* Gizmo 3: National Debt Clock with Social Security Trust Counter with extra start-at-zero counters, and seconds counter

<span sr="zfacts.com" id="GND">#</span>		One of 5 span tags that receive clock data

<script type="text/javascript" src="http://zfacts.com/giz/G03sst.js">
</script><script type="text/javascript">
<!--
cps06 =9;// You can set clicks per second
info='--><!--'
setup02(info,cps06)
window.onload=run02
--></script>
*/
var GNDwhen = "2005:07:07:11"; //<==Data. Starting time. Interpretted as Washington DC time.
var GND = 7838410800630.51; //<==Data. Starting amount
var GNDrate = 677; //<==Data. Change in $ billion / year
var SSTwhen = "2005:4:30"; //<==Data. Starting time. Interpretted as Washington DC time.
var SST = 1731683903000; //<==Data. Starting amount
var SSTrate = 157.5; //<==Data. Change in $ billion / year

var off= 4;						// GMT offset from DC time, 5 winter, 4 summer
var ps = 1000000000/(365*24*60*60);
var GNDps = GNDrate*ps;				// GND increase rate per second
var SSTps = SSTrate*ps;
var timeStart	= (new Date ())/1000;		// Returns # of secs between 1970 GMT (=UTC) and JavaSript (client) start time
var GNDstart = GND + GNDps*(timeStart - str2date(GNDwhen,off));			// GND value when Gizmo started
var SSTstart = SST + SSTps*(timeStart - str2date(SSTwhen,off));			// SST value when Gizmo started

var cps06 = 3;			// Clicks per second
var IDs06 = Array('GND', 'GND0', 'SST', 'SST0', 'Sec0');
var OKs06 = Array(0,0,0,0,0);		// Do these span tags exist and contain my identifier?
var copies06 = 1;

function setup06(CPS,cs) {
var rpage="http://zfacts.com/p/784.html";
var nID = 5;

 if (cs != null) copies06 = cs;
 for (i=0; i<nID; i++) if (document.getElementById(IDs06[i])) OKs06[i]=1;	// If span id is present
 if (0.1<CPS & CPS<100) cps06=CPS;
 if (CPS<.1) cps06=.1; if (CPS>100) cps06=100;
 timeStart = (new Date ())/1000;		// # of secs between 1970 GMT (=UTC) and JavaSript (client) start time
  looper06();
}
function looper06()
{	var secs = (new Date ())/1000 - timeStart;
	if (OKs06[0]) toID06(0, num2str(GNDstart + GNDps*secs)); // GND
	if (OKs06[1]) toID06(1, num2str(GNDps*secs)); // GND0
	if (OKs06[2]) toID06(2, num2str(SSTstart + SSTps*secs)); // SST
	if (OKs06[3]) toID06(3, num2str(SSTps*secs)); // SST0
	if (OKs06[4]) toID06(4, Math.floor(secs)); // secs
	setTimeout('looper06();', 1000/cps06);
}
function toID06(N, x)	// Write to HTML page
{	document.getElementById(IDs06[N]).firstChild.nodeValue = x;
	if (copies06>1) 
		for (i=2; i<copies06+1; i++)
		{	v = document.getElementById(IDs06[N]+i);
			if (v) v.firstChild.nodeValue = x;
		}
}
function str2date(str,GMToff)		// converts 'y:m:d:h:m:s' to (y, m, d, h, m, s) and then to seconds since 1970 GMT
{ var s = str;						// Less significant parts can be dropped, but sting must not end with ':'
  var dA = new Array(7);		// 2004:4 is the beggining of March 31. 2004:4:1 is the beginning of April 1.
  for (i=1; i<7; i++)			// off gives GMT offset in hours from local str time. DC is 4 (daylight) or 5 (winter)
  { if (s.length)
    {  ndx = s.indexOf(':')
		 if (ndx==-1) { s0 = s; s = ''; }
	    else 			 s0 = s.substring(0, ndx);
	 }
	 else   s0 = 0;
    if (i==2) s0 -= 1;  // Months go from 0 to 11 in JS
	 dA[i] = s0;
	 s = s.substring(ndx+1);
  }
  dA[4] =dA[4]*1 + GMToff;
  return (Date.UTC(dA[1], dA[2], dA[3], dA[4], dA[5], dA[6]))/1000	// date in secs since 1970
}
function num2str(xNum) 					// convert xNum to a string with commas, in style N (cents or not)
{  var sign = "";
  if (xNum < 0)
    { xNum = -xNum; sign = "-"; }			// conver to positve and save sign
  var xDols = Math.floor(xNum);						// xF is the "dollar" value
  var sDols = xDols.toString ();
  var DLen = sDols.length;
  var dCom = ""
  var digits3
  while (DLen > 3)
  { digits3 = sDols.substr(DLen-3, 3);		// take last 3 digits.
    sDols   = sDols.substr(0, DLen-3);		// take all but last 3 digits.
	 DLen = DLen -3;
  	 dCom = "," + digits3 + dCom;
  }
  return sign + sDols + dCom;			//  dollars and cents (if cents not empty)
}
var flipShown = false;
var animation = {duration:0, starttime:0, to:1.0, now:0.0, from:0.0, firstElement:null, timer:null};
function mousemove (event)
{
    if (!flipShown)
    {
        if (animation.timer != null)
        {
            clearInterval (animation.timer);
            animation.timer  = null;
        }
                
        var starttime = (new Date).getTime() - 13;
                
        animation.duration = 500;
        animation.starttime = starttime;
        animation.firstElement = document.getElementById ('flip');
        animation.timer = setInterval ("animate();", 13);
        animation.from = animation.now;
        animation.to = 1.0;
        animate();
        flipShown = true;
    }
}
function mouseexit (event)
{
    if (flipShown)
    {
        // fade in the info button
        if (animation.timer != null)
        {
            clearInterval (animation.timer);
            animation.timer  = null;
        }
                
        var starttime = (new Date).getTime() - 13;
                
        animation.duration = 500;
        animation.starttime = starttime;
        animation.firstElement = document.getElementById ('flip');
        animation.timer = setInterval ("animate();", 13);
        animation.from = animation.now;
        animation.to = 0.0;
        animate();
        flipShown = false;
    }
}
function animate()
{
    var T;
    var ease;
    var time = (new Date).getTime();
                
        
    T = limit_3(time-animation.starttime, 0, animation.duration);
        
    if (T >= animation.duration)
    {
        clearInterval (animation.timer);
        animation.timer = null;
        animation.now = animation.to;
    }
    else
    {
        ease = 0.5 - (0.5 * Math.cos(Math.PI * T / animation.duration));
        animation.now = computeNextFloat (animation.from, animation.to, ease);
    }
        
    animation.firstElement.style.opacity = animation.now;
}
function limit_3 (a, b, c)
{
    return a < b ? b : (a > c ? c : a);
}
function computeNextFloat (from, to, ease)
{
    return from + (to - from) * ease;
}
function enterflip(event)
{
    document.getElementById('fliprollie').style.display = 'block';
}
function exitflip(event)
{
    document.getElementById('fliprollie').style.display = 'none';
}
function showBack()
{
    var front = document.getElementById("front");
    var back = document.getElementById("back");
        
    if (window.widget)
        widget.prepareForTransition("ToBack");
                
    front.style.display="none";
    back.style.display="block";
        
    if (window.widget)
        setTimeout ('widget.performTransition();', 0);  
}
function hideBack()
{
    var front = document.getElementById("front");
    var back = document.getElementById("back");
        
    if (window.widget)
        widget.prepareForTransition("ToFront");
                
    back.style.display="none";
    front.style.display="block";
        
    if (window.widget)
        setTimeout ('widget.performTransition();', 0);
}

function button1Pressed(){ 
  swapDivs("front","behind","ToBack"); 
}