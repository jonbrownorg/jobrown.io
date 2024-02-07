// Graphical Countdown
function CountdownTimer ()
{
	if (window.CountdownTimerInstance == null)
		{
		window.CountdownTimerInstance = this;

		this.RenderText = CountdownTimer_RenderText;		
		this.RenderHorizontalBar = CountdownTimer_RenderHorizontalBar;
		this.RenderImage = CountdownTimer_RenderImage;
		this.AddFormatChangeTime = CountdownTimer_AddFormatChangeTime;
		this.AddFormatChangePercent = CountdownTimer_AddFormatChangePercent;
		this.AddColorChangeTime = CountdownTimer_AddColorChangeTime;
		this.AddColorChangePercent = CountdownTimer_AddColorChangePercent;
		this.AddImageChangeTime = CountdownTimer_AddImageChangeTime;
		this.AddImageChangePercent = CountdownTimer_AddImageChangePercent;
		this.StartAutoRefresh = CountdownTimer_StartAutoRefresh;
		this.StopAutoRefresh = CountdownTimer_StopAutoRefresh;

		// internal properties		
		this.autoRefreshInterval = 10000; // default to ten seconds
		this.timers = new Array();
		this.timerStarts = new Array();
		this.timerStops = new Array();
		this.timerCount = 0;
		}
	else
		{
		window.alert ("You can create only one Countdown object per page.");
		return null;
		}
}

// Render methods
function CountdownTimer_RenderText (sCountdownID, dtmStart, dtmStop, sFormat)
{
	var elmTimer = this.timers[sCountdownID];
	if (elmTimer != null)
		{
		window.alert ("You have already used this ID on this page. Please use a unique ID.");
		return;
		}
	this.timers[sCountdownID] = this.timerCount;
	this.timers[this.timerCount] = sCountdownID;
	this.timerCount++;
	
	this.timerStarts[sCountdownID] = dtmStart;
	this.timerStops[sCountdownID] = dtmStop;
	
	document.write ("<span id=\"" + sCountdownID + "\" CountdownTimerType=\"text\">");
	document.write (CountdownTimer_FormattedTimeSpan(new Date(dtmStop.valueOf() - dtmStart.valueOf()), sFormat));
	document.write ("</span>");
	
	CountdownTimer_AddFormatChangeTime(sCountdownID, dtmStart, sFormat);
}

//		Call this method to cause a horizontal bar to be displayed
function CountdownTimer_RenderHorizontalBar (sCountdownID, dtmStart, dtmStop, rgbFore, rgbBack)
{
	var elmTimer = this.timers[sCountdownID];
	if (elmTimer != null)
		{
		window.alert ("You have already used this ID on this page. Please use a unique ID.");
		return;
		}
	this.timers[sCountdownID] = this.timerCount;
	this.timers[this.timerCount] = sCountdownID;
	this.timerCount++;
	
	this.timerStarts[sCountdownID] = dtmStart;
	this.timerStops[sCountdownID] = dtmStop;
	
	document.write ("<div id=\"" + sCountdownID + "\" style=\"position: relative; width: 100%; height: 100%; background-color: " + rgbBack + "; z-index: 1; \" CountdownTimerType=\"bar\">");
	document.write ("<div id=\"" + sCountdownID + "ForeBar\" style=\"position: absolute; left: 0px; top: 0px; width: 0px; height: 100%; background-image: url(images/progresstest1.gif); z-index: 2; overflow: hidden; \">");
	document.write ("</div>");
	document.write ("</div>");
	
}

function CountdownTimer_RenderImage (sCountdownID, dtmStart, dtmStop, sDefaultImageURL, cx, cy)
{
	var elmTimer = this.timers[sCountdownID];
	if (elmTimer != null)
		{
		window.alert ("You have already used this ID on this page. Please use a unique ID.");
		return;
		}
	this.timers[sCountdownID] = this.timerCount;
	this.timers[this.timerCount] = sCountdownID;
	this.timerCount++;
	
	this.timerStarts[sCountdownID] = dtmStart;
	this.timerStops[sCountdownID] = dtmStop;
	
	document.write ("<div id=\"" + sCountdownID + "\" style=\"position: relative; width: " + cx.toString() + "px; height: " + cy.toString() + "px;\" CountdownTimerType=\"image\">");
	document.write ("<image src=\"" + sDefaultImageURL + "\" width=\"" + cx.toString() + "\" height=\"" + cy.toString() + "\">");
	document.write ("</div>");
}

