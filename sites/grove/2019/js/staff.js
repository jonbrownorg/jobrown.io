$(document).ready(function() {
    

if ($("#ST-AR").length) {


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
		
		

	var staff = GetURLParameter('staff');
	var staffnosp = staff.replace(/%20/g, " ");
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


if (googleCalendar[i].Staff == staffnosp) {
    
	var startDate = googleCalendar[i].start.split(" ");
    var endDate = googleCalendar[i].end.split(" ");

    var startTime = startDate[5] + " " + startDate[6];
    var endTime = endDate[5] + " " + endDate[6];

	tourDates += '<tr>';
	tourDates += '<th scope="row">'+startDate[1].substring(0, 3)+' '+startDate[2].substring(0,2)+', '+startDate[3]+'</th><td>'+googleCalendar[i].summary+'</td><td>'+startTime+' - '+endTime+'</td>';
	tourDates += '</tr><!-- END OF TOGGLE -->';

}

    if (i == googleCalendar.length - 1) {
        // appending it to the webpage
        $("#EXP").append(tourDates);
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
    } 
    
}



var tech = GetURLParameter('client');
	var imglogo = '';
	var name = ''

if(tech == 83507) {
    var imglogo = '<img src="/sites/grove/2019/img/avatar/team/emanuel.jpg" class="photo">';
    var txtbadge ='Network Team <span>@grovetech</span>';
    var name ="Emanuel Reznic";
    var title ="Network Engineer";
	$('.press').html(txtbadge);
	$('#photobadge').html(imglogo);
	$('#name').html(name);
	$('#title').html(title);
	var urlstring ="e2cc0d4acbd619a9a18fc298b518cc6052261222";
}

if(tech == 3069296) {
    var imglogo = '<img src="/sites/grove/2019/img/avatar/team/scott_sq.jpg" class="photo">';
    var txtbadge ='vCIO <span>@grovetech</span>';
    var name ="Scott Campbell";
    var title ="vCIO";
	$('.press').html(txtbadge);
	$('#photobadge').html(imglogo);
	$('#name').html(name);
	$('#title').html(title);
	var urlstring ="037287f6715317697e2af1d7c0c22da1f6b008c4";
}

if(tech == 3192933) {
    var imglogo = '<img src="/sites/grove/2019/img/avatar/team/tiara_sq.jpg" class="photo">';
    var txtbadge ='Mac Expert <span>@grovetech</span>';
    var name ="Tiara Thornton";
    var title ="Mac Expert";
	$('.press').html(txtbadge);
	$('#photobadge').html(imglogo);
	$('#name').html(name);
	$('#title').html(title);
	var urlstring ="7aff7ba379454887101a3e846dc56f3ecdae6df3";
}


if(tech == 495544) {
    var imglogo = '<img src="/sites/grove/2019/img/avatar/team/chad.jpg" class="photo">';
    var txtbadge ='Mac Expert <span>@grovetech</span>';
    var name ="Chad Gordon";
    var title ="Mac Expert";
	$('.press').html(txtbadge);
	$('#photobadge').html(imglogo);
	$('#name').html(name);
	$('#title').html(title);
	var urlstring ="0c5599b2d43a3c4969bc863b834b76c798c28a3b";
}
if(tech == 3069294) {
    var imglogo = '<img src="/sites/grove/2019/img/avatar/team/parrish_sq.jpg" class="photo">';
    var txtbadge ='Mac Expert <span>@grovetech</span>';
    var name ="Parrish Knight";
    var title ="Mac Expert";
	$('.press').html(txtbadge);
	$('#photobadge').html(imglogo);
	$('#name').html(name);
	$('#title').html(title);
	var urlstring ="44f354f0cc19bbaccb5539772e666fe71a22fbd7";
}

if(tech == 495563) {
    var imglogo = '<img src="/sites/grove/2019/img/avatar/team/carlos.jpg" class="photo">';
    var txtbadge ='Mac Expert <span>@grovetech</span>';
    var name ="Mauricio Unduragga";
    var title ="Mac Expert";
	$('.press').html(txtbadge);
	$('#photobadge').html(imglogo);
	$('#name').html(name);
	$('#title').html(title);
	var urlstring ="1a6ddf323ce7c1e5abd512f13878a1ec3d72a08c";
}
if(tech == 1711798) {
    var imglogo = '<img src="/sites/grove/2019/img/avatar/team/patrick.jpg" class="photo">';
    var txtbadge ='SysAdmin <span>@grovetech</span>';
    var name ="Patrick Boyer";
    var title ="Systems Admin";
	$('.press').html(txtbadge);
	$('#photobadge').html(imglogo);
	$('#name').html(name);
	$('#title').html(title);
	var urlstring ="3ad5e81d7d062118e6367daeb5ee7e391cd0aefa";
}

function sortJsonNamedoc(a,b){
					return new Date(b.docdate).getTime() - new Date(a.docdate).getTime();				
					};
					

$.ajax({
    dataType: "json",
    url: "https://grovetech.co/staff/"+ urlstring +"/contact.json",
    success: function(data2) {
        
        
        		var html2 = '';
 				html2 += '<h4 class="mr-3">Staff Information</h4><hr><h4 class="mr-3">'+data2.data.attributes.name+'</h4><p class="mt-4"><a class="link" href="mailto:"'+data2.data.attributes.email+'">'+data2.data.attributes.email+'</a><br>'+data2.data.attributes.phone+'<br>'+data2.data.attributes["address-1"]+'<br>'+data2.data.attributes.city+' '+data2.data.attributes.state+' '+data2.data.attributes["postal-code"]+'</p>';
 				
 				var html4 = '';
 				html4 += '<h4 class="mr-3">Primary Mac Expert</h4><hr><h4 class="mr-3">Jon Brown</h4><p class="mt-4"><a class="link" href="mailto:"support@grovetech.co">support@grovetech.co</a><br>1-888-253-9103<br>1030 15th St NW Suite 1050w<br>Washington DC 20005</p>';
				
				$('#CONTACT').html(html2);
				$('#CONTACT2').html(html4);
				

				
				
				
    }
});
$.ajax({
    dataType: "json",
    url: "https://grovetech.co/staff/"+ urlstring +"/invoices.json",
    success: function(data) {
        
        
		var html = '';

		$.each(data.data, function(key, value){

		html += '<tr>';
		html += '<th scope="row">'+value.attributes.name+'</th><td>Processed</td><td>$'+value.attributes.amount+'</td>';
		html += '</tr><!-- END OF TOGGLE -->';
		});
		$('#ST-AR').html(html);
		$('#invoices').DataTable({dom: 'Bfrtip',
       buttons: [
    { extend: 'copy', className: 'btn btn-primary' },
    { extend: 'csv', className: 'btn btn-primary' },
    { extend: 'excel', className: 'btn btn-primary' },
    { extend: 'pdf', className: 'btn btn-primary' },
    { extend: 'print', className: 'btn btn-primary' }
], "order": [ 0, "desc" ]});
				
    }
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

$('#compname').html(name);

}});