(function() {
  var flickerAPI = "/sites/grove/2018/assets/data/appstore.json";
  

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
		

$(window).bind('load', function() {
$('img').each(function() {
    if((typeof this.naturalWidth != "undefined" &&
        this.naturalWidth == 0 ) 
        || this.readyState == 'uninitialized' ) {
        $(this).attr('src', '/sites/grove/2018/assets/images/icons/modified/unknown.png');
    }
}); })

$("img").on("error", function () {
  $(this).unbind("error").attr("src", "/sites/grove/2018/assets/images/icons/modified/unknown.png");
});

function sortJsonNamedoc(a,b){
					return new Date(b.Date).getTime() - new Date(a.Date).getTime();				
					};
					
$.getJSON("/sites/grove/2018/assets/data/munki_log.json", function(data4) {
								data4 = $(data4).sort(sortJsonNamedoc);
								var html4 = '';
								var datenow = $.datepicker.formatDate('m/dd/y', new Date());
								console.log(datenow);
									$.each(data4, function(key, value){
									
									var from = value.Date; 
										console.log(from);
										if (from <= datenow) {
										html4 += '<div class="col-md-12 col-sm-12 dtable">';
										html4 += '<div class="tablerow-left col-md-4 col-sm-12"><span ><h4><img src="../../assets/images/icons/modified/'+value.Title+'.png" width="32"> &nbsp; &nbsp;<a href="munki://detail-'+value.Title+'">'+value.Title.substring(0, 26)+'</a></h4></span></div>' 
										html4 += '<div class="tablerow-left col-md-2 hidden-sm hidden-xs"><span ><h4>'+value.Version.substring(0, 16)+'</h4></span></div>'   
										html4 += '<div class="tablerow-right col-md-2 hidden-sm hidden-xs"><span ><h4>'+value.Date+'</h4></span></div>'        
										html4 += '<div class="tablerow-right col-md-4 hidden-sm hidden-xs"><span ><h4>'+value.Status+'</h4></span></div>'   
										html4 += '</div><!-- END OF TOGGLE -->';
										}
									});

								 $('#AST').html(html4);
								 $('#AST').paginate({itemsPerPage: 25});
					});		



$.getJSON( flickerAPI, function( data8 ) {
		   var html8 = '';
		   var name_bold = '';
		   var cat = '';
		   var version = '';
		   var bn = '';
		   var icon = '';
		   var no_description = 'We dont have a description for this app yet. However, lets talk about what makes our App Store special. We work with Google Cloud Services to bring you our hosted App Store as a managed service for your Mac fleet. Our App Store is an Enterprise-Class Mac OS X software deployment solution. <br><br>It scales to any enterprise fleet size automatically, and offers multiple levels of data redundancy to ensure you can always count on to install that critical update. <br><br> Our App Store environment is fully redundant and managed. We manage all your critical app updates that you need. Standardize your fleets software today. <br><br><center><img src="/sites/grove/2018/assets/screenshots/none.jpg"></center>';
		   var tech = GetURLParameter('appname');
		   var button ='';
		   $.each(data8, function(key, value){
		   
		   
		   	 if( value.installer_item_hash == tech ) {
		   	 	
		   	 	var str1 = value.description;
		   		var str2 = "img src";
		   	 	
		   	 	

        
        
		   	 	if ((value.description == null) || (value.description =='') || (value.description ==' ') || (value.description == 'NULL')) {
		   	 	
        			html8 += '<p>'+no_description+'</p>';
        				
						

						
					
				} else {
				
						   if (str1.toLocaleLowerCase().indexOf("img src")!=-1) {
								
								html8 += '<p>'+value.description+'</p>';
							} else {
								
								 html8 += '<p>'+value.description+'</p>';
								 html8 += '<br><br><center><img src="/sites/grove/2018/assets/screenshots/none.jpg" width="100%"></center>';
							}
						
						
					
				}
		   	 	
        		cat += '<p>CATEGORY: '+value.category+'</p>';
        		version += '<p>TESTED VERSION: '+value.version+'</p>';
        		bn += ' Managed App Store: '+value.display_name+'';
        		icon += '<img src="../assets/images/icons/modified/'+value.display_name+'.png" width="128">';
        		name_bold += '<b>'+value.display_name+'</b>';
        		button += '<a class="btn btn-lg btn-success btn-cons fs18 m-t-10 hidden-xs hidden-sm" href="munki://detail-'+value.name+'">Install with Managed App Store</a> &nbsp;&nbsp; <a class="btn btn-lg btn-success btn-cons fs18 m-t-10" href="/appstore/logs/">View Logs</a>';
        		return false;
		   	 }
        		
		   });
		   $('#app_name_link').html(button);
		   $('#app_icon').html(icon);
		   $('#big_name').html(bn);
		   $('#app_category').html(cat);
		   $('#app_name').html(name_bold);
		   $('#app_description').html(html8);
		   $('#app_version').html(version);

	 });
		  

	  
  $.getJSON( flickerAPI, function( data7 ) {
		  var html7 = '';
		   		  
		  html7 += '<p><ul style="list-style: none; font-size: 20px; font-weight: lighter;" id="full-list">'
		  
          $.each(data7, function(key, value){

			html7 += '<li><img  width="32" src="/sites/grove/2018/assets/images/icons/modified/'+value.display_name+'.png"><a href="/sites/grove/2018/appstore?appname='+value.installer_item_hash+'">		'+value.display_name.substring(0, 20)+'...  </a></li>';
													
			});
		
		html7 += '</ul"></p>'
		var count = (data7.length) + 3789;
		
			$('#count').html(count);
			$('.col-3').html(html7);
			
        });
        


})();