function CountdownTimer_AddFormatChangeTime (sCountdownID, dtmPoint, sFormat)
{
	var elmTimer = CountdownTimer_GetTimerElement(sCountdownID);
	if (elmTimer.CountdownTimerType == "text")
		{
		elmTimer.timerChanges[elmTimer.timerChangeCount] = dtmPoint;
		elmTimer.timerChangeFormat[elmTimer.timerChangeCount] = sFormat;
		elmTimer.timerChangeCount++;
		}
}

function CountdownTimer_AddFormatChangePercent (sCountdownID, nPercent, sFormat)
{
	if (this.timers[sCountdownID] == null)
		window.alert ("Timer '" + sCountdownID + "' does not exist.");
	var dtmStart = this.timerStarts[sCountdownID];
	var dtmStop = this.timerStops[sCountdownID];
	var dtmPercent = new Date(((dtmStop.valueOf() - dtmStart.valueOf()) * (nPercent / 100)) + dtmStart.valueOf());
	this.AddFormatChangeTime (sCountdownID, dtmPercent, sFormat);
}

function CountdownTimer_AddColorChangeTime (sCountdownID, dtmPoint, rgbFore, rgbBack)
{
	var elmTimer = CountdownTimer_GetTimerElement(sCountdownID);
	if (elmTimer.CountdownTimerType == "bar")
		{
		elmTimer.timerChanges[elmTimer.timerChangeCount] = dtmPoint;
		elmTimer.timerChangeForeColor[elmTimer.timerChangeCount] = rgbFore;
		elmTimer.timerChangeBackColor[elmTimer.timerChangeCount] = rgbBack;
		elmTimer.timerChangeCount++;
		}
}

function CountdownTimer_AddColorChangePercent (sCountdownID, nPercent, rgbFore, rgbBack)
{
	var dtmStart = this.timerStarts[sCountdownID];
	var dtmStop = this.timerStops[sCountdownID];
	var dtmPercent = new Date(((dtmStop.valueOf() - dtmStart.valueOf()) * (nPercent / 100)) + dtmStart.valueOf());
	this.AddColorChangeTime (sCountdownID, dtmPercent, rgbFore, rgbBack);
}

function CountdownTimer_AddImageChangeTime (sCountdownID, dtmPoint, sImageURL)
{
	var elmTimer = CountdownTimer_GetTimerElement(sCountdownID);
	if (elmTimer.CountdownTimerType == "image")
		{
		elmTimer.timerChanges[elmTimer.timerChangeCount] = dtmPoint;
		elmTimer.timerChangeImages[elmTimer.timerChangeCount] = sImageURL;
		elmTimer.timerChangeCount++;
		}
}

function CountdownTimer_AddImageChangePercent (sCountdownID, nPercent, sImageURL)
{
	var dtmStart = this.timerStarts[sCountdownID];
	var dtmStop = this.timerStops[sCountdownID];
	var dtmPercent = new Date(((dtmStop.valueOf() - dtmStart.valueOf()) * (nPercent / 100)) + dtmStart.valueOf());
	this.AddImageChangeTime (sCountdownID, dtmPercent, sImageURL);
}

function CountdownTimer_StartAutoRefresh (nInterval)
{
	if (this.timerID != null)
		this.StopAutoRefresh();
	if (nInterval >= 0)
		this.autoRefreshInterval = nInterval;
	this.timerID = window.setInterval(CountdownTimer_OnRefresh, this.autoRefreshInterval);
}

function CountdownTimer_StopAutoRefresh ()
{
	if (this.timerID != null)
		window.clearInterval(this.timerID);
	this.timerID = null;
}

