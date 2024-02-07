$(document).ready(function(){

	if (navigator.appName=="Microsoft Internet Explorer") {
	apprise('You are viewing this on an unsupported browser. You should download <a href="http://apple.com/safari" target="_new">Safari</a>, <a href="http://firefox.com" target="_new">Firefox</a> or <a href="http://google.com/chrome" target="_new">Chrome</a>. If you continue certain aspects of the site may be distorted or work improperly due to lack of HTML5 and CSS3 standards.', {'verify':true,'textYes':'Ok, I understand let me in!', 'textNo':'Cancel'}); }
  
	$('.click').toggle(function(){
		$(this).addClass('flip');
	},function(){
		$(this).removeClass('flip');
	});
	$('.block .front').click(function(){
		$('.block').addClass('flip');
	});
	$('.block .back').click(function(e){
		$('.block').removeClass('flip');
	});	
	$('.one').click(function(e){
		$('.details2').removeClass('right-panel-show');
		$('.details3').removeClass('right-panel-show');
		$('.details4').removeClass('right-panel-show');
		$('.details5').removeClass('right-panel-show');
		$('.details6').removeClass('right-panel-show');
		$('.details7').removeClass('right-panel-show');
		$('.two').removeClass('insetshadow');
		$('.three').removeClass('insetshadow');
		$('.four').removeClass('insetshadow');
		$('.five').removeClass('insetshadow');
		$('.six').removeClass('insetshadow');
		$('.seven').removeClass('insetshadow');
		$('.one').addClass('insetshadow');
		$('.pig').addClass('pigfly');
		$('.details1').addClass('right-panel-show');
	});
	$('.two').click(function(e){
		$('.details1').removeClass('right-panel-show');
		$('.details3').removeClass('right-panel-show');
		$('.details4').removeClass('right-panel-show');
		$('.details5').removeClass('right-panel-show');
		$('.details6').removeClass('right-panel-show');
		$('.details7').removeClass('right-panel-show');
		$('.details2').addClass('right-panel-show');
		$('.two').addClass('insetshadow');
		$('.three').removeClass('insetshadow');
		$('.four').removeClass('insetshadow');
		$('.five').removeClass('insetshadow');
		$('.six').removeClass('insetshadow');
		$('.seven').removeClass('insetshadow');
		$('.one').removeClass('insetshadow');
		$('.pop').addClass('popfly');
		$('.caption2').addClass('captionfly');
	});
	$('.three').click(function(e){
		$('.details1').removeClass('right-panel-show');
		$('.details2').removeClass('right-panel-show');
		$('.details4').removeClass('right-panel-show');
		$('.details5').removeClass('right-panel-show');
		$('.details6').removeClass('right-panel-show');
		$('.details7').removeClass('right-panel-show');
		$('.details3').addClass('right-panel-show');
		$('.two').removeClass('insetshadow');
		$('.three').addClass('insetshadow');
		$('.four').removeClass('insetshadow');
		$('.five').removeClass('insetshadow');
		$('.six').removeClass('insetshadow');
		$('.seven').removeClass('insetshadow');
		$('.one').removeClass('insetshadow');
		$('.def').addClass('deffly');
	});
	$('.four').click(function(e){
		$('.details1').removeClass('right-panel-show');
		$('.details2').removeClass('right-panel-show');
		$('.details3').removeClass('right-panel-show');
		$('.details5').removeClass('right-panel-show');
		$('.details6').removeClass('right-panel-show');
		$('.details7').removeClass('right-panel-show');
		$('.details4').addClass('right-panel-show');
		$('.two').removeClass('insetshadow');
		$('.three').removeClass('insetshadow');
		$('.four').addClass('insetshadow');
		$('.five').removeClass('insetshadow');
		$('.six').removeClass('insetshadow');
		$('.seven').removeClass('insetshadow');
		$('.one').removeClass('insetshadow');
		$('.time').addClass('timefly');
		$('.caption1').addClass('captionfly');
	});
	$('.five').click(function(e){
		$('.details1').removeClass('right-panel-show');
		$('.details2').removeClass('right-panel-show');
		$('.details3').removeClass('right-panel-show');
		$('.details4').removeClass('right-panel-show');
		$('.details6').removeClass('right-panel-show');
		$('.details7').removeClass('right-panel-show');
		$('.details5').addClass('right-panel-show');
		$('.two').removeClass('insetshadow');
		$('.three').removeClass('insetshadow');
		$('.four').removeClass('insetshadow');
		$('.five').addClass('insetshadow');
		$('.six').removeClass('insetshadow');
		$('.seven').removeClass('insetshadow');
		$('.one').removeClass('insetshadow');
		$('.dog').addClass('dogfly');
		$('.caption3').addClass('captionfly');
	});
	$('.six').click(function(e){
		$('.details1').removeClass('right-panel-show');
		$('.details2').removeClass('right-panel-show');
		$('.details3').removeClass('right-panel-show');
		$('.details4').removeClass('right-panel-show');
		$('.details5').removeClass('right-panel-show');
		$('.details7').removeClass('right-panel-show');
		$('.two').removeClass('insetshadow');
		$('.three').removeClass('insetshadow');
		$('.four').removeClass('insetshadow');
		$('.five').removeClass('insetshadow');
		$('.six').addClass('insetshadow');
		$('.seven').removeClass('insetshadow');
		$('.one').removeClass('insetshadow');
		$('.details6').addClass('right-panel-show');
		$('.cron').addClass('cronfly');
	});
	$('.seven').click(function(e){
		$('.details1').removeClass('right-panel-show');
		$('.details2').removeClass('right-panel-show');
		$('.details3').removeClass('right-panel-show');
		$('.details4').removeClass('right-panel-show');
		$('.details5').removeClass('right-panel-show');
		$('.details6').removeClass('right-panel-show');
		$('.two').removeClass('insetshadow');
		$('.three').removeClass('insetshadow');
		$('.four').removeClass('insetshadow');
		$('.five').removeClass('insetshadow');
		$('.six').removeClass('insetshadow');
		$('.seven').addClass('insetshadow');
		$('.one').removeClass('insetshadow');
		$('.details7').addClass('right-panel-show');
		$('.birth').addClass('birthfly');
	});
	$('.contact .front').click(function(e){
		$('.contact').addClass('flip');
		e.preventDefault();
	});
	$('.contact .back').click(function(e){
		$('.contact').removeClass('flip');
	});
	$('#panelmove').toggle(
		function(){
		document.getElementById("panel").style.marginLeft = 0 + "px";
		document.getElementById("stuff").style.marginLeft = 201 + "px";	
		},
		function(){
		document.getElementById("panel").style.marginLeft = -201 + "px";
		document.getElementById("stuff").style.marginLeft = 0 + "px";	
	});
	
	$('#dropdown').toggle(
		function(){
		$('.submenu').removeClass('hdmnu');
		$('.hideshadow').removeClass('hdmnu');
		$('.submenu').addClass('showmnu');
		$('.nav-link-prod').addClass('active');		
		},
		function(){
		$('.submenu').addClass('hdmnu');
		$('.hideshadow').addClass('hdmnu');
		$('.submenu').removeClass('showmnu');
		$('.nav-link-prod').addClass('active');	
	});
	
	$('#send').click(function(e){
		$('#contact').submit();
	});

	$('#back').click(function(e){
		setTimeout(function() { $('#check').addClass('check'); }, 1000);
		document.getElementById("formpush").style.marginLeft = 0 + "px";	
		document.getElementById("thankyou").style.marginRight = -340 + "px";
		resetForm('contact');
		clearme();
	});
	
	$('#popuplink').toggle(
		function(){
		$('.pigreview').removeClass('hide');
		$('.pigreview').addClass('show');	
		},
		function(){
		$('.pigreview').removeClass('show');
		$('.pigreview').addClass('hide');	
	});
	
	$('#macupdate-pig').click(function(){
	  window.open('http://www.macupdate.com/app/mac/23040/pig-latin-translator', '_new');
	  return false;
	});
	
	$('#dbwidget-pig').click(function(){
	  window.open('http://www.dashboardwidgets.com/showcase/details.php?wid=1832', '_new');
	  return false;
	});

	$('#check').click(function(e){
		var yourmail = document.getElementById("email").value;
		
		if(document.getElementById("check").style.backgroundPosition == '9px -92px') { 
		apprise('Your email is valid, thank you.', {'confirm':true});
		} else if(document.getElementById("check").style.backgroundPosition == '9px -46px') {
		apprise('<center>Your email <b> '+yourmail+' </b>is not valid</center> <br>A valid email is required, please enter a valid email address and try again.', {'confirm':true});
		document.getElementById("email").value = '';
		document.getElementById("check").style.backgroundPosition = '9px 0px';
		} else {
		apprise('Please enter a valid email.', {'confirm':true});
		}
	});
	
	$("#contact").submit(function(){
         var thistarget = this.target;
         var protect = document.getElementById("names").value;
         if(document.getElementById("check").style.backgroundPosition == '9px -92px') {
         jQuery.ajax({
             data: $(this).serialize(),
             url: this.action,
             type: this.method,
             error: function() {
                 // $(thistarget).html("<span class='error'>Failed to submit form!</span>");
             },
             success: function(results) {
                 // $(thistarget).html(results);
                if(protect=='') { document.getElementById("success").innerHTML = "Your message has been sent"; } else { document.getElementById("success").innerHTML = "Please don't send me spam, thank you."; }
			    $('#check').removeClass('check');
				document.getElementById("formpush").style.marginLeft = -380 + "px";	
				document.getElementById("thankyou").style.marginRight = 30 + "px";
				setTimeout(function() { $("#back").click(); }, 9000);
             }
         })
         return false;
         } else { apprise('A valid email is required, <br>please enter a valid email<br> address and try again.', {'confirm':true}); return false; }
       }
    );
    
	$('.pix_diapo').diapo({loaderColor:'#c4ccda',time:10000,autoAdvance:false,mobileAutoAdvance:false,});
    $('.one').addClass('insetshadow');
	$('.pig').addClass('pigfly');
	$('.details1').addClass('right-panel-show');
		
		 var h = document.getElementById("body-div").offsetHeight;
	     document.getElementById("panel").style.height = h + "px";
	     document.getElementById("panel-shadow").style.height = h + "px";
	     
	     function resetForm(id) {
				$('#'+id).each(function(){
				this.reset();
				});
		}
		 
});
function validateEmail($email) {
	var emailReg = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if( !emailReg.test( $email ) ) {
		document.getElementById("check").style.backgroundPosition = '9px -46px';
	} else {
		document.getElementById("check").style.backgroundPosition = '9px -92px';
	}
}

function validate() {
		var checkme = document.getElementById("email").value;
		validateEmail(checkme);
}	
function clearme() {
	document.getElementById("check").style.backgroundPosition = '9px 0px';
}
function setHeight() {
	document.getElementById('wrapper').style.height = 400 + 'px';
	document.getElementById('newsarea').style.height = 300 + 'px';
}
var myScroll;
var myScrollNews;
function loaded() {
	setHeight();
	myScroll = new iScroll('wrapper',{hideScrollbar: true, fadeScrollbar: true});
	myScrollNews = new iScroll('newsarea',{hideScrollbar: true, fadeScrollbar: true});
}
document.addEventListener('DOMContentLoaded', loaded, false);
//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
//document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
//window.addEventListener('load', setTimeout(function () { loaded(); }, 200), false);