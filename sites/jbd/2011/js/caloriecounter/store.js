var total = 4.0; // Dollars
var discount = 99.9; // Percentage
var gst = 0.0; // Percentage
var pst = 0.0; // Percentage
var gstValue = 0.0; // Dollars
var pstValue = 0.0; // Dollars

var correctSN;

function checkfirstname() {

var incomplete = false;
    
    var nameField = document.getElementById("as-name");
    if(nameField.value < 5){
        incomplete = true
        nameField.style.backgroundImage = "url(images/snfail.png)";
    }else{
        nameField.style.backgroundImage = "url(images/check.jpg)";    
    }

       
    if(incomplete){
        
    }

}



function checklastname() {

var incomplete = false;
    
    var lnameField = document.getElementById("as-lname");
    if(lnameField.value < 5){
        incomplete = true
        lnameField.style.backgroundImage = "url(images/snfail.png)";
    }else{
        lnameField.style.backgroundImage = "url(images/check.jpg)";    
    }

       
    if(incomplete){
        
    }

}



function checkemail() {

var incomplete = false;
    
var emailField = document.getElementById("as-email");
    if(isValidEmail(emailField.value) == false){
        incomplete = true
        emailField.style.backgroundImage = "url(images/snfail.png)";
    }else{
        emailField.style.backgroundImage = "url(images/check.jpg)";     
    }
       
    if(incomplete){
        
    }

}




function checkadd() {

var incomplete = false;
    
 var addressField = document.getElementById("as-address");
    if(addressField.value < 3){
        incomplete = true
        addressField.style.backgroundImage = "url(images/snfail.png)";
    }else{
        addressField.style.backgroundImage = "url(images/check.jpg)";    
    }
       
    if(incomplete){
        
    }

}



function checkcity() {

var incomplete = false;
    
    var cityField = document.getElementById("as-city");
    if(cityField.value < 3){
        incomplete = true
        cityField.style.backgroundImage = "url(images/snfail.png)";
    }else{
        cityField.style.backgroundImage = "url(images/check.jpg)";     
    }
       
    if(incomplete){
        
    }

}

function checkstate() {

var incomplete = false;
    
var provinceField = document.getElementById("as-province");
    if(provinceField.value < 3){
        incomplete = true
        provinceField.style.backgroundImage = "url(images/snfail.png)";
    }else{
        provinceField.style.backgroundImage = "url(images/check.jpg)";     
    }
       
    if(incomplete){
        
    }

}


function validateForm(){
    // Validate form
    // Check all forms filled out

    var incomplete = false;
    
    var nameField = document.getElementById("as-name");
    if(nameField.value < 5){
        incomplete = true
        nameField.style.backgroundImage = "url(images/snfail.png)";
    }else{
        nameField.style.backgroundImage = "url(images/check.jpg)";    
    }

    var lnameField = document.getElementById("as-lname");
    if(lnameField.value < 5){
        incomplete = true
        lnameField.style.backgroundImage = "url(images/snfail.png)";
    }else{
        lnameField.style.backgroundImage = "url(images/check.jpg)";    
    }
    
    var emailField = document.getElementById("as-email");
    if(isValidEmail(emailField.value) == false){
        incomplete = true
        emailField.style.backgroundImage = "url(images/snfail.png)";
    }else{
        emailField.style.backgroundImage = "url(images/check.jpg)";     
    }

    var addressField = document.getElementById("as-address");
    if(addressField.value < 3){
        incomplete = true
        addressField.style.backgroundImage = "url(images/snfail.png)";
    }else{
        addressField.style.backgroundImage = "url(images/check.jpg)";    
    }

    var cityField = document.getElementById("as-city");
    if(cityField.value < 3){
        incomplete = true
        cityField.style.backgroundImage = "url(images/snfail.png)";
    }else{
        cityField.style.backgroundImage = "url(images/check.jpg)";     
    }

    var countryField = document.getElementById("as-country");

    var provinceField = document.getElementById("as-province");
    if(provinceField.value < 3){
        incomplete = true
        provinceField.style.backgroundImage = "url(images/snfail.png)";
    }else{
        provinceField.style.backgroundImage = "url(images/check.jpg)";     
    }
    
    if(incomplete){
        alert("Please fix all marked fields before continuing.");
        return;
    }
        
    // Check PROVINCE
    // Add sales tax
    // Update custom field
    updateProvince();
    
    var fieldValue = nameField.value + ":" + emailField.value + ":" + addressField.value + ":" + cityField.value + ":" + countryField.value + ":" + provinceField.value + ":" + formatCurrency(pstValue) + ":" + formatCurrency(gstValue);
    
    document.getElementById("custom").value = fieldValue;
    
    // Submit on completion

    var firstname = document.getElementById("as-name").value;
    var lastname = document.getElementById("as-lname").value;
    var address = document.getElementById("as-address").value;
    var city = document.getElementById("as-city").value;
    var state = document.getElementById("as-province").value;

    document.getElementById("first_name").value = firstname;
    document.getElementById("last_name").value = lastname;
    document.getElementById("address1").value = address;
    document.getElementById("address2").value = "";
    document.getElementById("city").value = city;
    document.getElementById("state").value = state;

    document.getElementById("totaltotal").innerHTML = "<div id=processing><img src=\"http://www.jonbrown.org/images/loadme.gif\"> Processing Order</div>";
    document.getElementById("submit_button").style.display = "none";	
    document.getElementById("discount").style.display = "none";
    document.getElementById("gst").style.display = "none";
    document.getElementById("pst").style.display = "none";
    
    document.getElementById("checkout").submit();
}


