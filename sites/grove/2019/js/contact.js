$(document).ready(function() {

$('#form-contact').on('submit', function(e) {

		e.preventDefault();
		
		//get the name field value
		var subject = $('#contact_subject').val();
		//get the name field value
		var email = $('#contact_email').val();
		//get the comments
		var comments = $('#contact_message').val();
					
		//pretend we don't need validation
		
		//send to formspree
		$.ajax({
			url:'https://formspree.io/xylrgbym',
			method:'POST',
			data:{
				_replyto:email,
				 email:email,
				comments:comments,
				_subject:subject,
			},
			dataType:"json",
			success:function() {
				console.log('success');	
				$('#form-contact').hide(1000);
				$("#response-message").removeClass("response-message");
				$('#response-message').show(1000);
			}	

		});		
		
	});

$('#form-contact-gated').on('submit', function(e) {

		e.preventDefault();
		
		//get the name field value
		var subject = $('#contact_subject_gated').val();
		//get the name field value
		var email = $('#contact_email_gated').val();
		//get the comments
		var comments = $('#contact_message_gated').val();
					
		//pretend we don't need validation
		
		//send to formspree
		$.ajax({
			url:'https://formspree.io/xylrgbym',
			method:'POST',
			data:{
				_replyto:email,
				 email:email,
				comments:comments,
				_subject:subject,
			},
			dataType:"json",
			success:function() {
				console.log('success');	
				$('#form-contact-gated').hide(1000);
				$("#response-message-gated").removeClass("response-message");
				$('#response-message-gated').show(1000);
			}	

		});		
		
	});

$('#form-refer').on('submit', function(e) {

		e.preventDefault();
		
		//get the name field value
		var subject = $('#contact_subject').val();
		//get the name field value
		var email = $('#contact_email').val();
		//get the comments
		var comments = $('#contact_message').val();
		var clientname = $('#contact_clientname').val();
		var clientphone = $('#contact_clientphone').val();
		//pretend we don't need validation
		
		//send to formspree
		$.ajax({
			url:'https://formspree.io/xakdneyx',
			method:'POST',
			data:{
				_replyto:email,
				 email:email,
				comments:comments,
				_subject:subject,				
				clientname:clientname,
				clientphone:clientphone,
			},
			dataType:"json",
			success:function() {
				console.log('success');	
				$('#form-refer').hide(1000);
				$("#response-message").removeClass("response-message");
				$('#response-message').show(1000);
			}	

		});		
		
	});



});	