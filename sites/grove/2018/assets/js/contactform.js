document.getElementById('phone').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

function contactme() {
            var $contactForm = $('#contact-form');
	$contactForm.submit(function(e) {
		e.preventDefault();
		$.ajax({
			url: 'https:#',
			method: 'POST',
			data: $(this).serialize(),
			dataType: 'json',
	beforeSend: function() {
				alertify.logPosition("bottom right");
				alertify.log("Sending message...");
			},
	success: function(data) {
				alertify.success("Message sent!");
				document.getElementById("contact-form").reset();
			},
	error: function(err) {
				alertify.logPosition("bottom right");
				alertify.success("Message sent!");
			}
		});
	});
        }
        
validate.init({

	// Classes and Selectors
	selector: '[data-validate]', // The selector for forms to validate
	fieldClass: 'error', // The class to apply to fields with errors
	errorClass: 'error-message', // The class to apply to error messages

	// Messages
	messageValueMissing: 'Please fill out this field.', // Displayed when a required field is left empty
	messageTypeMismatchEmail: 'Please enter an email address.', // Displayed when a `type="email"` field isn't a valid email
	messageTypeMismatchURL: 'Please enter a URL.', // Displayed when a `type="url"` field isn't a valid URL
	messageTooShort: 'Please lengthen this text to {minLength} characters or more. You are currently using {length} characters.', // Displayed with the `minLength` attribute is used and the input value is too short
	messageTooLong: 'Please shorten this text to no more than {maxLength} characters. You are currently using {length} characters.', // Displayed with the `maxLength` attribute is used and the input value is too long
	messagePatternMismatch: 'Please match the requested format.', // Displayed with the `pattern` attribute is used and the pattern doesn't match (if a `title` attribute is used, that's displayed instead)
	messageBadInput: 'Please enter a number.', // Displayed when the field is numeric (ex. `type="number"`) but the value is not a number
	messageStepMismatch: 'Please select a valid value.', // Displayed when the `step` attribute is used and the value doesn't adhere to it
	messageRangeOverflow: 'Please select a value that is no more than {max}.', // Displayed with the `max` attribute is used and the input value is too hight
	messageRangeUnderflow: 'Please select a value that is no less than {min}.', // Displayed with the `mind` attribute is used and the input value is too low
	messageGeneric: 'The value you entered for this field is invalid.', // A catchall error, displayed when the field fails validation and none of the other conditions apply

	// Form Submission
	disableSubmit: true, // If true, don't submit the form to the server (for Ajax for submission)
	onSubmit: function (form, fields) { contactme(); }, // Function to run if the form successfully validates

	// Callbacks
	beforeShowError: function (field, error) {}, // Function to run before an error is display
	afterShowError: function (field, error) {}, // Function to run after an error is display
	beforeRemoveError: function (field) {}, // Function to run before an error is removed
	afterRemoveError: function (field) {}, // Function to run after an error is removed

});