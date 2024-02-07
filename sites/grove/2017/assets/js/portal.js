$(document).ready(function() {
    


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
		
	

if ($("#AR").length) {


	var tech = GetURLParameter('client');
	var mykey = 'AIzaSyCYnqDr_mJEiZw-_HMZsxLShcQlMi8G1_M'; 
    var calendarid = 'imamac.guru_jua3emc7p2hvsmqq9hvh3ebric@group.calendar.google.com';
    
    
    var googleCalendar = $.grabCalendar({
                            type: "events",
                            clean_date: true,
                            upcoming: true,
                            metadata: ["Client"]
                        });

	var tourDates = '';
	for (var i = 0; i < googleCalendar.length; i++) {


if (googleCalendar[i].Client == tech) {
    
	var startDate = googleCalendar[i].start.split(" ");
    var endDate = googleCalendar[i].end.split(" ");

    var startTime = startDate[5] + " " + startDate[6];
    var endTime = endDate[5] + " " + endDate[6];

    tourDates += '<div class=\"bg-master-light\" style=\"width: auto; padding: 20px; border-radius: 10px; margin-bottom: 15px; text-align: center;\"><h4><span class="bold">When:</span> '+startDate[1].substring(0, 3)+' ';
    tourDates += startDate[2].substring(0,2)+', ';

    tourDates += startDate[3]+'<br>';

    tourDates += '' + googleCalendar[i].summary +'<br>';
    tourDates += '<span class="bold">Time: </span> ' + startTime + " - " + endTime + '</h4></div>';

}

    if (i == googleCalendar.length - 1) {
        // appending it to the webpage
        $("#google-calendar-events").append(tourDates);
    } 
    
}



var tech = GetURLParameter('client');
var imglogo = '';
var name = ''


if(tech == 486022) {
    var imglogo = '<img src="../../assets/images/clients/logo12.jpg" class="aligncenter" width="400">';
    var name ="ACCE & OLAN Associates - ID:" + tech;
	$('#portalogo').html(imglogo);
}
if(tech == 491120) {
    var imglogo = '<img src="../../assets/images/clients/logo13.jpg" class="aligncenter" width="400">';
    var name ="Story District - ID:" + tech;
	$('#portalogo').html(imglogo);
}

if(tech == 83502) {
    var imglogo = '<img src="../../assets/images/clients/logo3.jpg" class="aligncenter" width="400">';
    var name ="Food & Water Watch - ID:" + tech;
	$('#portalogo').html(imglogo);
}

if(tech == 188052) {
    var imglogo = '<img src="../../assets/images/clients/logo2.jpg" class="aligncenter" width="400">';
    var name ="Fathom Creative - ID:" + tech;
	$('#portalogo').html(imglogo);
}

if(tech == 97321) {
    var imglogo = '<img src="../../assets/images/clients/logo4.jpg" class="aligncenter" width="400">';
    var name ="Illustria Inc - ID:" + tech;
	$('#portalogo').html(imglogo);
}

if(tech == 83503) {
    var imglogo = '<img src="../../assets/images/clients/logo9.jpg" class="aligncenter" width="400">';
    var name ="MPP - ID:" + tech;
	$('#portalogo').html(imglogo);
}

if(tech == 83505) {
    var imglogo = '<img src="../../assets/images/clients/logo5.jpg" class="aligncenter" width="400">';
    var name ="Social Driver - ID:" + tech;
	$('#portalogo').html(imglogo);
}

if(tech == 239364) {
    var imglogo = '<img src="../../assets/images/clients/logo10.jpg" class="aligncenter" width="400">';
    var name ="Winterfeldt IP Group - ID:" + tech;
	$('#portalogo').html(imglogo);
}

if(tech == 104522) {
    var imglogo = '<img src="../../assets/images/clients/logo6.jpg" class="aligncenter" width="400">';
    var name ="Zuckerman Law - ID:" + tech;
	$('#portalogo').html(imglogo);
}

if(tech == 283032) {
    var imglogo = '<img src="../../assets/images/clients/logovalued.jpg" class="aligncenter" width="400">';
    var name ="Mac Medix - ID:" + tech;
	$('#portalogo').html(imglogo);
}

if(tech == 266404) {
    var imglogo = '<img src="../../assets/images/clients/logovalued.jpg" class="aligncenter" width="400">';
    var name ="Citrinesky Design - ID:" + tech;
	$('#portalogo').html(imglogo);
}

if(tech == 180288) {
    var imglogo = '<img src="../../assets/images/clients/logovalued.jpg" class="aligncenter" width="400">';
    var name ="Thalia Asuras - ID:" + tech;
	$('#portalogo').html(imglogo);
}

if(tech == 499135) {
    var imglogo = '<img src="../../assets/images/clients/halllaw.jpg" class="aligncenter" width="400">';
    var name ="Hall Law PLLC - ID:" + tech;
	$('#portalogo').html(imglogo);
}

if(tech == 562296) {
    var imglogo = '<img src="../../assets/images/clients/logovalued.jpg" class="aligncenter" width="400">';
    var name ="Jennifer Pihlaja - ID:" + tech;
	$('#portalogo').html(imglogo);
}

if(tech == 642749) {
    var imglogo = '<img src="../../assets/images/clients/logo14.jpg" class="aligncenter" width="400">';
    var name ="CAQH - ID:" + tech;
	$('#portalogo').html(imglogo);
}



$.getJSON("https://api.zipbooks.com/v1/invoices?customer_id=" + tech + "&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWxsZXIiOm51bGwsInN1YiI6MTAwMzMwLCJpc3MiOiJodHRwczpcL1wvYXBpLnppcGJvb2tzLmNvbVwvdjFcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTMwMDUyNDEyLCJleHAiOjE1NDU2MDQ0MTIsIm5iZiI6MTUzMDA1MjQxMiwianRpIjoiMjk1ODJiMDcxYzE3OGFkM2ZmOTFkOTIwNTRmZWJjNDMifQ.ON4ppSGnzuhHVB7fDOej1pg1gR5el4E0yMjJ9EsX7p8", function(data) {
		var html = '';
        $.each(data, function(key, value){
        	html += '<div class="toggle col-md-12 col-sm-12 dtable">';
            html += '<div class="toggle-title col-md-12 col-sm-12"><div style="display: table-row;" class="col-md-12 col-sm-12"> <div style="display: table-cell; text-align: left;" class="col-md-3 col-sm-3"><span class="title-name"><h4>'+value.number+'</h4></span></div>  <div style="display: table-cell; text-align: center;" class="col-md-2 col-sm-2"><span class="title-name"><h4>'+value.status+'</h4></span></div>   <div style="display: table-cell; text-align: right;" class="col-md-2 col-sm-2"><span class="title-name"><h4>$'+value.paid_total+'</h4></span></div>        <div style="display: table-cell; text-align: right;" class="col-md-2 col-sm-2"><span class="title-name"><h4>$'+value.amount_due+'</h4></span></div>         <div style="display: table-cell; text-align: right;" class="col-md-3 col-sm-3"><span class="title-name"><h4>'+value.date+'</h4></span></div></div></div>';
			html += '</div><!-- END OF TOGGLE -->';
        });
    $('#AR').html(html);
    $('#AR').paginate({itemsPerPage: 5});

	$.ajaxSetup({
		  headers : {
			'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWxsZXIiOm51bGwsInN1YiI6MTAwMzMwLCJpc3MiOiJodHRwczpcL1wvYXBpLnppcGJvb2tzLmNvbVwvdjFcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTMwMDUyNDEyLCJleHAiOjE1NDU2MDQ0MTIsIm5iZiI6MTUzMDA1MjQxMiwianRpIjoiMjk1ODJiMDcxYzE3OGFkM2ZmOTFkOTIwNTRmZWJjNDMifQ.ON4ppSGnzuhHVB7fDOej1pg1gR5el4E0yMjJ9EsX7p8',
			'Accept' : 'application/vnd.api+json',
		  }
		});
	$.getJSON("https://api.zipbooks.com/v2/contacts/" + tech, function(data2) {

				var html2 = '';
				html2 += '<div class="col-md-12 col-sm-12" style="display: table;">';
				html2 += '<div style="display: table-row;" class="col-md-12 col-sm-12"> <div style="display: table-cell; text-align: left;" class="col-md-6 col-sm-6"><span class="title-name"><h3>Client Information</h3></span></div> <div style="display: table-row;" class="col-md-6 col-sm-6"><div style="display: table-cell; text-align: left;" class="col-md-12 col-sm-12"><span class="title-name"><h4>'+data2.data.attributes.name+'<br><a href="mailto:"'+data2.data.attributes.email+'">'+data2.data.attributes.email+'</a><br>'+data2.data.attributes.phone+'<br>'+data2.data.attributes["address-1"]+'<br>'+data2.data.attributes.city+' '+data2.data.attributes.state+' '+data2.data.attributes["postal-code"]+'</span></h4></div></div> <div style="display: table-row;" class="col-md-12 col-sm-12"><hr></div>';
				html2 += '<div style="display: table-cell; text-align: left;" class="col-md-6 col-sm-6"><span class="title-name"><h3>Primary Mac Guru</h3></span></div>  <div style="display: table-row;" class="col-md-6 col-sm-6"><div style="display: table-cell; text-align: left;" class="col-md-12 col-sm-12"><span class="title-name"><h4>Jon Brown<br><a href="mailto:"support@imamac.guru">support@imamac.guru</a><br>1-888-253-9103<br>1030 15th St NW Suite 1050w<br>Washington DC 20005</span></h4></div> <hr></div></div>';
				html2 += '</div><!-- END OF TOGGLE -->';
				
				$('#CONTACT').html(html2);
				
				var html20 = '';
				html20 += '<iframe id="ycbmiframemacguruclients" style="width:100%;height:1000px;border:0px;background-color:transparent;" frameborder="0" allowtransparency="true" src="https://macguruclients.youcanbook.me/?noframe=true&skipHeaderFooter=true&Q10='+tech+'&Q12='+data2.data.attributes.name+'&EMAIL='+data2.data.attributes.email+'&Q7='+data2.data.attributes.phone+'"><\/iframe>';
				
				$('#calendar').html(html20);
				
				$.ajaxSetup({
  headers : {
    'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWxsZXIiOm51bGwsInN1YiI6MTAwMzMwLCJpc3MiOiJodHRwczpcL1wvYXBpLnppcGJvb2tzLmNvbVwvdjFcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTMwMDUyNDEyLCJleHAiOjE1NDU2MDQ0MTIsIm5iZiI6MTUzMDA1MjQxMiwianRpIjoiMjk1ODJiMDcxYzE3OGFkM2ZmOTFkOTIwNTRmZWJjNDMifQ.ON4ppSGnzuhHVB7fDOej1pg1gR5el4E0yMjJ9EsX7p8',
    'Accept' : 'application/vnd.api+json',
  }
});
				$.getJSON("https://app.zipbooks.com/v2/estimates?filter%5Bcontact_id%5D="+ tech +"&sort=-date", function(data3) {

								var html3 = '';
									$.each(data3.data, function(key, value){
										html3 += '<div class="toggle col-md-12 col-sm-12 dtable">';
										html3 += '<div class="toggle-title col-md-12 col-sm-12"><div style="display: table-row;" class="col-md-12 col-sm-12"> <div style="display: table-cell; text-align: left;" class="col-md-3 col-sm-3"><span class="title-name"><h4>'+value.attributes.title+'</h4></span></div>  <div style="display: table-cell; text-align: center;" class="col-md-3 col-sm-3"><span class="title-name"><h4>'+value.attributes.total+'</h4></span></div>        <div style="display: table-cell; text-align: right;" class="col-md-3 col-sm-3"><span class="title-name"><h4>'+value.attributes.status+'</h4></span></div>         <div style="display: table-cell; text-align: right;" class="col-md-3 col-sm-3"><span class="title-name"><h4>'+value.attributes.date+'</h4></span></div></div></div>';
										html3 += '</div><!-- END OF TOGGLE -->';
									});
	
								$('#EST').html(html3);
								$('#EST').paginate({itemsPerPage: 5});
			
								$.getJSON("../../portal/feed.json", function(data4) {
												
												function sortJsonNamedoc(a,b){
												return new Date(b.docdate).getTime() - new Date(a.docdate).getTime();				
												};
												
												data4 = $(data4).sort(sortJsonNamedoc);
												var html4 = '';
												var tech = GetURLParameter('client');

													$.each(data4, function(key, value){
													if(value.client == tech){
														html4 += '<div class="toggle col-md-12 col-sm-12 dtable">';
														html4 += '<div class="toggle-title col-md-12 col-sm-12"><div style="display: table-row;" class="col-md-12 col-sm-12"> <div style="display: table-cell; text-align: left;" class="col-md-6 col-sm-6"><span class="title-name"><h4><a href="'+value.docurl+'" target="_blank">'+value.docname+'</a></h4></span></div>          <div style="display: table-cell; text-align: right;" class="col-md-6 col-sm-6"><span class="title-name"><h4>'+value.docdate+'</h4> </span></div></div></div>';
														html4 += '</div><!-- END OF TOGGLE -->';
														}
													});
	
												$('#DOCUMENTS').html(html4);
												$('#DOCUMENTS').paginate({itemsPerPage: 5});

												$.getJSON("../../portal/expenses.json", function(data7) {
																		
																				function sortJsonName(a,b){
																				return new Date(b.date).getTime() - new Date(a.date).getTime();
																		
																				};
																				data7 = $(data7).sort(sortJsonName);
																				var html7 = '';
																				var tech = GetURLParameter('client');

																					$.each(data7, function(key, value){
																					if(value.client == tech){
																						html7 += '<div class="toggle col-md-12 col-sm-12 dtable">';
																						html7 += '<div class="toggle-title" class="toggle col-md-12 col-sm-12"><div style="display: table-row;" class="toggle col-md-12 col-sm-12">  <div style="display: table-cell; text-align: left;" class="col-md-3 col-sm-3"><span class="title-name"><h4>'+value.date+'</h4></span></div>    <div style="display: table-cell; text-align: left;" class="col-md-2 col-sm-2"><span class="title-name"><h4>'+value.expense_number+'</h4></span></div>          <div style="display: table-cell; text-align: center;" class="col-md-2 col-sm-2"><span class="title-name"><h4>'+value.amount+'</h4> </span></div>      <div style="display: table-cell; text-align: right;" class="col-md-2 col-sm-2"><span class="title-name"><h4>'+value.billed+'</h4> </span></div>        <div style="display: table-cell; text-align: right;" class="col-md-3 col-sm-3"><span class="title-name"> <a type="button" class="btn btn-lg btn-complete btn-cons btn-rounded m-t-20 fs18" href="'+value.receipt+'" style="margin-top: 0px; margin-right: -20px;">Download</a> </span></div></div></div>';
																						html7 += '</div><!-- END OF TOGGLE -->';
																						}
																					});

																				$('#EXP').html(html7);
																				$('#EXP').paginate({itemsPerPage: 5});
																									
				
																				$.ajaxSetup({
																					  headers : {
																						'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWxsZXIiOm51bGwsInN1YiI6MTAwMzMwLCJpc3MiOiJodHRwczpcL1wvYXBpLnppcGJvb2tzLmNvbVwvdjFcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTMwMDUyNDEyLCJleHAiOjE1NDU2MDQ0MTIsIm5iZiI6MTUzMDA1MjQxMiwianRpIjoiMjk1ODJiMDcxYzE3OGFkM2ZmOTFkOTIwNTRmZWJjNDMifQ.ON4ppSGnzuhHVB7fDOej1pg1gR5el4E0yMjJ9EsX7p8',
																						'Accept' : 'application/vnd.api+json',
																					  }
																					});
																				$.getJSON("https://app.zipbooks.com/v2/time-entries?filter%5Bcontact_id%5D="+ tech + "&sort=-date", function(data8) {

																					var html8 = '';
																				
																						$.each(data8.data, function(key, value){
																					
																						var time = value.attributes.duration;
																						var realtime = time / 3600;
																					
																						if (tech == 83503) {
																						var price = 50.00;
																						} else {
																						var price = 100.00;
																						}
																					
																						var billed = value.attributes.billed;
																					
																						if(billed == false) {
																						var status = "No";
																						} else {
																						var status = "Yes";
																						}
																					
																						var cost = realtime * price;
	
																							html8 += '<div class="toggle col-md-12 col-sm-12" style="display: table;">';
																							html8 += '<div class="toggle-title col-md-12 col-sm-12"><div style="display: table-row;" class="col-md-12 col-sm-12"> <div style="display: table-cell; text-align: left;" class="col-md-2 col-sm-2"><span class="title-name"><h4>$'+cost+'</h4></span></div>         <div style="display: table-cell; text-align: right;" class="col-md-5 col-sm-5"><span class="title-name"><h4>'+value.attributes.note+'</h4></span></div>         <div style="display: table-cell; text-align: right;" class="col-md-3 col-sm-3"><span class="title-name"><h4>'+value.attributes.date+'</h4></span></div>     <div style="display: table-cell; text-align: right;" class="col-md-2 col-sm-2"><span class="title-name"><h4>'+status+'</h4></span></div>     </div></div>';
																							html8 += '</div><!-- END OF TOGGLE -->';
																						
																						});

																					$('#OVERAGES').html(html8);
																					$('#OVERAGES').paginate({itemsPerPage: 5});
																	});	
																
																
														});
										    
    
												});


								}); 

				});

}); 
   
$('#compname').html(name);

}});