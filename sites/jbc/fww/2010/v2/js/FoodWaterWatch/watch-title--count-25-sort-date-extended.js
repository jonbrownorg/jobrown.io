if (typeof window.Delicious == 'undefined') window.Delicious = {};
Delicious.Linkrolls_CB_99065 = function(posts) {
    Delicious.Linkrolls.writeln({"user":"FoodWaterWatch","usertags":"watch","version":"2","count":"25","sort":"date","title":"","extended":true,"BASE_URL":"http:\/\/delicious.com","STATIC_URL":"http:\/\/l.yimg.com\/hr"}, posts);
};
document.writeln('<scr'+'ipt type="text/javascript" src="http://l.yimg.com/hr/14012512/js/del-linkrolls.js"></scr'+'ipt>');
document.writeln('<scr'+'ipt type="text/javascript" src="http://feeds.delicious.com/v2/json/FoodWaterWatch/watch?count=25&callback=Delicious.Linkrolls_CB_99065"></scr'+'ipt>');