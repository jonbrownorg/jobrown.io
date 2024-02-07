(function() {
  var flickerAPI = "/sites/grove/2017/assets/data/test.json";
  
  function groupBy(items,propertyName)
{
    var result = [];
    $.each(items, function(index, item) {
       if ($.inArray(item[propertyName], result)==-1) {
          result.push(item[propertyName]);
       }
    });
    return result;
}

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
		

$.getJSON( flickerAPI, function( data8 ) {
		   var html8 = '';
		   var name_bold = '';
		   var cat = '';
		   var bn = '';
		   var icon = '';
		   var no_description = 'We dont have a description for this app yet. However, lets talk about what makes our App Store special. We work with Google Cloud Services to bring you our hosted App Store as a managed service for your Mac fleet. Our App Store is an Enterprise-Class Mac OS X software deployment solution. <br><br>It scales to any enterprise fleet size automatically, and offers multiple levels of data redundancy to ensure you can always count on to install that critical update. <br><br> Our App Store environment is fully redundant and managed. We manage all your critical app updates that you need. Standardize your fleets software today. <br><br><img src="/sites/grove/2017/assets/screenshots/none.jpg">';
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
								 html8 += '<br><br><img src="/sites/grove/2017/assets/screenshots/none.jpg">';
							}
						
						
					
				}
		   	 	
        		cat += '<p>CATEGORY: '+value.category+'</p>';
        		bn += ' Managed App Store: '+value.display_name+'';
        		icon += '<img src="../assets/images/icons/modified/'+value.display_name+'.png" width="128">';
        		name_bold += '<b>'+value.display_name+'</b>';
        		button += '<a type="button" class="btn btn-lg btn-complete btn-cons fs18" href="munki://detail-'+value.name+'">Install with Managed App Store</a>';
        		return false;
		   	 }
        		
		   });
		   $('#app_name_link').html(button);
		   $('#app_icon').html(icon);
		   $('#big_name').html(bn);
		   $('#app_category').html(cat);
		   $('#app_name').html(name_bold);
		   $('#app_description').html(html8);

	 });
		  
		  
  $.getJSON( flickerAPI, function( data7 ) {
		  var html7 = '';
		  var categoryNames = groupBy(data7, 'display_name');
		   
		   
		  categoryNames.sort(function(a,b){return a.localeCompare(b); });
		  
		  html7 += '<p><ul style="list-style: none; font-size: 20px; font-weight: lighter;" id="full-list">'
		  
          $.each(data7, function(key, value){

			var str1 = value.display_name;
			var str2 = "MPP";
			var str3 = "Mac Gurus";
			var str4 = "munki";
			var str5 = "MunkiReport";
			var str6 = "Munkireport";
			var str7 = "FontAgent plugin"; 
			var str8 = "FontExplorer X Pro plugin";
			var str9 = "Image Processor Pro";
			var str10 = "InData CC";
			
			
			if(str1.indexOf(str2) == -1){

				if(str1.indexOf(str3) == -1){
	
					if(str1.indexOf(str4) == -1){
		
						if(str1.indexOf(str5) == -1){
			
							if(str1.indexOf(str6) == -1){
	
								if(str1.indexOf(str7) == -1){
	
									if(str1.indexOf(str8) == -1){

										if(str1.indexOf(str9) == -1){

											if(str1.indexOf(str10) == -1){

												html7 += '<li><img  width="32" src="/sites/grove/2017/assets/images/icons/modified/'+value.display_name+'.png"><a href="/sites/grove/2017/appstore?appname='+value.installer_item_hash+'">		'+value.display_name+'  </a></li>';
	
											}
	
										}
	
									}
		
								}
		
							}
						}
					}
				}
			}
													
			});
		
		html7 += '</ul"></p>'
		var count = categoryNames.length;
		
			$('#count').html(count);
			$('.col-3').html(html7);
			
        });
        


})();