function CountdownTimer_OnRefresh ()
{
	var tmr = window.CountdownTimerInstance;
	for (var iTimer = 0; iTimer < tmr.timerCount; iTimer++)
		{
		var sTimerID = tmr.timers[iTimer];
		var elmTimer = document.getElementById(sTimerID);
		var nChange = CountdownTimer_GetChange(elmTimer);
		if (elmTimer.CountdownTimerType == "text")
			{
			elmTimer.timerCurrentChange = nChange;
			CountdownTimer_RefreshText(elmTimer);
			}
		else if (elmTimer.CountdownTimerType == "bar")
			{
			elmTimer.timerCurrentChange = nChange;
			CountdownTimer_RefreshBar(elmTimer);
			}
		else if (elmTimer.CountdownTimerType == "image")
			{
			if (nChange != elmTimer.timerCurrentChange)
				{
				elmTimer.timerCurrentChange = nChange;
				CountdownTimer_RefreshImage(elmTimer);
				}
			}
		}
}

function CountdownTimer_GetTimerElement (sCountdownID)
{
	var elm = document.getElementById(sCountdownID);
	if (elm != null)
		if (elm.timerChanges == null)
			{
			elm.timerChanges = new Array();
			elm.timerChangeForeColor = new Array();
			elm.timerChangeBackColor = new Array();
			elm.timerChangeImages = new Array();
			elm.timerChangeFormat = new Array();
			elm.timerChangeCount = 0;
			elm.timerCurrentChange = -1;
			}
	return elm;
}

function CountdownTimer_GetChange(elmTimer)
{
	var tmr = window.CountdownTimerInstance;
	var dtmNow = new Date();
	var dtmStart = tmr.timerStarts[elmTimer.id];
	var dtmStop = tmr.timerStops[elmTimer.id];
	var dtmMaxChange = dtmStart;
	var iChange = -1;
	for (var iTest = 0; iTest < elmTimer.timerChangeCount; iTest++)
		{
		var dtmPoint = elmTimer.timerChanges[iTest];
		if ((dtmNow >= dtmPoint) && (dtmPoint >= dtmMaxChange))
			{
			iChange = iTest
			dtmMaxChange = dtmPoint;
			}
		}
	return iChange;
}

function CountdownTimer_RefreshText(elmTextTimer)
{
	var tmr = window.CountdownTimerInstance;
	var iCurrentChange = elmTextTimer.timerCurrentChange;
	var sFormat = elmTextTimer.timerChangeFormat[iCurrentChange];
	var dtmNow = new Date();
	var dtmStop = tmr.timerStops[elmTextTimer.id];
	var tsRemaining = new Date(dtmStop.valueOf() - dtmNow.valueOf());
	elmTextTimer.innerText = CountdownTimer_FormattedTimeSpan(tsRemaining, sFormat);
}

