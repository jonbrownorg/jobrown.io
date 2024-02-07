$(document).ready(function() {
'use strict';


$('input').nicelabel({

  // use labels
  uselabel: true,
  
  // text for checked state
  checked_text: 'Checked', 

  // text for unchecked state
  unchecked_text: 'Unchecked',
  
  // icon for checked state
  checked_ico: '../../../assets/images/icons/tick-checked.png', 
  
  // icon for unchecked state
  unchecked_ico: '../../../assets/images/icons/tick-unchecked.png', 
  
});

function addCommas(intNum) {
  return (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

$.fn.calculate = function(){ 

		var sum = 0;
			$("input[type=checkbox]:checked").each(function(){
			  sum += parseInt($(this).attr("value"));
			});
    
        var computers = parseInt($("#computers").val(),10);
        var slider_support = parseInt(s2.getValue(),10);
        var slider_locations = parseInt(s3.getValue(),10);
        var slider_support_onsite = parseInt(s4.getValue(),10);
        var slider_support_rem = parseInt(s5.getValue(),10);
        var slider_mon = parseInt(s6.getValue(),10);

        var slider_comp = parseInt(s7.getValue(),10);
        
        var total = slider_support + slider_locations + slider_support_onsite + slider_support_rem + slider_mon;
        
        if((total > 0)&&(total < 24)) {
        

        if ((slider_comp > 0)&&(slider_comp < 25)) {
        
        if ((sum > 0)&&(sum < 5)) {
        var output = "3,500";
        } else if ((sum > 5)&&(sum < 40)) {
        var output = "5,500";
        } else if (sum == 0) {
        var output = "2,500";
        }
		

        }
        if ((slider_comp > 24)&&(slider_comp < 50)) {
        
        var comptotal = slider_comp * 50;
        var output_raw = 2500 + comptotal;
        var output = addCommas(output_raw);
        }
        if ((slider_comp > 50)&&(slider_comp < 101)) {
        
        var comptotal = slider_comp * 65;
        var output_raw = 2500 + comptotal;
        var output = addCommas(output_raw);
        }
         
         
         $('#nettotal').html("2,500");
         $('#networktesting-txt-side').html("Upgrading firmware software.");
         $('#router-txt-side').html("Log File monitoring.");
         $('#ext-txt-side').html("<span style=\"text-decoration: line-through;\">External network monitoring.</span>");
         $('#int-txt-side').html("<span style=\"text-decoration: line-through;\">Internal LAN Monitoring.</span>");
         $('#vpn-txt-side').html("<span style=\"text-decoration: line-through;\">VPN Management.</span>");
         $('#phone-txt-side').html("<span style=\"text-decoration: line-through;\">Phone System Management.</span>");
         $('#cloud-txt-side').html("<span style=\"text-decoration: line-through;\">Cloud Services Monitoring.</span>");
         $('#emergency-txt-side').html("<span style=\"text-decoration: line-through;\">Emergency NOC Support.</span>");
         $('#email-txt-side').html("<span style=\"text-decoration: line-through;\">8 X 5 Phone / Email Support.</span>");
         
         $('#chat-txt-side').html("<span style=\"text-decoration: line-through;\">Malware Software.</span>");
         $('#lan-txt-side').html("<span style=\"text-decoration: line-through;\">LAN network monitoring.</span>");
         $('#virus-txt-side').html("<span style=\"text-decoration: line-through;\">Virus Software.</span>");
         $('#malware-txt-side').html("<span style=\"text-decoration: line-through;\">Chat Support.</span>");
         
         
         $('#lanmac-txt-side').html("<span style=\"text-decoration: line-through;\">LAN network monitoring.</span>");
         $('#emergencymac-txt-side').html("<span style=\"text-decoration: line-through;\">Basic network management.</span>");
         $('#networkmac-txt-side').html("<span style=\"text-decoration: line-through;\">Emergency support 8 X 7.</span>");
         $('#dedicated-txt-side').html("<span style=\"text-decoration: line-through;\">Dedicated Mac Technician.</span>");
        }
        
        if((total > 23)&&(total < 68)) {
        
        if ((slider_comp > 0)&&(slider_comp < 26)) {
        var output = "3,500";
        }
        if ((slider_comp > 25)&&(slider_comp < 50)) {
        var comptotal = slider_comp * 50;
        var output_raw = 3500 + comptotal;
        var output = addCommas(output_raw);
        }
        if ((slider_comp > 50)&&(slider_comp < 101)) {
        var comptotal = slider_comp * 65;
        var output_raw = 3500 + comptotal;
        var output = addCommas(output_raw);
        }
        
         $('#malware-check').prop('checked', true);
         $('#virus-check').prop('checked', true);
         $('#chat-check').prop('checked', true);
         $('#lan-check').prop('checked', true);
         $('#dedicated-check').prop('checked', false);
		 $('#network-check').prop('checked', false);
		 $('#emergency-check').prop('checked', false);
         
         $('#chat-txt-side').html("Malware Software.");
         $('#lan-txt-side').html("LAN network monitoring.");
         $('#virus-txt-side').html("Virus Software.");
         $('#malware-txt-side').html("Chat Support.");
         
         $('#nettotal').html("4,500");
         $('#networktesting-txt-side').html("Upgrading firmware software.");
         $('#router-txt-side').html("Log File monitoring.");
         $('#ext-txt-side').html("External network monitoring.");
         $('#int-txt-side').html("Internal LAN Monitoring.");
         $('#vpn-txt-side').html("VPN Management.");
         
         $('#phone-txt-side').html("<span style=\"text-decoration: line-through;\">Phone System Management.</span>");
         $('#cloud-txt-side').html("<span style=\"text-decoration: line-through;\">Cloud Services Monitoring.</span>");
         $('#emergency-txt-side').html("<span style=\"text-decoration: line-through;\">Emergency NOC Support.</span>");
         $('#email-txt-side').html("<span style=\"text-decoration: line-through;\">8 X 5 Phone / Email Support.</span>");
         
         $('#lanmac-txt-side').html("<span style=\"text-decoration: line-through;\">LAN network monitoring.</span>");
         $('#emergencymac-txt-side').html("<span style=\"text-decoration: line-through;\">Basic network management.</span>");
         $('#networkmac-txt-side').html("<span style=\"text-decoration: line-through;\">Emergency support 8 X 7.</span>");
         $('#dedicated-txt-side').html("<span style=\"text-decoration: line-through;\">Dedicated Mac Technician.</span>");
        }
        
        if((total > 67)&&(total < 200)) {
        
        
        if ((slider_comp > 0)&&(slider_comp < 26)) {
        var output = "5,500";
        }
        if ((slider_comp > 25)&&(slider_comp < 50)) {
        var comptotal = slider_comp * 50;
        var output_raw = 5500 + comptotal;
        var output = addCommas(output_raw);
        }
        if ((slider_comp > 50)&&(slider_comp < 101)) {
        var comptotal = slider_comp * 65;
        var output_raw = 5500 + comptotal;
        var output = addCommas(output_raw);
       
        }
        
         $('#malware-check').prop('checked', true);
         $('#virus-check').prop('checked', true);
         $('#chat-check').prop('checked', true);
         $('#lan-check').prop('checked', true);
		 $('#dedicated-check').prop('checked', true);
		 $('#network-check').prop('checked', true);
		 $('#emergency-check').prop('checked', true);
         
         $('#nettotal').html("6,500");
         $('#networktesting-txt-side').html("Upgrading firmware software.");
         $('#router-txt-side').html("Log File monitoring.");
         $('#ext-txt-side').html("External network monitoring.");
         $('#int-txt-side').html("Internal LAN Monitoring.");
         $('#vpn-txt-side').html("VPN Management.");
         $('#phone-txt-side').html("Phone System Management.");
         $('#cloud-txt-side').html("Cloud Services Monitoring.");
         $('#emergency-txt-side').html("Emergency NOC Support.");
         $('#email-txt-side').html("8 X 5 Phone / Email Support.");
         
         $('#chat-txt-side').html("Malware Software.");
         $('#lan-txt-side').html("LAN network monitoring.");
         $('#virus-txt-side').html("Virus Software.");
         $('#malware-txt-side').html("Chat Support.");
         
         $('#lanmac-txt-side').html("LAN network monitoring.");
         $('#emergencymac-txt-side').html("Basic network management.");
         $('#networkmac-txt-side').html("Emergency support 8 X 7.");
         $('#dedicated-txt-side').html("Dedicated Mac Technician.");
        }
        
        $('#total').html(output);
        //$('#num').html(total);
        //$('#comp').html(slider_comp);
			
    }
    
		$("#calcbutt").click(function () {
			$(function() {
			  $.fn.calculate();
			});
			alertify.logPosition("bottom right");
			var strval2 = $('#total').text();
			alertify.success('Your Mac Support cost is '+ strval2 +'');
			var strval22 = $('#nettotal').text();
			alertify.success('Your Network Support cost is '+ strval22 +'');
		});
		
		$("#calcbutt2").click(function () {
			$(function() {
			  $.fn.calculate();
			});
			alertify.logPosition("bottom right");
			var strval22 = $('#nettotal').text();
			var strval2 = $('#total').text();
			alertify.success('Your Mac Support cost is '+ strval2 +'');
			alertify.success('Your Network Support cost is '+ strval22 +'');
		});
		$("#bigbutt").click(function () {
			$(function() {
			  $.fn.calculate();
			});
			alertify.logPosition("bottom right");
			var strval22 = $('#nettotal').text();
			var strval2 = $('#total').text();
			alertify.success('Your Mac Support cost is '+ strval2 +'');
			alertify.success('Your Network Support cost is '+ strval22 +'');
		});
		
    
$(function() {
	  $.fn.calculate();
	});

var s7 = $("#unranged-value-computers").freshslider({
        step: 1,
        value:25,
        min: 1,
        max: 100,
        text: true,
        onchange:function(value){
        if(value < 25) {
        var computerstxt ="1 - 24 Computers";
        $(function() {
	  $.fn.calculate();
	});
        }
        if((value < 49)&&(value > 24)) {
        var computerstxt ="25 - 49 Computers";
        $(function() {
	  $.fn.calculate();
	});
        }
        if((value < 101)&&(value > 49)) {
        var computerstxt ="50 - 100 Computers +";
        $(function() {
	  $.fn.calculate();
	});
        }
        $('#computers-txt').html(computerstxt);

        }
    });
var s6 = $("#unranged-value-monitored").freshslider({
        step: 1,
        value:3,
        min: 1,
        max: 4,
        text: false,
        onchange:function(value){
        if(value == 1) {
        var monitoredtxt ="1 Monitored System";
        $(function() {
	  $.fn.calculate();
	});
        }
        if(value == 2) {
        var monitoredtxt ="3 Monitored Systems";
		$(function() {
	  $.fn.calculate();
	});
        }
        if(value == 3) {
        var monitoredtxt ="3 Monitored Systems";
		$(function() {
	  $.fn.calculate();
	});
        }
        if(value == 4) {
        var monitoredtxt ="4 Monitored Systems";
        $(function() {
	  $.fn.calculate();
	}); 
        }
        $('#monitored-txt').html(monitoredtxt);
         $('#monitored-txt-side').html(monitoredtxt);
        }
    });
var s5 = $("#unranged-value-supporthoursrem").freshslider({
        step: 12,
        value:36,
        min: 12,
        max: 60,
        text: false,
        onchange:function(value){
        if(value == 12) {
        var supporthoursrem ="12 Hours Remote Support";
        $(function() {
	  $.fn.calculate();
	});
        }
        if((value < 37)&&(value > 13)) {
        var supporthoursrem ="36 hrs Remote Support";
        $(function() {
	  $.fn.calculate();
	});
        }
        if((value < 59)&&(value > 36)) {
        var supporthoursrem ="60 hrs Remote Support";
        $(function() {
	  $.fn.calculate();
	});
        }
        $('#supporthoursrem-txt').html(supporthoursrem);
        $('#supporthoursrem-txt-side').html(supporthoursrem)
        }
    });
var s4 = $("#unranged-value-supporthours").freshslider({
        step: 8,
        value:24,
        min: 8,
        max: 48,
        text: false,
        onchange:function(value){
        if(value == 8) {
        var supporthourtxt ="8 Hours On Site Support";
        $(function() {
	  $.fn.calculate();
	});
        }
        if((value < 25)&&(value > 9)) {
        var supporthourtxt ="24 hrs On Site Support";
        $(function() {
	  $.fn.calculate();
	});
        }
        if((value < 47)&&(value > 24)) {
        var supporthourtxt ="48 hrs On Site Support";
        $(function() {
	  $.fn.calculate();
	});
        }
        $('#supporthours-txt').html(supporthourtxt);
        $('#supporthours-txt-side').html(supporthourtxt);
        }
    });
var s3 = $("#unranged-value-locations").freshslider({
        step: 1,
        value:3,
        min: 1,
        max: 5,
        text: false,
        onchange:function(value){
        if(value == 1) {
        var locationtxt ="1 Location";
        $(function() {
	  $.fn.calculate();
	});
        }
        if(value > 1) {
        var locationtxt ="Multiple Locations";
        $(function() {
	  $.fn.calculate();
	});
        }
        if(value == 5) {
        var locationtxt ="Many Multiple Locations";
        $(function() {
	  $.fn.calculate();
	});
        }
        $('#locations-txt').html(locationtxt);
        $('#locations-txt-side').html(locationtxt);
        }
    });
var s2 = $("#unranged-value-support").freshslider({
        step: 1,
        value:1,
        min: 1,
        max: 2,
        text: false,
        onchange:function(value){
        if(value == 1) {
        var supporttxt ="Support 8 X 5";
        $(function() {
	  $.fn.calculate();
	});
        }
        if(value == 2) {
        var supporttxt ="Support 8 X 7";
        $(function() {
	  $.fn.calculate();
	});
        }
        $('#support-txt').html(supporttxt);
        $('#support-txt-side').html(supporttxt);
        }
    });

$("form#quote").submit(function(e) {
   		e.preventDefault();
   		$(function() {
	  $.fn.calculate();
	});
   });
    
   


});