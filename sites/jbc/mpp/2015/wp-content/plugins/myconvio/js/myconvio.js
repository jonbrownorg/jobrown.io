/* myconvio.js
 *
 * My-Convio WordPress Plugin
 * Built for MPP
 * By Jon Brown, IT Director, MPP.
 *
 */

jQuery(document).ready(function($) {

	
	$.validator.addMethod("phoneUS", function(phone_number, element) {
		phone_number = phone_number.replace(/\s+/g, ""); 
		return this.optional(element) || phone_number.length > 9 &&
//			phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
			phone_number.match(/^\d{3}-\d{3}-\d{4}$/);
	}, "Please specify a valid phone number");

	
	
	$.validator.addMethod("zip", function(zip, element) {
		return this.optional(element) || zip.match(/^\d{5}(-\d{4})?$/);
	}, "Please specify a valid zip code");


	
	// Remove any unwanted <p> tags WP TinyMCE added to textareas
	$('form[name="myconvio_advocacyAlert"] textarea').each( function(){
		var tagMatcher = new RegExp('</?p>','g');
		var tempString = $(this).text().replace(tagMatcher, '');
		$(this).text(tempString);
	});
	
	$('input[name="email"]').addClass("email");
	$('input[name="phone"]').addClass("phoneUS").after("<span class='inputHelp'> (format: 555-555-5555)</span>");
	$('input[name="zip"]').addClass("zip");
	
	$('form[name="myconvio_advocacyAlert"]').validate();

/* remove for page post method
	$('form[name="myconvio_advocacyAlert"]').submit( function() {
		if( $(this).valid() ) {
	
//			var formData = $(this).serialize();
			var formData = "&" + $(this).serialize();

			$(this).find('select').each( function(){
				formData += "&" + $(this).attr('name') + "=" + encodeURIComponent( $(this).val() );
			});

			$(this).find("input[type='checkbox']").each( function(){
				if( $(this).attr('checked') != 'checked' ) {
					formData += "&" + $(this).attr('name') + "=false";
				}
			});
			
*/			
/*			
			var ajaxData = {
				parameters:		formData
			};

			$.ajax({
				url: 'convio_ajax.php',
				type: 'POST',
				data: ajaxData,
				dataType: 'json',
				cache: false,
				success: function(response, status, xhr) {

					//var response = $.parseJSON(data);
					console.log(response);
					alert('success' + response);
				
				},
				error: function(jqXHR, textStatus, errorThrown) {
					alert('error');
				}
			});
			
*/			

/* jsonp doesnt work in FF or IE
			var submitAlertURL = convio_url + "/site/CRAdvocacyAPI?method=takeAction&api_key=" + convio_api + "&v=1.0&response_format=json";
			submitAlertURL += formData;
			
				submitAlertURL += "&callback=?"
				$.post(
					submitAlertURL,
					function(data, textStatus, jqXHR) {
						alert(data);
						$(".myconvio_advocacyAlert_container").hide();
						window.location.hash = "advocacyThankyouPosition";
						$("#advocacyThankyou").show();
					},
					'jsonp'
				);

*/

			
/*			
// works in FF

			var submitAlertURL = convio_url + "/site/CRAdvocacyAPI?method=takeAction&api_key=" + convio_api + "&v=1.0&response_format=json";
			submitAlertURL += formData;

			$("#advocacySubmit").hide();
			$("#advocacySubmitting").show();
			
			
			
			if ($.browser.msie && window.XDomainRequest) {
				var xdr = new XDomainRequest();
				xdr.open("POST", submitAlertURL);
				xdr.onload = function() {
					alert(xdr.responseText);
				};
				xdr.send();
			} else {
			
				$.post(submitAlertURL,
					function(data) {
						$(".myconvio_advocacyAlert_container").hide();
						window.location.hash = "advocacyThankyouPosition";
						$("#advocacyThankyou").show();
					}
				);
			
			}
		
			
			
			
			
			
		
/*
			var submitAlertURL = convio_url + "/site/CRAdvocacyAPI?method=takeAction&api_key=" + convio_api + "&v=1.0&response_format=json";
			submitAlertURL += formData;
			console.log( submitAlertURL );

			$("#advocacySubmit").hide();
			$("#advocacySubmitting").show();

			$.post(submitAlertURL,
				function(data) {
					$(".myconvio_advocacyAlert_container").hide();
					window.location.hash = "advocacyThankyouPosition";
					$("#advocacyThankyou").show();
				}
			);
*/










/*
		}
		
		return false;
	});
*/
});