function CountdownTimer_FormattedTimeSpan (ts, sFormat)
{
	var ts = new Date(ts.valueOf());
	var sFormat = new String(sFormat);

	var cYears = ts.getUTCFullYear() - 1970;
	var cPartMonths = ts.valueOf() > 0 ? ts.getUTCMonth() : 0;
	var cTotalMonths = Math.max(0, cYears * 12 + cPartMonths);
	var cPartWeeks = ts.valueOf() > 0 ? Math.floor(ts.getUTCDate() / 7) : 0;
	var cTotalWeeks = Math.max(0, Math.floor(ts.valueOf() / 604800000));
	var cPartDays = ts.valueOf() > 0 ? ts.getUTCDate() - 1 : 0;
	var cTotalDays = Math.max(0, Math.floor(ts.valueOf() / 86400000));
	var cPartHours = ts.valueOf() > 0 ? ts.getUTCHours() : 0;
	var cTotalHours = Math.max(0, Math.floor(ts.valueOf() / 3600000));
	var cPartMinutes = ts.valueOf() > 0 ? ts.getUTCMinutes() : 0;
	var cTotalMinutes = Math.max(0, Math.floor(ts.valueOf() / 60000));
	var cPartSeconds = ts.valueOf() > 0 ? ts.getUTCSeconds() : 0;
	var cTotalSeconds = Math.max(0, Math.floor(ts.valueOf() / 1000));
	
	var rxYears = /\{Y\}/g;
	var rxNamedYears = /\{YY\}/g;
	var rxTotalMonths = /\{M\}/g;
	var rxNamedTotalMonths = /\{MM\}/g;
	var rxPartMonths = /\{m\}/g;
	var rxZeroMonths = /\{0m\}/g;
	var rxNamedPartMonths = /\{mm\}/g;
	var rxTotalWeeks = /\{W\}/g;
	var rxNamedTotalWeeks = /\{WW\}/g;
	var rxPartWeeks = /\{w\}/g;
	var rxZeroWeeks = /\{0w\}/g;
	var rxNamedPartWeeks = /\{ww\}/g;
	var rxTotalDays = /\{D\}/g;
	var rxNamedTotalDays = /\{DD\}/g;
	var rxPartDays = /\{d\}/g;
	var rxZeroDays = /\{0d\}/g;
	var rxNamedPartDays = /\{dd\}/g;
	var rxTotalHours = /\{H\}/g;
	var rxNamedTotalHours = /\{HH\}/g;
	var rxPartHours = /\{h\}/g;
	var rxZeroHours = /\{0h\}/g;
	var rxNamedPartHours  = /\{hh\}/g;
	var rxTotalMinutes = /\{N\}/g;
	var rxNamedTotalMinutes = /\{NN\}/g;
	var rxPartMinutes = /\{n\}/g;
	var rxZeroMinutes = /\{0n\}/g;
	var rxNamedPartMinutes = /\{nn\}/g;
	var rxTotalSeconds = /\{S\}/g;
	var rxNamedTotalSeconds = /\{SS\}/g;
	var rxPartSeconds = /\{s\}/g;
	var rxZeroSeconds = /\{0s\}/g;
	var rxNamedPartSeconds = /\{ss\}/g;

	var sFormatted = new String();
	if (sFormat.length > 0)
		{
		var asMatch = sFormat.match(rxYears);
		if (asMatch != null)
			sFormat = sFormat.replace(rxYears, cYears.toString());
		asMatch = sFormat.match(rxNamedYears);
		if (asMatch != null)
			sFormat = sFormat.replace(rxNamedYears, cYears.toString() + ((cYears > 1) ? " years" : ((cYears > 0) ? " year" : " years")));

		asMatch = sFormat.match(rxTotalMonths);
		if (asMatch != null)
			sFormat = sFormat.replace(rxTotalMonths, cTotalMonths.toString());
		asMatch = sFormat.match(rxNamedTotalMonths);
		if (asMatch != null)
			sFormat = sFormat.replace(rxNamedTotalMonths, cTotalMonths.toString() + ((cTotalMonths > 1) ? " months" : ((cTotalMonths > 0) ? " month" : " months")));
		asMatch = sFormat.match(rxPartMonths);
		if (asMatch != null)
			sFormat = sFormat.replace(rxPartMonths, cPartMonths.toString());
		asMatch = sFormat.match(rxZeroMonths);
		if (asMatch != null)
			sFormat = sFormat.replace(rxZeroMonths, LeadingZero(cPartMonths.toString(), 2));
		asMatch = sFormat.match(rxNamedPartMonths);
		if (asMatch != null)
			sFormat = sFormat.replace(rxNamedPartMonths, cPartMonths.toString() + ((cPartMonths > 1) ? " months" : ((cPartMonths > 0) ? " month" : " months")));
		
		asMatch = sFormat.match(rxTotalWeeks);
		if (asMatch != null)
			sFormat = sFormat.replace(rxTotalWeeks, cTotalWeeks.toString());
		asMatch = sFormat.match(rxNamedTotalWeeks);
		if (asMatch != null)
			sFormat = sFormat.replace(rxNamedTotalWeeks, cTotalWeeks.toString() + ((cTotalWeeks > 1) ? " weeks" : ((cTotalWeeks > 0) ? " week" : " weeks")));
		asMatch = sFormat.match(rxPartWeeks);
		if (asMatch != null)
			sFormat = sFormat.replace(rxPartWeeks, cPartWeeks.toString());
		asMatch = sFormat.match(rxZeroWeeks);
		if (asMatch != null)
			sFormat = sFormat.replace(rxZeroWeeks, LeadingZero(cPartWeeks.toString(), 2));
		asMatch = sFormat.match(rxNamedPartWeeks);
		if (asMatch != null)
			sFormat = sFormat.replace(rxNamedPartWeeks, cPartWeeks.toString() + ((cPartWeeks > 1) ? " weeks" : ((cPartWeeks > 0) ? " week" : " weeks")));
		
		asMatch = sFormat.match(rxTotalDays);
		if (asMatch != null)
			sFormat = sFormat.replace(rxTotalDays, cTotalDays.toString());
		asMatch = sFormat.match(rxNamedTotalDays);
		if (asMatch != null)
			sFormat = sFormat.replace(rxNamedTotalDays, cTotalDays.toString() + ((cTotalDays > 1) ? " days" : ((cTotalDays > 0) ? " day" : " days")));
		asMatch = sFormat.match(rxPartDays);
		if (asMatch != null)
			sFormat = sFormat.replace(rxPartDays, cPartDays.toString());
		asMatch = sFormat.match(rxZeroDays);
		if (asMatch != null)
			sFormat = sFormat.replace(rxZeroDays, LeadingZero(cPartDays.toString(), 2));
		asMatch = sFormat.match(rxNamedPartDays);
		if (asMatch != null)
			sFormat = sFormat.replace(rxNamedPartDays, cPartDays.toString() + ((cPartDays > 1) ? " days" : ((cPartDays > 0) ? " day" : " days")));
		
		asMatch = sFormat.match(rxTotalHours);
		if (asMatch != null)
			sFormat = sFormat.replace(rxTotalHours, cTotalHours.toString());
		asMatch = sFormat.match(rxNamedTotalHours);
		if (asMatch != null)
			sFormat = sFormat.replace(rxNamedTotalHours, cTotalHours.toString() + ((cTotalHours > 1) ? " hours" : ((cTotalHours > 0) ? " hour" : " hours")));
		asMatch = sFormat.match(rxPartHours);
		if (asMatch != null)
			sFormat = sFormat.replace(rxPartHours, cPartHours.toString());
		asMatch = sFormat.match(rxZeroHours);
		if (asMatch != null)
			sFormat = sFormat.replace(rxZeroHours, LeadingZero(cPartHours.toString(), 2));
		asMatch = sFormat.match(rxNamedPartHours);
		if (asMatch != null)
			sFormat = sFormat.replace(rxNamedPartHours, cPartHours.toString() + ((cPartHours > 1) ? " hours" : ((cPartHours > 0) ? " hour" : " hours")));
		
		asMatch = sFormat.match(rxTotalMinutes);
		if (asMatch != null)
			sFormat = sFormat.replace(rxTotalMinutes, cTotalMinutes.toString());
		asMatch = sFormat.match(rxNamedTotalMinutes);
		if (asMatch != null)
			sFormat = sFormat.replace(rxNamedTotalMinutes, cTotalMinutes.toString() + ((cTotalMinutes > 1) ? " minutes" : ((cTotalMinutes > 0) ? " minute" : " minutes")));
		asMatch = sFormat.match(rxPartMinutes);
		if (asMatch != null)
			sFormat = sFormat.replace(rxPartMinutes, cPartMinutes.toString());
		asMatch = sFormat.match(rxZeroMinutes);
		if (asMatch != null)
			sFormat = sFormat.replace(rxZeroMinutes, LeadingZero(cPartMinutes.toString(), 2));
		asMatch = sFormat.match(rxNamedPartMinutes);
		if (asMatch != null)
			sFormat = sFormat.replace(rxNamedPartMinutes, cPartMinutes.toString() + ((cPartMinutes > 1) ? " minutes" : ((cPartMinutes > 0) ? " minute" : " minutes")));
		
		asMatch = sFormat.match(rxTotalSeconds);
		if (asMatch != null)
			sFormat = sFormat.replace(rxTotalSeconds, cTotalSeconds.toString());
		asMatch = sFormat.match(rxNamedTotalSeconds);
		if (asMatch != null)
			sFormat = sFormat.replace(rxNamedTotalSeconds, cTotalSeconds.toString() + ((cTotalSeconds > 1) ? " seconds" : ((cTotalSeconds > 0) ? " second" : " seconds")));
		asMatch = sFormat.match(rxPartSeconds);
		if (asMatch != null)
			sFormat = sFormat.replace(rxPartSeconds, cPartSeconds.toString());
		asMatch = sFormat.match(rxZeroSeconds);
		if (asMatch != null)
			sFormat = sFormat.replace(rxZeroSeconds, LeadingZero(cPartSeconds.toString(), 2));
		asMatch = sFormat.match(rxNamedPartSeconds);
		if (asMatch != null)
			sFormat = sFormat.replace(rxNamedPartSeconds, cPartSeconds.toString() + ((cPartSeconds > 1) ? " seconds" : ((cPartSeconds > 0) ? " second" : " seconds")));
		sFormatted = sFormat;
		}
	else
		{
		if (ts.valueOf() > 0)
			{
			if (cYears > 0)
				{
				sFormatted += cYears.toString();
				if (cYears > 1)
					sFormatted += " years ";
				else
					sFormatted += " year ";
				}
			if (cPartMonths > 0 && cYears < 2)
				{
				sFormatted += cPartMonths.toString();
				if (cPartMonths > 1)
					sFormatted += " months ";
				else
					sFormatted += " month ";
				}
			if (cPartDays > 0 && cTotalMonths < 2)
				{
				sFormatted += cPartDays.toString();
				if (cPartDays > 1)
					sFormatted += " days ";
				else
					sFormatted += " day ";
				}
			if (cPartHours > 0 && cTotalDays < 2)
				{
				sFormatted += cPartHours.toString();
				if (cPartHours > 1)
					sFormatted += " hours ";
				else
					sFormatted += " hour ";
				}
			if (cPartMinutes > 0 && cTotalHours < 2)
				{
				sFormatted += cPartMinutes.toString();
				if (cPartMinutes > 1)
					sFormatted += " minutes ";
				else
					sFormatted += " minute ";
				}
			if (cPartSeconds >= 0 && cTotalMinutes < 2)
				{
				sFormatted += cPartSeconds.toString();
				if (cPartSeconds > 1 || cPartSeconds == 0)
					sFormatted += " seconds ";
				else
					sFormatted += " second ";
				}
			}
		else
			sFormatted = "0 seconds ";
		}
	return sFormatted;
}

