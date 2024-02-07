window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#252e39"
    },
    "button": {
      "background": "#14a7d0"
    }
  },
  "position": "bottom-left",
  "type": "opt-out",
  "content": {
    "href": "/sites/grove/2018/privacy/"
  },


 
onStatusChange: function(status, chosenBefore) {
  if (this.hasAnswered() && this.hasConsented()) {
      setTimeout(function(){ window.location.reload(true) }, 100);
          // Put Your Google Analytics Tracking Code here
          
          window['ga-disable-UA-120080861-1'] = false;
  
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-120080861-1');
  
	  }    
  
  
},
 
onRevokeChoice: function() {

window['ga-disable-UA-120080861-1'] = true;

		if(!document.__defineGetter__) {
    		Object.defineProperty(document, 'cookie', {
        		set: function(){ return true; }
    			});
			}
	 	else {
	     	document.__defineSetter__("cookie", function() {} );
		 	}
		 	
    function clearCookie(d,b,c){try{if(function(h){var e=document.cookie.split(";"),a="",f="",g="";for(i=0;i<e.length;i++){a=e[i].split("=");f=a[0].replace(/^\s+|\s+$/g,"");if(f==h){if(a.length>1)g=unescape(a[1].replace(/^\s+|\s+$/g,""));return g}}return null}(d)){b=b||document.domain;c=c||"/";document.cookie=d+"=; expires="+new Date+"; domain="+b+"; path="+c}}catch(j){}};
	clearCookie('hubspotutk','. grovetech.co','/');
	clearCookie('__hstc','. grovetech.co','/');
	clearCookie('__hssrc','. grovetech.co','/');
	clearCookie('__hssc','. grovetech.co','/');
	clearCookie('__cfduid','. grovetech.co','/');
	clearCookie('_ga','. grovetech.co','/');
	clearCookie('_gat_gtag_UA_120080861_1','. grovetech.co','/');
	clearCookie('_gid','. grovetech.co','/');
	
	clearCookie('hubspotutk','grovetech.co','/');
	clearCookie('__hstc','grovetech.co','/');
	clearCookie('__hssrc','grovetech.co','/');
	clearCookie('__hssc','grovetech.co','/');
	clearCookie('__cfduid','grovetech.co','/');
	clearCookie('_ga','grovetech.co','/');
	clearCookie('_gat_gtag_UA_120080861_1','grovetech.co','/');
	clearCookie('_gid','grovetech.co','/');
	
	clearCookie('__atuvc','.google.com','/');
	clearCookie('__atuvc','.google.com','/');
	
	clearCookie('hubspotutk','. 127.0.0.1','/');
	clearCookie('__hstc','. 127.0.0.1','/');
	clearCookie('__hssrc','. 127.0.0.1','/');
	clearCookie('__hssc','. 127.0.0.1','/');
	clearCookie('_ga','. 127.0.0.1','/');
	clearCookie('_gat_gtag_UA-120080861-1','. 127.0.0.1','/');
	clearCookie('_gid','.127.0.0.1','/');
	clearCookie('__atuvc','.google.com','/');
	clearCookie('__atuvc','.google.com','/');
	
	setTimeout(function(){ window.location.reload(true) }, 100);
	
}
})});