function updateValue(id){
    document.getElementById("item_type").value = id;
    
    if(id == "single"){
        //document.getElementById("purchaseIcon").src = "wallet_32.png";
        document.getElementById("single").checked = true;
        document.getElementById("family").checked = false;
        document.getElementById("double").checked = false;

        document.getElementById("paypal-name").value = "Calorie Counter Single License";
        document.getElementById("product-name").innerHTML = "Calorie Counter";
        document.getElementById("paypal-number").value = "2";

        total = 4.00;
    }

 if(id == "double"){
        //document.getElementById("purchaseIcon").src = "wallet_32.png";
        document.getElementById("double").checked = true;
        document.getElementById("family").checked = false;
        document.getElementById("single").checked = false;

        document.getElementById("paypal-name").value = "Calorie Counter Double License";
        document.getElementById("product-name").innerHTML = "Calorie Counter";
        document.getElementById("paypal-number").value = "2";

        total = 6.00;
    }


    if(id == "family"){
        //document.getElementById("purchaseIcon").src = "wallet_32_family.png";    
        document.getElementById("family").checked = true;
        document.getElementById("single").checked = false;
        document.getElementById("double").checked = false;

        document.getElementById("paypal-name").value = "Calorie Counter Family License";
        document.getElementById("product-name").innerHTML = "Calorie Counter";
        document.getElementById("paypal-number").value = "2";
        
        total = 15.00;
    }

    updateTotal();
}

function updateProvince(){
    // Reset GST/PST
    gst = 0.0;
    pst = 0.0;
    
    // Canadian Rape
    var country = document.getElementById("as-country").value;
    if(country == "Canada"){
        var province = document.getElementById("as-province").value;
        province = standardizedProvince(province);
        
        gst = gstForProvince(province);
        pst = pstForProvince(province);
    }
    
    updateTotal();
}

function updateTotal(){
    var totalValue = total;
    var checkoutValue = totalValue;
    var coup1 = "treats4us";
    var coupname = document.getElementById("as-coupon").value;

    gstValue = 0.0;
    pstValue = 0.0;

    document.getElementById("discount").style.display = "none";
    document.getElementById("gst").style.display = "none";
    document.getElementById("pst").style.display = "none";

	if (document.getElementById("as-coupon").value == coup1)
	 {
	discountValue = -((discount / 100.0) * checkoutValue);
        totalValue += discountValue;
        document.getElementById("discount").innerHTML = "Discount: " + formatCurrency(discountValue);
        document.getElementById("discount").style.display = "block";
	document.getElementById("discount_rate").value = discount;
 	document.getElementById("on0").value = "Coupon";
 	document.getElementById("os0").value = coupname + "- Discount " + discount + "%";
 	}

        
    if(gst > 0.0){
        gstValue = ((gst / 100.0) * checkoutValue);
        totalValue += gstValue;
        document.getElementById("gst").innerHTML = "GST/HST: " + formatCurrency(gstValue);
        document.getElementById("gst").style.display = "block";
 	document.getElementById("tax").value = formatCurrency(gstValue);
    }
    
    if(pst > 0.0){
        pstValue = ((pst / 100.0) * checkoutValue);    
        totalValue += pstValue;
        document.getElementById("pst").innerHTML = "PST: " + formatCurrency(pstValue);
        document.getElementById("pst").style.display = "block";
 	document.getElementById("tax").value = formatCurrency(gstValue);
    }    

    document.getElementById("amount").innerHTML = formatCurrency(total);
    document.getElementById("totaltotal").innerHTML = "Total: " + formatCurrency(totalValue) + " USD";

    document.getElementById("paypal-price").value = checkoutValue;
}

