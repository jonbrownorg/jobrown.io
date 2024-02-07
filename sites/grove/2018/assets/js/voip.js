$(document).ready(function() {
'use strict';


	function GetURLParameter(sParam) {
			var sPageURL = window.location.search.substring(1);
			var sURLVariables = sPageURL.split('&');
			for (var i = 0; i < sURLVariables.length; i++)
			{
				var sParameterName = sURLVariables[i].split('=');
				if (sParameterName[0] == sParam)
				{
					return sParameterName[1];
				}
			}
		}
		
		
if ($("#voipcompare").length) {

function addCommas(intNum) {
  return (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

$.fn.calculatevoip = function(){ 
    
        var slider_phones = parseInt(voip1.getValue(),10);
        var slider_minutes = parseInt(voip4.getValue(),10);
        var slider_permin = parseInt(voip3.getValue(),10);
        var slider_vmboxes = parseInt(voip5.getValue(),10);
        var slider_outmin = parseInt(voip3.getValue(),10);
        
        var user_cost = parseInt(voip2.getValue(),10);
        var clean_user_cost = addCommas(user_cost);
        
        var unlimited =  18.95;
		var minutes = .029;
		var setup = 7;
        var paygphones =  2;
        var paygbase = 49.95;
        
        
        
        if (slider_phones < 5) {
        
        var unlimited_total = ((5 * unlimited) + (slider_phones * paygphones) + (slider_phones * setup));
        var clean_unlimited_total = addCommas(Math.round(unlimited_total));
        
        
        } else {
        
        var unlimited_total = ((slider_phones * unlimited) + (slider_phones * paygphones) + (slider_phones * setup));
        var clean_unlimited_total = addCommas(Math.round(unlimited_total));
        
        
        }
        
        
        
       
        if (slider_vmboxes < 5) {
        
        var paygtotal = ((slider_phones * paygphones) + (slider_minutes * minutes) + (slider_permin * minutes) + paygbase);
        var clean_paygtotal_total = addCommas(Math.round(paygtotal));
        
        } else {
        
        var paygtotal = ((slider_phones * paygphones) + ((slider_vmboxes - 5) * paygphones ) + (slider_minutes * minutes) + (slider_permin * minutes) + paygbase);
        var clean_paygtotal_total = addCommas(Math.round(paygtotal));
        
        }
        
        
        
        
        
        var unlimitedsavings = (user_cost - unlimited_total) / user_cost * 100;
    	var paygsavings = (user_cost - paygtotal) / user_cost * 100;
        
        $('#total').html(clean_user_cost);
        $('#unlimitedtotal').html(clean_unlimited_total);
        $('#paygtotal').html(clean_paygtotal_total);
       
        
        $("#calcbutt").click(function () {
			$(function() {
			  $.fn.calculatevoip();
			});
			alertify.logPosition("bottom right");
			
			alertify.success('Processing');
			alertify.success('Complete');
		});
        
        if(paygtotal > user_cost) {
        
         $('#paygtotalsavings').html("No cost savings.");
         
        } else {
        
        $('#paygtotalsavings').html(Math.round(paygsavings) + '% Cost Savings');
        
        }
        
        
        
        
        if(unlimited_total > user_cost) {
        
         $('#unlimitedsavings').html("No cost savings.");
         
        } else {
        
        $('#unlimitedsavings').html(Math.round(unlimitedsavings) + '% Cost Savings');
        
        }
        
        
        
        
        
       
        
        
    }
    

var voip1 = $("#unranged-value-phonenumbers").freshslider({
        step: 1,
        value:25,
        min: 0,
        max: 100,
        text: true,
        onchange:function(value){
        if(value < 25) {
        var phonetext ="1 - 24 Phones";
        $(function() {
	    $.fn.calculatevoip();
	});
        }
        if((value < 49)&&(value > 24)) {
        var phonetext ="25 - 49 Phones";
        $(function() {
	  $.fn.calculatevoip();
	});
        }
        if((value < 101)&&(value > 49)) {
        var phonetext ="50 - 100 Phones +";
        $(function() {
	  $.fn.calculatevoip();
	});
        }
        $('#phonenumbers-txt').html(phonetext);   
        }
    });
var voip2 = $("#unranged-value-permonth").freshslider({
        step: 1,
        value:1250,
        min: 0,
        max: 3000,
        text: true,
        onchange:function(value){
        if(value < 1501) {
        var usertotal ="$0 - $1,500 /mo";
        $(function() {
	    $.fn.calculatevoip();
	});
        }
        if((value < 1999)&&(value > 1502)) {
        var usertotal ="$1,500 - $2,000 /mo";
        $(function() {
	  $.fn.calculatevoip();
	});
        }
        if((value < 3001)&&(value > 1999)) {
        var usertotal ="$2,000 - $3,000 /mo +";
        $(function() {
	  $.fn.calculatevoip();
	});
        }
        $('#permonth-txt').html(usertotal);   
        }
    });
var voip3 = $("#unranged-value-permin").freshslider({
        step: 10,
        value:4500,
        min: 0,
        max: 10000,
        text: true,
        onchange:function(value){
        if(value < 1501) {
        var outminutetxt ="0 - 1,500 Minutes";
        $(function() {
	    $.fn.calculatevoip();
	});
        }
        if((value < 4999)&&(value > 1502)) {
        var outminutetxt ="1,500 - 5,000 Minutes";
        $(function() {
	  $.fn.calculatevoip();
	});
        }
        if((value < 10001)&&(value > 5000)) {
        var outminutetxt ="5,000 - 10,000 Minutes";
        $(function() {
	  $.fn.calculatevoip();
	});
        }
        $('#permin-txt').html(outminutetxt);
       
        }
    });
var voip4 = $("#unranged-value-minutes").freshslider({
        step: 10,
        value:4500,
        min: 0,
        max: 10000,
        text: true,
        onchange:function(value){
        if(value < 1501) {
        var minutetxt ="0 - 1,500 Minutes";
        $(function() {
	    $.fn.calculatevoip();
	});
        }
        if((value < 4999)&&(value > 1502)) {
        var minutetxt ="1,500 - 5,000 Minutes";
        $(function() {
	  $.fn.calculatevoip();
	});
        }
        if((value < 10001)&&(value > 5000)) {
        var minutetxt ="5,000 - 10,000 Minutes";
        $(function() {
	  $.fn.calculatevoip();
	});
        }
        $('#minutes-txt').html(minutetxt);
       
        }
    });
var voip5 = $("#unranged-value-vmboxes").freshslider({
        step: 1,
        value:25,
        min: 0,
        max: 100,
        text: true,
        onchange:function(value){
        if(value < 25) {
        var vmboxestxt ="1 - 24 Voicemail Boxes";
        $(function() {
	    $.fn.calculatevoip();
	});
        }
        if((value < 49)&&(value > 24)) {
        var vmboxestxt ="25 - 49 Voicemail Boxes";
        $(function() {
	  $.fn.calculatevoip();
	});
        }
        if((value < 101)&&(value > 49)) {
        var vmboxestxt ="50 - 100 Voicemail Boxes +";
        $(function() {
	  $.fn.calculatevoip();
	});
        }
        $('#vmboxes-txt').html(vmboxestxt);   
        }
    });
} 

});