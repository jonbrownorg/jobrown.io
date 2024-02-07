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
		
    
    
    
if ($("#ST-AR").length) {


	var tech = GetURLParameter('client');
	var mykey = 'AIzaSyCYnqDr_mJEiZw-_HMZsxLShcQlMi8G1_M'; 
    var calendarid = 'imamac.guru_jua3emc7p2hvsmqq9hvh3ebric@group.calendar.google.com';
    
    var googleCalendar = $.grabCalendar({
                            type: "events",
                            clean_date: true,
                            upcoming: true,
                            metadata: ["Staff"]
                        });

	var tourDates = '';
	for (var i = 0; i < googleCalendar.length; i++) {


if (googleCalendar[i].Staff == tech) {
    
	var startDate = googleCalendar[i].start.split(" ");
    var endDate = googleCalendar[i].end.split(" ");

    var startTime = startDate[5] + " " + startDate[6];
    var endTime = endDate[5] + " " + endDate[6];

	tourDates += '<div class="toggle col-md-12 col-sm-12 dtable">';
	tourDates += '<div class="toggle-title col-md-12 col-sm-12"><div style="display: table-row;" class="col-md-12 col-sm-12"> <div style="display: table-cell; text-align: left;" class="col-md-4 col-sm-4"><span class="title-name"><h4>'+startDate[1].substring(0, 3)+' '+startDate[2].substring(0,2)+', '+startDate[3]+'</h4></span></div>        <div style="display: table-cell; text-align: left;" class="col-md-4 col-sm-4"><span class="title-name"><h4>'+googleCalendar[i].summary+'</h4></span></div>         <div style="display: table-cell; text-align: right;" class="col-md-4 col-sm-4"><span class="title-name"><h4>'+startTime+' - '+endTime+'</h4></span></div></div></div>';
	tourDates += '</div><!-- END OF TOGGLE -->';

}

    if (i == googleCalendar.length - 1) {
        // appending it to the webpage
        $("#EXP").append(tourDates);
        $('#EXP').paginate({itemsPerPage: 5});
    } 
    
}


    var googleCalendar2 = $.grabCalendar({
                            type: "events",
                            clean_date: true,
                            upcoming: true,
                            metadata: ["holiday"]
                        });

	var holidays = '';
	for (var i = 0; i < googleCalendar2.length; i++) {


if (googleCalendar2[i].holiday == "true") {
    
	var startDate2 = googleCalendar2[i].start.split(" ");
    var endDate2 = googleCalendar2[i].end.split(" ");

    var startTime2 = startDate2[5] + " " + startDate2[6];
    var endTime2 = endDate2[5] + " " + endDate2[6];

	holidays += '<div class="toggle col-md-12 col-sm-12 dtable">';
	holidays += '<div class="toggle-title col-md-12 col-sm-12"><div style="display: table-row;" class="col-md-12 col-sm-12"> <div style="display: table-cell; text-align: left;" class="col-md-4 col-sm-4"><span class="title-name"><h4>'+startDate2[1].substring(0, 3)+' '+startDate2[2].substring(0,2)+', '+startDate2[3]+'</h4></span></div>        <div style="display: table-cell; text-align: left;" class="col-md-4 col-sm-4"><span class="title-name"><h4>'+googleCalendar2[i].summary+'</h4></span></div>         <div style="display: table-cell; text-align: right;" class="col-md-4 col-sm-4"><span class="title-name"><h4>'+startTime2+' - '+endTime2+'</h4></span></div></div></div>';
	holidays += '</div><!-- END OF TOGGLE -->';

}

    if (i == googleCalendar2.length - 1) {
        // appending it to the webpage
        $("#NOTICES").append(holidays);
         $('#NOTICES').paginate({itemsPerPage: 5});
    } 
    
}



var tech = GetURLParameter('client');
	var imglogo = '';
	var name = ''

if(tech == 83507) {
    var imglogo = '<img src="../../assets/images/team/2e0ac1e2.jpg" class="photo">';
    var txtbadge ='Network Team <span>@MacGurus</span>';
    var name ="Emanuel Reznic";
    var title ="Network Engineer";
	$('.press').html(txtbadge);
	$('#photobadge').html(imglogo);
	$('#name').html(name);
	$('#title').html(title);
}

if(tech == 495529) {
    var imglogo = '<img src="../../assets/images/team/22338931_10156107774215695_4357463619057957259_o.jpg" class="photo">';
    var txtbadge ='Mac Guru <span>@MacGurus</span>';
    var name ="Chris Sanborn";
    var title ="Mac Guru";
	$('.press').html(txtbadge);
	$('#photobadge').html(imglogo);
	$('#name').html(name);
	$('#title').html(title);
}

if(tech == 495544) {
    var imglogo = '<img src="../../assets/images/team/1000393_10200708073198505_2045023539_n.jpg" class="photo">';
    var txtbadge ='Mac Guru <span>@MacGurus</span>';
    var name ="Chad Gordon";
    var title ="Mac Guru";
	$('.press').html(txtbadge);
	$('#photobadge').html(imglogo);
	$('#name').html(name);
	$('#title').html(title);
}

if(tech == 495555) {
    var imglogo = '<img src="../../assets/images/team/13909295_10104201863967817_3955413068313187184_o.jpg" class="photo">';
    var txtbadge ='Legal Counsel <span>@MacGurus</span>';
    var name ="Zach Mauldin";
    var title ="Chief Legal Counsel";
	$('.press').html(txtbadge);
	$('#photobadge').html(imglogo);
	$('#name').html(name);
	$('#title').html(title);
}
if(tech == 495563) {
    var imglogo = '<img src="../../assets/images/team/carlos.jpg" class="photo">';
    var txtbadge ='Mac Guru <span>@MacGurus</span>';
    var name ="Mauricio Unduragga";
    var title ="Mac Guru";
	$('.press').html(txtbadge);
	$('#photobadge').html(imglogo);
	$('#name').html(name);
	$('#title').html(title);
}


$.ajaxSetup({
  headers : {
    'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWxsZXIiOm51bGwsInN1YiI6MTAwMzMwLCJpc3MiOiJodHRwczpcL1wvYXBpLnppcGJvb2tzLmNvbVwvdjFcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTMwMDUyNDEyLCJleHAiOjE1NDU2MDQ0MTIsIm5iZiI6MTUzMDA1MjQxMiwianRpIjoiMjk1ODJiMDcxYzE3OGFkM2ZmOTFkOTIwNTRmZWJjNDMifQ.ON4ppSGnzuhHVB7fDOej1pg1gR5el4E0yMjJ9EsX7p8',
    'Accept' : 'application/vnd.api+json',
  }
});
$.getJSON("https://app.zipbooks.com/v2/journal-entries?filter%5Btags%5D%5B0%5D%5Bid%5D=" + tech + "&filter%5Btags%5D%5B0%5D%5Btype%5D=Contact&page%5Bpage%5D=1&page%5Bpage-size%5D=100&sort=-date", function(data) {
		var html = '';
		
        $.each(data.data, function(key, value){
        
        	html += '<div class="toggle col-md-12 col-sm-12 dtable">';
            html += '<div class="toggle-title col-md-12 col-sm-12"><div style="display: table-row;" class="col-md-12 col-sm-12"> <div style="display: table-cell; text-align: left;" class="col-md-3 col-sm-3"><span class="title-name"><h4>'+value.attributes.name+'</h4></span></div>  <div style="display: table-cell; text-align: center;" class="col-md-3 col-sm-3"><span class="title-name"><h4>Processed</h4></span></div>   <div style="display: table-cell; text-align: right;" class="col-md-3 col-sm-3"><span class="title-name"><h4>$'+value.attributes.amount+'</h4></span></div>        <div style="display: table-cell; text-align: right;" class="col-md-3 col-sm-3"><span class="title-name"><h4>$'+value.attributes.amount+'</h4></span></div>        </div></div>';
			html += '</div><!-- END OF TOGGLE -->';
        });
    $('#ST-AR').html(html);
     $('#ST-AR').paginate({itemsPerPage: 5});


$.ajaxSetup({
  headers : {
    'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWxsZXIiOm51bGwsInN1YiI6MTAwMzMwLCJpc3MiOiJodHRwczpcL1wvYXBpLnppcGJvb2tzLmNvbVwvdjFcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTMwMDUyNDEyLCJleHAiOjE1NDU2MDQ0MTIsIm5iZiI6MTUzMDA1MjQxMiwianRpIjoiMjk1ODJiMDcxYzE3OGFkM2ZmOTFkOTIwNTRmZWJjNDMifQ.ON4ppSGnzuhHVB7fDOej1pg1gR5el4E0yMjJ9EsX7p8',
    'Accept' : 'application/vnd.api+json',
  }
});
					$.getJSON("https://api.zipbooks.com/v2/contacts/" + tech, function(data2) {

								var html2 = '';

								html2 += '<div class="col-md-12 col-sm-12" style="display: table;">';
								html2 += '<div style="display: table-row;" class="col-md-12 col-sm-12"> <div style="display: table-cell; text-align: left;" class="col-md-6 col-sm-6"><span class="title-name"><h3>Employee Information</h3></span></div> <div style="display: table-row;" class="col-md-6 col-sm-6"><div style="display: table-cell; text-align: left;" class="col-md-12 col-sm-12"><span class="title-name"><h4>'+data2.data.attributes.name+'<br><a href="mailto:"'+data2.data.attributes.email+'">'+data2.data.attributes.email+'</a><br>'+data2.data.attributes.phone+'<br>'+data2.data.attributes["address-1"]+'<br>'+data2.data.attributes.city+' '+data2.data.attributes.state+' '+data2.data.attributes["postal-code"]+'</span></h4></div></div> <div style="display: table-row;" class="col-md-12 col-sm-12"><hr></div>';
								html2 += '<div style="display: table-cell; text-align: left;" class="col-md-6 col-sm-6"><span class="title-name"><h3>Main Point of Contact</h3></span></div>  <div style="display: table-row;" class="col-md-6 col-sm-6"><div style="display: table-cell; text-align: left;" class="col-md-12 col-sm-12"><span class="title-name"><h4>Jon Brown<br><a href="mailto:"support@imamac.guru">support@imamac.guru</a><br>1-888-253-9103<br>1030 15th St NW Suite 1050w<br>Washington DC 20005</span></h4></div> <hr></div></div>';
								html2 += '</div><!-- END OF TOGGLE -->';
	
								$('#CONTACT').html(html2);
					});
					
					function sortJsonNamedoc(a,b){
					return new Date(b.docdate).getTime() - new Date(a.docdate).getTime();				
					};
												
					$.getJSON("../../staff/feed.json", function(data4) {
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
					});			
												

});	

$('#compname').html(name);




}});