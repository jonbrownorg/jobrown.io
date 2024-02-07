// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
    
    
    
    window.onload = function() { 
  var el = document.getElementById('g-recaptcha-response'); 
  if (el) { 
    el.setAttribute('required', 'required'); 
  } 
}

var phoneNum = document.getElementById("contact_phone");
    if(phoneNum){
        document.getElementById('contact_phone').addEventListener('input', function (e) {
		  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
		  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
		});
    }
    
var phoneNumApply = document.getElementById("apply_phone");
    if(phoneNumApply){
        document.getElementById('apply_phone').addEventListener('input', function (e) {
		  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
		  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
		});
    }
    

var formCONTACT = document.getElementById("form-contact");
    if(formCONTACT){
		var form_contact = document.getElementById("form-contact");

		async function handleSubmit(event) {
			  event.preventDefault();
			  var status = document.getElementById("response-message");
			  var data = new FormData(event.target);
			  fetch(event.target.action, {
				method: form_contact.method,
				body: data,
				headers: {
					'Accept': 'application/json'
				}
			  }).then(response => {
			    document.getElementById("form-contact").style.display = "none";
				status.innerHTML = "<div class=\"section-heading text-center mt-10 mb-10\"><h2>Thank you for contacting Grove Technologies!</h2><p>Your message has been sent, we will reply back to your message you as soon as possible. If this is an emergency please call 888-253-9103.</p></div>";
				form_contact.reset();
			  }).catch(error => {
				status.innerHTML = "There was a problem submitting your form";
			  });
			}
			form_contact.addEventListener("submit", handleSubmit)
    }
    
var formAPPLY = document.getElementById("form-apply");
    if(formAPPLY){
		var form_apply = document.getElementById("form-apply");
		
		async function handleSubmit(event) {
			  event.preventDefault();
			  var status = document.getElementById("response-message-apply");
			  var data = new FormData(event.target);
			  fetch(event.target.action, {
				method: form_apply.method,
				body: data,
				headers: {
					'Accept': 'application/json'
				}
			  }).then(response => {
			    
				status.innerHTML = "<div class=\"section-heading text-center mt-10 mb-10\"><h2>Thank you for applying to Grove Technologies!</h2><p>Your message has been sent, we will reply back to your message you as soon as possible. If this is an emergency please call 888-253-9103.</p></div>";
				form_apply.reset();
			  }).catch(error => {
				status.innerHTML = "There was a problem submitting your form";
			  });
			}
			form_apply.addEventListener("submit", handleSubmit)
    }
      
var priceToggle = document.getElementById("toggle");
if(priceToggle){
document.querySelector("#toggle").addEventListener("click", function() {

var element = document.getElementById("modelstarter");
var element2 = document.getElementById("modelbusiness");
element.classList.add("hiddenpr");	
element2.classList.add("hiddenpr");	  	
    	
  document.querySelectorAll(".price-yearly, .price-monthly")
    .forEach(function(elem) {
      elem.classList.toggle('hiddenpr')
    })
})
}

var Pushwoosh = Pushwoosh || [];
	Pushwoosh.push(['init', {
    logLevel: 'info', // possible values: error, info, debug
    applicationCode: 'A35F6-C4EAE', // you application code from Pushwoosh Control Panel
    safariWebsitePushID: 'web.macgurus.site', //  unique reverse-domain string, obtained in you Apple Developer Portal. Only needed if you send push notifications to Safari browser
    defaultNotificationTitle: 'Subscribe to Grove Technologies Notifications', // sets a default title for push notifications
    defaultNotificationImage: '{{ site.site_cdn }}/assets/img/favicons/android-chrome-192x192.png', // URL to custom custom notification image
    autoSubscribe: false, // or true. If true, prompts a user to subscribe for pushes upon SDK initialization
    subscribeWidget: {
      enabled: true
    }										
}]);


// Listen for click on the document
document.addEventListener('click', function (event) {
  
  //Bail if our clicked element doesn't have the class
  if (!event.target.classList.contains('accordion-toggle')) return;
  
  // Get the target content
  var content = document.querySelector(event.target.hash);
  if (!content) return;
  
  // Prevent default link behavior
  event.preventDefault();
  
  // If the content is already expanded, collapse it and quit
  if (content.classList.contains('active')) {
    content.classList.remove('active');
    return;
  }
  
  // Get all open accordion content, loop through it, and close it
  var accordions = document.querySelectorAll('.accordion-content.active');
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove('active');
  }
  
  // Toggle our content
  content.classList.toggle('active');
})
    
});

