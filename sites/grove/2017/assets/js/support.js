 function execute() {
            alertify.logPosition("bottom right");
			alertify.log("Opening Ticket...");
            setTimeout(hidegif, 3000);
        }
        function hidegif() {
            alertify.success("Ticket Opened!");
            document.getElementById("support-form").reset();
        }
        
        
window.addEventListener("load", function () {
  function sendData() {
    var XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    var FD = new FormData(form);

    // Define what happens on successful data submission
    XHR.addEventListener("load", function(event) {
      //alert(event.target.responseText);
    });

    // Define what happens in case of error
    XHR.addEventListener("error", function(event) {
     alertify.log("Something went wrong, ticket not opened...");
    });

    // Set up our request
    XHR.open("POST", "https://macgurus.kayako.com/api/v1/conversations.json");

    // The data sent is what the user provided in the form
    XHR.send(FD);
  }
 
  // Access the form element...
  var form = document.getElementById("support-form");

  // ...and take over its submit event.


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
	onSubmit: function (form, fields) { execute(); sendData(); }, // Function to run if the form successfully validates

	// Callbacks
	beforeShowError: function (field, error) {}, // Function to run before an error is display
	afterShowError: function (field, error) {}, // Function to run after an error is display
	beforeRemoveError: function (field) {}, // Function to run before an error is removed
	afterRemoveError: function (field) {}, // Function to run after an error is removed

});
                                                      
                                                      

});