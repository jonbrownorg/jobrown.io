$(document).ready(function() {
    
    
$('.dropdown-menu a').click(function (e) {
    $('.active').removeClass('active');
});

$('.nav-item').click(function (e) {
    $('.active').removeClass('active');
});

$("body").tooltip({ selector: '[data-toggle=tooltip]' });

if ($("#AR").length) {

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
	var nobookings = '<div class=\"container py-1\"><div class=\"shadow bg-contrast rounded d-flex align-items-center flex-wrap\" >     <div class="col-md-12 text-center p-3">   <h5 class=\"text-center\" style=\"line-height: 2em;\"><span class="bold">No Appointments Yet!</span><br><span>Book Appointment Below</span><br><span>Future bookings will appear here.</span></h5>   </div>         </div></div>';

var counter = 0;
for (var i = 0; i < googleCalendar.length; i++) {


if (googleCalendar[i].Client == tech) {
    
    counter++
	var startDate = googleCalendar[i].start.split(" ");
    var endDate = googleCalendar[i].end.split(" ");

    var startTime = startDate[5] + " " + startDate[6];
    var endTime = endDate[5] + " " + endDate[6];

    tourDates += '<div class=\"container py-1\"><div class=\"shadow bg-contrast rounded d-flex align-items-center flex-wrap\" ><div class="col-md-3"><i class="pe pe-3x ml-4 pr-4 pe-7s-date text-dark"></i></div><div style=\"padding:10px;\" class="col-md-7"><h5 class=\"text-center\" style=\"line-height: 2em;\"><span class="bold">When:</span> '+startDate[1].substring(0, 3)+' ';
    tourDates += startDate[2].substring(0,2)+', ';

    tourDates += startDate[3]+'<br>';

    tourDates += '' + googleCalendar[i].summary +'<br>';
    tourDates += '<span class="bold">Time: </span> ' + startTime + " - " + endTime + '</h5></div></div></div>';

}

if (i == googleCalendar.length - 1) {
        // appending it to the webpage
        $("#google-calendar-events").append(tourDates);
    } 
  
}

if (counter == 0) {
        // appending it to the webpage
        $("#google-calendar-events").html(nobookings);
} 

var tech = GetURLParameter('client');
var name = ''

if(tech == 484029) {
    var name ="Allen Boyd";
    var groupid ="g_143b734a72";
    var urlstring="2ac347a34e7648497d0a42217fb29ade84b81526";
}

if(tech == 3689238) {
    var name ="Muslim Advocates";
    var groupid ="g_b07c7a06e5";
    var urlstring="4db06988088c2f2ddc447041ba04b23392663de8";
}

if(tech == 83502) {
    var name ="Food & Water Watch";
    var networkid ="214941";
    var monitoringid ="FWW";
    var urlstring="77267866f96f48a0100157f339e9c34f4165f3b9";
}
if(tech == 1830157) {
    var name ="Acme Inc";
    var networkid ="226566";
    var groupid ="g_b5f8531515";
    var monitoringid ="apple";
    var mdmid ="44057";
    var urlstring="77267866f96f48a0100157f339e9c34f4165f3b9";
}
if(tech == 188052) {
    var name ="Fathom Creative";
    var groupid ="g_63c1a7526d";
    var urlstring="fd07c91fe6b44f9eed2a7534b69079a691747282";
}

if(tech == 83503) {
    var name ="MPP";
    var groupid ="g_b5f8531515";
    var networkid ="226566";
    var monitoringid ="MPP";
    var urlstring="9d81620049bd26c72c112d9a89311a978496e99a";
}

if(tech == 83505) {
    var name ="Social Driver";
    var groupid ="g_b5a5ef1e0e";
    var urlstring="fe7d2a04b29315e81413887763d4b3ec2c8564ce";
}

if(tech == 239364) {
    var name ="Winterfeldt IP Group";
    var urlstring="7dccf83536a884b6283d8f3f55dd39c409831f77";
}

if(tech == 104522) {
    var name ="Zuckerman Law";
    var urlstring="48cc8c0db321bc6d164f0b3b45c560d8d0f63ac9";
}

if(tech == 180288) {
    var name ="Thalia Asuras";
    var urlstring="089e3dca357b435cd17b8325b0b3e7749498449d";
}

if(tech == 562296) {
    var name ="Jennifer Pihlaja";
    var urlstring="1ecf5abc24e86e60a8985fba398d6f6fea1bcbc0";
}

if(tech == 642749) {
    var name ="CAQH";
    var mdmid ="44058";
    var urlstring ="b4105afdde4515521a820a0a8774671b14d4fa10";
}

if(tech == 1073072) {
    var name ="Collaborative Communications";
    var groupid ="g_cfe9bbe53a";
    var networkid ="227211";
    var monitoringid ="CC";
    var mdmid ="67911";
    var urlstring="07b2668f89d2064cf922271ebad2be7b1be42feb";
}

if(tech == 1369075) {
    var name ="HapstakDemetriou+";
    var groupid ="g_42edd5cb88";
    var networkid ="230458";
    var monitoringid ="HD";
    var urlstring="6f298fec7011fc64b71a084baa00c92b9570abac";
}

if(tech == 1373697) {
    var name ="Namati"
    var groupid ="g_640a7c75ee";
    var urlstring="0569235ac4be48f9f5ad4b496dcd1cdbf5dd48b2";
}

if(tech == 1121783) {
    var name ="ASOC"
    var groupid ="g_46a48a2844";
    var urlstring="a042b82022f48e5ac8da1ef3814ee8e687a1eb50";
}

if(tech == 1648315) {
    var name ="Polarus"
    var urlstring="bfaeae1c97596e54d4161dba31bd811a529001d8";
}

if(tech == 1379274) {
    var name ="Amy Tercek";
    var urlstring="d4b638cfdb64f413b35b1f204d55db2c8a3424f5";
}
if(tech == 1652210) {
    var name ="Annie Jaxon";
    var urlstring="c41d3074c108cfd7362dc3f642e82086f728e40b";
}

if(tech == 1711963) {
    var name ="NEH";
    var urlstring="cf0ee2fe84dbc0feb4fea7aa6b3dd1b26642a163";
}
if(tech == 2870503) {
    var name ="DC Brau";
    var urlstring="e9d21b36482deee77c84e48046ff49ed266ba416";
}


$('#compname').html(name);




if (groupid ==  null) {

	var htmlbutt = '<tr><td scope="row" colspan=\"6\" align=\"center\" class=\"py-5\"><a href=\"/products/hosted/fleet/\" class=\"btn btn-rounded btn-success\"><i class=\"fas fa-tag mr-3\"></i> Subscribe to Fleet Management Today! </a></td>';
	var htmlbutt2 = '<a href=\"/products/hosted/fleet/\" class=\"btn btn-rounded btn-success btn-block ml-1\"><i class=\"fas fa-tag mr-2\"></i> Subscribe </a>';
	var buy = "Buy Now";
	$('#INVENTORY').html(htmlbutt);
	$('.inventorynumber').text(buy);
	$('.inventorynumber3').html(htmlbutt2);
	$('.inventoryimage').hide();
	$('.inventorytext').hide();
}

if (networkid ==  null) {

	var htmlbutt = '<tr><td scope="row" colspan=\"5\" align=\"center\" class=\"py-5\"><a href=\"/products/hosted/network/\" class=\"btn btn-rounded btn-success\"><i class=\"fas fa-tag mr-3\"></i> Subscribe to Network Monitoring Today! </a></td>';
	var htmlbutt2 = '<a href=\"/products/hosted/network/\" class=\"btn btn-rounded btn-success btn-block ml-1\"><i class=\"fas fa-tag mr-3\"></i> Subscribe </a>';
	var buy = "Buy Now";
	$('#NETWORKM').html(htmlbutt);
	$('.networknumber').text(buy);
	$('.networknumber3').html(htmlbutt2);
	$('.networkimage').hide();
	$('.networktext').hide();
}

if (monitoringid ==  null) {

	var htmlbutt = '<tr><td scope="row" colspan=\"5\" align=\"center\" class=\"py-5\"><a href=\"/products/hosted/network/\" class=\"btn btn-rounded btn-success\"><i class=\"fas fa-tag mr-3\"></i> Subscribe to Network Monitoring Today! </a></td>';
	var buy = "Buy Now";
	$('#MONITORING').html(htmlbutt);
	$('.monitoringnumber').text(buy);
	$('#internetstatus').html('<a href="/sites/grove/2019/products/hosted/network/" class="btn btn-warning btn-block"><i class="fas fa-tag mr-3"></i> Subscribe to Internet Monitoring Today! </a>');
}


// WATCHMAN MONITORING API
if (tech == 83502) {
	var apiurl = "https://fwwatch.monitoringclient.com/v2.5/computers?api_key=Kw2EOQ7OuC6KFpqnfdXlQMNs70ObpOe4VX7gow&per_page=100&expand[]=plugin_results";
} else  {
	var apiurl = "https://macgurus.monitoringclient.com/v2.5/computers?api_key=nDbjsWrxKNC7GFLE0vscN3AnpNo4bHn7B90oIg&group_id=" + groupid + "&per_page=100&expand[]=plugin_results";
}

$.getJSON(apiurl, function(data_sn) {

				
																		
																				function sortJsonName(a,b){
																				return new Date(b.date).getTime() - new Date(a.date).getTime();
																		
																				};
																				data_sn = $(data_sn).sort(sortJsonName);
																				var htmlsn = '';
																				
																				var count = 0;
																					$.each(data_sn, function(key, value){
																					
																						if (value.has_issue == false) {
																							var buttonclear = '<button type="button" class="btn btn-success btn-block" data-toggle="tooltip" data-placement="top" title="All Clear">No Issues</button>';
																						} else {
																							var buttonclear = '';
																						}
																						
																						htmlsn += '<tr>';
																						htmlsn += '<th scope="row">'+value.computer_name+'</th><td>'+value.serial_number+'</td><td>'+value.os_version_number+'</td> <td>'+value.last_user+'</td> <td>'+value.apple_product_description+'</td> <td>' + buttonclear + '';
																						
																						
																						
																						$.each(value.plugin_results, function (index, titleObj) {
																							if(titleObj.status == 'warning'){
																								if(titleObj.mute_type != 'ignored'){
																								
																								count++;
																								var details = titleObj.details;
																								var shortText = jQuery.trim(details).substring(0, 260).trim(this) + "...";
																								
																									htmlsn += '<button type="button" class="btn btn-danger btn-block" data-toggle="tooltip" data-placement="right" title="'+ shortText +'">'+ titleObj.name + '</button>';
																									
																									
																								}
																								
																								
																							}
																							
																						  });
																						  
																						if (count <= 1) {
																								$('#fleetstatus').html('<a data-toggle="tab" href="#G" class="btn btn-rounded btn-warning">'+count+' Issue </a>');
																							} else {
																								$('#fleetstatus').html('<a data-toggle="tab" href="#G" class="btn btn-rounded btn-warning">'+count+' Issues </a>');
																							}
																						if (count == 0) {
																							$('#fleetstatus').html('<a data-toggle="tab" href="#G" class="btn btn-rounded btn-success" style="color: white !important;">No Issues</a>');
																						}
																						
																						htmlsn += '</td></tr><!-- END OF TOGGLE -->';
																						
																					});


                          
$('#INVENTORY').html(htmlsn);
$('.inventorynumber').text(data_sn.length);
$('.inventorynumber3').text(data_sn.length);
$('.inventoryimage').show();
$('.inventorytext').show();
	
$('#inventory').DataTable({
	dom: 'Bfrtip',
	"bDestroy": true,
       buttons: [
    { extend: 'copy', className: 'btn btn-primary' },
    { extend: 'csv', className: 'btn btn-primary' },
    { extend: 'excel', className: 'btn btn-primary' },
    { extend: 'pdf', className: 'btn btn-primary' },
    { extend: 'print', className: 'btn btn-primary' }
], "order": [ 5, "asc" ]});
	
	
														
});
$("#loadmore").click(function(){

$(document).scrollTop( $("#tabs").offset().top );  
$('#load').show(0).delay(4000).hide(0);


$('#inventory').DataTable().destroy();
$('#inventory tbody').empty();
$('#inventory thead').hide(0).delay(4000).show(0);

																				
$.getJSON("https://fwwatch.monitoringclient.com/v2.5/computers?api_key=Kw2EOQ7OuC6KFpqnfdXlQMNs70ObpOe4VX7gow&per_page=100&page=2&expand[]=plugin_results", function(data_sn_2) {

																				
																		
																				function sortJsonName(a,b){
																				return new Date(b.date).getTime() - new Date(a.date).getTime();
																		
																				};
																				data_sn_2 = $(data_sn_2).sort(sortJsonName);
																				var htmlsn_2 = '';
																				var count = 0;

																					$.each(data_sn_2, function(key, value){
																					
																						if (value.has_issue == false) {
																							var buttonclear = '<button type="button" class="btn btn-success btn-block" data-toggle="tooltip" data-placement="top" title="All Clear">No Issues</button>';
																						} else {
																							var buttonclear = '';
																						}
																						
																						htmlsn_2 += '<tr>';
																						htmlsn_2 += '<th scope="row">'+value.computer_name+'</th><td>'+value.serial_number+'</td><td>'+value.os_version_number+'</td> <td>'+value.last_user+'</td> <td>'+value.apple_product_description+'</td> <td>' + buttonclear + '';
																						
																						$.each(value.plugin_results, function (index, titleObj) {
																							if(titleObj.status == 'warning'){
																								if(titleObj.mute_type != 'ignored'){
																								count++;
																								var details = titleObj.details;
																								var shortText = jQuery.trim(details).substring(0, 260).trim(this) + "...";
																								
																									htmlsn_2 += '<button type="button" class="btn btn-danger btn-block" data-toggle="tooltip" data-placement="right" title="'+ shortText +'">'+ titleObj.name + '</button>';
																								}
																							}
																						  });
																						  
																						  if (count <= 1) {
																								$('#fleetstatus').html('<a data-toggle="tab" href="#G" class="btn btn-rounded btn-warning">'+count+' Issue </a>');
																							} else {
																								$('#fleetstatus').html('<a data-toggle="tab" href="#G" class="btn btn-rounded btn-warning">'+count+' Issues </a>');
																							}
																							if (count == 0) {
																							$('#fleetstatus').html('<a data-toggle="tab" href="#G" class="btn btn-rounded btn-success" style="color: white !important;">No Issues</a>');
																						}
																						htmlsn_2 += '</td></tr><!-- END OF TOGGLE -->';
																						
																					});


                          
$('#INVENTORY').html(htmlsn_2);
$('.inventorynumber').text(data_sn_2.length);
$('.inventorynumber3').text(data_sn_2.length);
$('.inventoryimage').show();
$('.inventorytext').show();
$('#inventory').DataTable({dom: 'Bfrtip',
       buttons: [
    { extend: 'copy', className: 'btn btn-primary' },
    { extend: 'csv', className: 'btn btn-primary' },
    { extend: 'excel', className: 'btn btn-primary' },
    { extend: 'pdf', className: 'btn btn-primary' },
    { extend: 'print', className: 'btn btn-primary' }
], "order": [ 0, "desc" ]});
														
});


});		

// EXPENSES, DOCUMENTS AND DEVICES
$.getJSON("https://grovetech.co/portal/devices.json", function(datamdm) {
													
													var htmlmdm = '';
													var i = 0;
													
													if (mdmid ==  null) {

														var htmlbutt = '<tr><td scope="row" colspan=\"4\" align=\"center\" class=\"py-5\"><a href=\"/products/hosted/fleet/\" class=\"btn btn-rounded btn-success\"><i class=\"fas fa-tag mr-3\"></i> Subscribe to MDM Management Today! </a></td>';
														var htmlbutt2 = '<a href=\"/products/hosted/fleet/\" class=\"btn btn-rounded btn-success btn-block ml-1\"><i class=\"fas fa-tag mr-2\"></i> Subscribe </a>';
														var buy = "Buy Now";
														$('#MDM').html(htmlbutt);
														$('.mdmnumber').text(buy);
														
													} else {
													
													$.each(datamdm.data, function(key, value){

															if(value.relationships["device_group"].data.id == mdmid){

															if (value.attributes.status == 'enrolled') {
																var statusindicator = "dotonline";
															} else {
																var statusindicator = "dotoffline";
															}

															htmlmdm += '<tr>';
															htmlmdm += '<th scope="row"><span class="'+ statusindicator +'"></span>'+value.attributes.status+'</a></th><td scope="row">'+value.attributes.name+'</td><td>'+value.attributes["serial_number"]+'</td><td>'+value.attributes["last_seen_at"]+'</td>';
															htmlmdm += '</tr><!-- END OF TOGGLE -->';
															i++
															}
														});
														$('#MDM').html(htmlmdm);
														$('.mdmnumber').text(i);
													}


													

												
	$('#mdm').DataTable({dom: 'Bfrtip',
       buttons: [
    { extend: 'copy', className: 'btn btn-primary' },
    { extend: 'csv', className: 'btn btn-primary' },
    { extend: 'excel', className: 'btn btn-primary' },
    { extend: 'pdf', className: 'btn btn-primary' },
    { extend: 'print', className: 'btn btn-primary' }
], "order": [ 1, "asc" ]});



												});																																														
$.getJSON("https://grovetech.co/portal/documents.json", function(data4) {
								function sortJsonNamedoc(a,b){
												return new Date(b.docdate).getTime() - new Date(a.docdate).getTime();				
												};

												data4 = $(data4).sort(sortJsonNamedoc);
												var html4 = '';
												var tech = GetURLParameter('client');

													$.each(data4, function(key, value){
													if(value.client == tech){
														html4 += '<tr>';
														html4 += '<th scope="row"><a class="link" href="'+value.docurl+'" target="_blank">'+value.docname+'</a></th><td>'+value.docdate+'</td>';
														html4 += '</tr><!-- END OF TOGGLE -->';
														}
													});

												$('#DOCUMENTS').html(html4);
												$('#documents').DataTable({dom: 'Bfrtip',
       buttons: [
    { extend: 'copy', className: 'btn btn-primary' },
    { extend: 'csv', className: 'btn btn-primary' },
    { extend: 'excel', className: 'btn btn-primary' },
    { extend: 'pdf', className: 'btn btn-primary' },
    { extend: 'print', className: 'btn btn-primary' }
], "order": [ 1, "asc" ]});



												});											
$.getJSON("https://grovetech.co/portal/expenses.json", function(data7) {
																		
																				function sortJsonName(a,b){
																				return new Date(b.date).getTime() - new Date(a.date).getTime();
																		
																				};
																				data7 = $(data7).sort(sortJsonName);
																				var html7 = '';
																				var tech = GetURLParameter('client');

																					$.each(data7, function(key, value){
																					if(value.client == tech){
																						html7 += '<tr>';
																						html7 += '<th scope="row">'+value.date+'</th><td>'+value.expense_number+'</td><td>'+value.amount+'</td> <td>'+value.billed+'</td> <td> <a class="btn btn-success btn-block m-t-20 fs18" href="'+value.receipt+'" style="margin-top: 0px; margin-right: -20px;">Download</a> </td>';
																						html7 += '</tr><!-- END OF TOGGLE -->';
																						}
																					});

																				$('#EXP').html(html7);
																				$('#expenses').DataTable({dom: 'Bfrtip',
       buttons: [
    { extend: 'copy', className: 'btn btn-primary' },
    { extend: 'csv', className: 'btn btn-primary' },
    { extend: 'excel', className: 'btn btn-primary' },
    { extend: 'pdf', className: 'btn btn-primary' },
    { extend: 'print', className: 'btn btn-primary' }
], "order": [ 0, "desc" ]});
														});

// STATUSCAKE API CALLS
$.ajax({
    beforeSend: function(request) {
        request.setRequestHeader("API", 'fSJyGTQAkL0nRsbhm9Eg54aVtNZWrM');
 		request.setRequestHeader("Username", 'grove');
    },
    dataType: "json",
    url: 'https://app.statuscake.com/API/Tests?tags='+monitoringid,
    success: function(data29) {
        
        		
       			var html19 = '';
				$.each(data29, function(key, value){
				
				
				if (value.Status == 'Up') {
					var statusindicator = "dotonline";
				} else {
					var statusindicator = "dotoffline";
				}
				
				var str = JSON.stringify(data29)
				var networkIssueNum = (str.match(/\"Down\"/g) || []).length;
				
				if (networkIssueNum <= 1) {
					$('#networkstatus').html('<a data-toggle="tab" href="#I" class="btn btn-rounded btn-warning">'+networkIssueNum+' Issue </a>');
					$('#internetstatus').html('<a data-toggle="tab" href="#I" class="btn btn-danger btn-block">Internet Outage Alert</a>');
				} else {
					$('#networkstatus').html('<a data-toggle="tab" href="#I" class="btn btn-rounded btn-warning">'+networkIssueNum+' Issues </a>');
					$('#internetstatus').html('<a data-toggle="tab" href="#I" class="btn btn-danger btn-block">Internet Outage Alert</a>');
				}
				if (networkIssueNum == 0) {
					$('#networkstatus').html('<a data-toggle="tab" href="#I" class="btn btn-rounded btn-success" style="color: white !important;">No Issues</a>');
					$('#internetstatus').html('<a data-toggle="tab" href="#I" class="btn btn-success btn-block">'+value.WebsiteName+' : '+value.Status+'</a>');
				}
				
					html19 += '<tr>';
					html19 += '<th scope="row"><span class="'+ statusindicator +'"></span> '+value.Status+'</th><td>'+ value.WebsiteName +'</td><td>'+value.WebsiteURL+'</td><td>'+value.TestType+'</td><td>'+value.Uptime+'%</td>';
					html19 += '</tr>';
					
				});
				
				
				if (data29.length == 0) {
					var htmlbutt = '<tr><td scope="row" colspan=\"5\" align=\"center\" class=\"py-5\"><a href=\"/products/hosted/network/\" class=\"btn btn-rounded btn-success\"><i class=\"fas fa-tag mr-3\"></i> Subscribe to Network Monitoring Today! </a></td>';
					$('#MONITORING').html(htmlbutt);
					$('.monitoringnumber').text("Buy Now");
				} else {
					$('#MONITORING').html(html19);
					$('.monitoringnumber').text(data29.length);
				}
				$('#monitoring').DataTable({dom: 'Bfrtip',
					   buttons: [
					{ extend: 'copy', className: 'btn btn-primary' },
					{ extend: 'csv', className: 'btn btn-primary' },
					{ extend: 'excel', className: 'btn btn-primary' },
					{ extend: 'pdf', className: 'btn btn-primary' },
					{ extend: 'print', className: 'btn btn-primary' }
				], "order": [ 4, "asc" ]});
				
				
    }
});

// DOMOTZ API CALLS
$.ajax({
    beforeSend: function(request) {
        request.setRequestHeader("X-Api-Key", '69kByGNgl90iuGLCZAWxri2jedjTo4IdUszNHrojeDA');
 		request.setRequestHeader("Content-Type", 'application/json');
        request.setRequestHeader("Accept", 'application/vnd.api+json');
    },
    dataType: "json",
    url: 'https://api-us-east-1-cell-1.domotz.com/public-api/v1/agent/'+networkid+'/device?page_size=1000',
    success: function(data21) {
        
        		
       			var html11 = '';
       			
       			var str3 = JSON.stringify(data21)
				var networkEnrolled = (str3.match(/\"VITAL\"/g) || []).length;
				
				$.each(data21, function(key, value){
				
				if (value.importance == "VITAL") {
					var managed = "Managed";
				} else {
					var managed = "Not Managed";
				}
				
				if (value.status == "ONLINE") {
					var statusindicator = "dotonline";
				} else {
					var statusindicator = "dotoffline";
				}
				
					html11 += '<tr>';
					html11 += '<th scope="row"><span class="'+ statusindicator +'"></span> '+value.status+'</th><td>'+ managed +'</td><td>'+value.display_name+'</td><td>'+value['ip_addresses'][0]+'</td><td>'+value.vendor+'</td>';
					html11 += '</tr>';
					
				});
				
				$('#NETWORKM').html(html11);
				$('.networknumber').text(networkEnrolled);
				$('.networknumber3').text(networkEnrolled);
				$('#networkm').DataTable({dom: 'Bfrtip',
					   buttons: [
					{ extend: 'copy', className: 'btn btn-primary' },
					{ extend: 'csv', className: 'btn btn-primary' },
					{ extend: 'excel', className: 'btn btn-primary' },
					{ extend: 'pdf', className: 'btn btn-primary' },
					{ extend: 'print', className: 'btn btn-primary' }
				], "order": [ 1, "asc" ]});
				
				
    }
});


// ZIPBOOKS API CALLS
$.ajax({
    dataType: "json",
    url: "https://grovetech.co/portal/"+ urlstring +"/contact.json",
    success: function(data2) {
        
        
       			var html2 = '';
 				html2 += '<h4 class="mr-0"><i class="pe pe-7s-user text-dark"></i> Client Information</h4><hr><h4 class="mr-0">'+data2.data.attributes.name+'</h4><p class="mt-4" style="word-break: break-all;"><a class="link" href="mailto:"'+data2.data.attributes.email+'">'+data2.data.attributes.email+'</a><br>'+data2.data.attributes.phone+'<br>'+data2.data.attributes["address-1"]+'<br>'+data2.data.attributes.city+' '+data2.data.attributes.state+' '+data2.data.attributes["postal-code"]+'</p>';
 				
 				var html4 = '';
 				html4 += '<h4 class="mr-0"><i class="pe pe-7s-help2 text-dark"></i> Primary Mac Expert</h4><hr><h4 class="mr-0">Jon Brown</h4><p class="mt-4"><a class="link" href="mailto:"support@grovetech.co">support@grovetech.co</a><br>1-888-253-9103<br>1030 15th St NW Suite 1050w<br>Washington DC 20005</p>';
				
				$('#CONTACT').html(html2);
				$('#CONTACT2').html(html4);
				
				
    }
});
$.ajax({
    dataType: "json",
    url: "https://grovetech.co/portal/"+ urlstring +"/invoices.json",
    success: function(data5) {
        
        
       			var html = '';
       			
       			$.each(data5.data, function(key, value){
       			
				html += '<tr>';
				html += '<th scope="row">'+value.attributes.number+'</th><td>'+value.attributes.status+'</td><td>$'+value.attributes["paid-total"]+'</td><td>$'+value.attributes.total+'</td><td>'+value.attributes.date+'</td>';
				html += '</tr><!-- END OF TOGGLE -->';
				
				});
				
				$('#AR').html(html);
				
				$('#invoices').DataTable({dom: 'Bfrtip',
       buttons: [
    { extend: 'copy', className: 'btn btn-primary' },
    { extend: 'csv', className: 'btn btn-primary' },
    { extend: 'excel', className: 'btn btn-primary' },
    { extend: 'pdf', className: 'btn btn-primary' },
    { extend: 'print', className: 'btn btn-primary' }
], "order": [ 4, "desc" ]});
				
				
    }
});
$.ajax({
    dataType: "json",
    url: "https://grovetech.co/portal/"+ urlstring +"/time.json",
    success: function(data8) {
        		
        		
       			var html8 = '';
																				
				$.each(data8.included, function(key, value){
				
				if (value.attributes.note) {
				
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
				var priceString = realtime.toFixed(2);
				
				
					html8 += '<tr>';
					html8 += '<th scope="row">'+priceString+'</th><td>'+value.attributes.note+'</td><td>'+value.attributes.date+'</td><td>'+status+'</td>';
					html8 += '</tr><!-- END OF TOGGLE -->';
					
					
				}

				});

				$('#OVERAGES').html(html8);
				$('#overages').DataTable({dom: 'Bfrtip',
       buttons: [
    { extend: 'copy', className: 'btn btn-primary' },
    { extend: 'csv', className: 'btn btn-primary' },
    { extend: 'excel', className: 'btn btn-primary' },
    { extend: 'pdf', className: 'btn btn-primary' },
    { extend: 'print', className: 'btn btn-primary' }
], "order": [ 2, "desc" ]});
				
    }
});
$.ajax({
    dataType: "json",
    url: "https://grovetech.co/portal/"+ urlstring +"/estimates.json",
    success: function(data3) {
        
        
       			var html3 = '';
				$.each(data3.data, function(key, value){
					html3 += '<tr>';
					html3 += '<th scope="row">'+value.attributes.title+'</th><td>'+value.attributes.total+'</td><td>'+value.attributes.status+'</td><td>'+value.attributes.date+'</td>';
					html3 += '</tr><!-- END OF TOGGLE -->';
				});

				$('#EST').html(html3);
				$('#estimates').DataTable({dom: 'Bfrtip',
       buttons: [
    { extend: 'copy', className: 'btn btn-primary' },
    { extend: 'csv', className: 'btn btn-primary' },
    { extend: 'excel', className: 'btn btn-primary' },
    { extend: 'pdf', className: 'btn btn-primary' },
    { extend: 'print', className: 'btn btn-primary' }
], "order": [ 3, "desc" ]});
				
				
    }
}); 

  


}});