function pstForProvince(province){
    var returnValue = 0.0;
    
    switch (province) {
        case "bc":
            returnValue = 7.0;
            break;
    }
    
    return returnValue;
}

function gstForProvince(province){
    var returnValue = 5.0;
    
    switch (province) {
        case "ns":
            returnValue = 13.0;
            break;
        case "nl":
            returnValue = 13.0;
            break;
        case "nb":
            returnValue = 13.0;
            break;
    }
    
    return returnValue;
}

function standardizedProvince(rawProvince){
    rawProvince = rawProvince.toLowerCase();
    var returnProvince = rawProvince;
    
    if(rawProvince == "british columbia")
        returnProvince = "bc";
    if(rawProvince == "b.c.")
        returnProvince = "bc";     

    if(rawProvince == "alberta")
        returnProvince = "ab";
    if(rawProvince == "a.b.")
        returnProvince = "ab";  

    if(rawProvince == "sasketchewan")
        returnProvince = "sk";
    if(rawProvince == "s.k.")
        returnProvince = "sk";  

    if(rawProvince == "manitoba")
        returnProvince = "mb";
    if(rawProvince == "m.b.")
        returnProvince = "mb";  

    if(rawProvince == "ontario")
        returnProvince = "on";
    if(rawProvince == "o.n.")
        returnProvince = "on";

    if(rawProvince == "quebec")
        returnProvince = "qc";
    if(rawProvince == "quŽbec")
        returnProvince = "qc";
    if(rawProvince == "q.c.")
        returnProvince = "qc";
    if(rawProvince == "pq")
        returnProvince = "qc";

    if(rawProvince == "nova scotia")
        returnProvince = "ns";
    if(rawProvince == "n.s.")
        returnProvince = "ns";

    if(rawProvince == "new brunswick")
        returnProvince = "nb";
    if(rawProvince == "n.b.")
        returnProvince = "nb";

    if(rawProvince == "newfoundland")
        returnProvince = "nl";
    if(rawProvince == "n.l.")
        returnProvince = "nl";

    if(rawProvince == "northwest territories")
        returnProvince = "nt";
    if(rawProvince == "n.t.")
        returnProvince = "nt";

    if(rawProvince == "nunavut")
        returnProvince = "nu";
    if(rawProvince == "n.u.")
        returnProvince = "nu";

    if(rawProvince == "prince edward island")
        returnProvince = "pe";
    if(rawProvince == "PEI")
        returnProvince = "pe";
    if(rawProvince == "p.e.i.")
        returnProvince = "pe";
    if(rawProvince == "p.e.")
        returnProvince = "pe";

    if(rawProvince == "yukon territory")
        returnProvince = "yt";
    if(rawProvince == "yukon")
        returnProvince = "yt";
        
    return returnProvince;
}

function formatCurrency(num) {
    num = num.toString().replace(/\$|\,/g,'');
    if(isNaN(num))
    num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*100+0.50000000001);
    cents = num%100;
    num = Math.floor(num/100).toString();
    if(cents<10)
    cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
    num = num.substring(0,num.length-(4*i+3))+','+
    num.substring(num.length-(4*i+3));
    return (((sign)?'':'-') + '$' + num + '.' + cents);
}

function isValidEmail(email, required) {
    if (required==undefined) {   // if not specified, assume it's required
        required=true;
    }
    if (email==null) {
        if (required) {
            return false;
        }
        return true;
    }
    if (email.length==0) {  
        if (required) {
            return false;
        }
        return true;
    }
    if (! allValidChars(email)) {  // check to make sure all characters are valid
        return false;
    }
    if (email.indexOf("@") < 1) { //  must contain @, and it must not be the first character
        return false;
    } else if (email.lastIndexOf(".") <= email.indexOf("@")) {  // last dot must be after the @
        return false;
    } else if (email.indexOf("@") == email.length) {  // @ must not be the last character
        return false;
    } else if (email.indexOf("..") >=0) { // two periods in a row is not valid
	return false;
    } else if (email.indexOf(".") == email.length) {  // . must not be the last character
	return false;
    }
    return true;
}

function allValidChars(email) {
  var parsed = true;
  var validchars = "abcdefghijklmnopqrstuvwxyz0123456789@.-_";
  for (var i=0; i < email.length; i++) {
    var letter = email.charAt(i).toLowerCase();
    if (validchars.indexOf(letter) != -1)
      continue;
    parsed = false;
    break;
  }
  return parsed;
}




