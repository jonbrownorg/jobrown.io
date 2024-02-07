if(!self.getHTTPObject) {
  function getHTTPObject() {
    var xmlhttp;
    var container;
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
      try {
        xmlhttp = new XMLHttpRequest();
      } catch (e) {
        xmlhttp = false;
    	}
    } else {
      try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
          xmlhttp = false;
        }
      }
		}		
    return xmlhttp;
  }
}

var podPressHttp = getHTTPObject();
var podPressDivName = '';

function podPressLoadPageIntoDiv(divname, params) {
	podPressDivName = divname;
	/* document.getElementById(divname).innerHTML=''; */
	podPressHttp.open("GET", podPressBackendURL+params, true);
	podPressHttp.onreadystatechange = function xx () { if (podPressHttp.readyState == 4) { document.getElementById(divname).innerHTML=podPressHttp.responseText; } }		
	podPressHttp.send(null);	
}

function podPressLoadPageIntoDiveHandler() {
 	if (podPressHttp.readyState == 4) {
		document.getElementById(podPressDivName).innerHTML=podPressHttp.responseText;
	}
}

function podPressShowHidePlayerDiv(divname, oftype, dimensionSetting, mediaFile, forceShow) {
	if(document.getElementById(divname).title != '' && document.getElementById(divname).title != oftype) {
		var prev_oftype = document.getElementById(divname).title;
		if(document.getElementById(divname+'_label_'+prev_oftype) != undefined) {
			document.getElementById(divname+'_label_'+prev_oftype).innerHTML=podPressText_PlayNow;
		}
	}
	document.getElementById(divname).title = oftype;
	
	if(forceShow == 'yes') {
		document.getElementById(divname+'_label_'+oftype).innerHTML=podPressText_HidePlayer;
		document.getElementById(divname).style.display='block';
		podPressLoadPageIntoDiv(divname, 'podPressPlayerAutoPlay=yes&standalone=no&action=showplayer&dimension='+dimensionSetting+'&filename='+mediaFile);		
	} else {
		if(document.getElementById(divname+'_label_'+oftype).innerHTML == podPressText_PlayNow) {
			document.getElementById(divname+'_label_'+oftype).innerHTML=podPressText_HidePlayer;
			document.getElementById(divname).style.display='block';
			podPressLoadPageIntoDiv(divname, 'podPressPlayerAutoPlay=yes&standalone=no&action=showplayer&dimension='+dimensionSetting+'&filename='+mediaFile);		
		} else {
			if(document.getElementById('winplayer') != undefined) {
				if(document.getElementById('winplayer').controls) {
					document.getElementById('winplayer').controls.stop();
				}
				document.getElementById(divname+'_label_'+oftype).innerHTML=podPressText_PlayNow;
				document.getElementById(divname).style.display='none';
			} else {
				document.getElementById(divname+'_label_'+oftype).innerHTML=podPressText_PlayNow;
				document.getElementById(divname).style.display='none';
				document.getElementById(divname).innerHTML='';
			}
		}
	}
}

function podPressCustomSelectVal(select_elm, prompt_text){
	var val = prompt(prompt_text, '');
	var option = document.createElement('option');
	option.setAttribute('value', val);
	option.innerHTML = val;
	option.selected = true;
	select_elm.appendChild(option);
}

if(ap_instances == undefined) {
	var ap_instances = new Array();
	var ap_clearID = setInterval( ap_registerPlayers, 100 );
}
	
function ap_registerPlayers() {
	var objectID;
	var objectTags = document.getElementsByTagName('object');
	for(var i=0;i<objectTags.length;i++) {
		objectID = objectTags[i].id;
	if(objectID.indexOf('audioplayer') == 0) {
			ap_instances[i] = objectID.substring(11, objectID.length);
		}
	}
}

function ap_stopAll(playerID) {
	for(var i = 0;i<ap_instances.length;i++) {
		try {
			if(ap_instances[i] != playerID) { 
				document.getElementById('audioplayer' + ap_instances[i].toString()).SetVariable('closePlayer', 1);
			}	else {
				document.getElementById('audioplayer' + ap_instances[i].toString()).SetVariable('closePlayer', 0);
			}
		} catch( errorObject ) {
			// stop any errors
		}
	}
}