function LeadingZero (s, cch)
{
	var sR = "00" + s;
	return sR.substr(sR.length - cch, cch);
}

function CountdownTimer_RefreshBar(elmBarTimer)
{
	var tmr = window.CountdownTimerInstance;
	var dtmStart = tmr.timerStarts[elmBarTimer.id];
	var dtmStop = tmr.timerStops[elmBarTimer.id];
	var dtmNow = new Date();
	if (dtmNow >= dtmStart)
		{
		if (dtmNow > dtmStop)
			dtmNow = dtmStop
		var nPercent = Math.round(((dtmNow - dtmStart) / (dtmStop - dtmStart)) * 1000) / 10;
		var iCurrentChange = elmBarTimer.timerCurrentChange;
		var elmForeBar = document.getElementById(elmBarTimer.id + "ForeBar");
		if (iCurrentChange >= 0)
			{
			var rgbFore = elmBarTimer.timerChangeForeColor[iCurrentChange];
			var rgbBack = elmBarTimer.timerChangeBackColor[iCurrentChange];
			elmBarTimer.style.backgroundColor = rgbBack;
			elmForeBar.style.backgroundColor = rgbFore;
			}
		elmForeBar.style.width = nPercent.toString() + "%";
		}
}

function CountdownTimer_RefreshImage(elmImageTimer)
{
	var iCurrentChange = elmImageTimer.timerCurrentChange;
	var sImageURL = elmImageTimer.timerChangeImages[iCurrentChange];
	var elmImage = elmImageTimer.childNodes(0);
	elmImage.src = sImageURL;
}
