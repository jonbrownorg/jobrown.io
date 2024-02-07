var selectedQ;
var selectedID = "false";

function showAnswer(id,obj){
    document.getElementById("a-placeholder").style.display = "none";

    if(selectedID != "false") document.getElementById(selectedID).style.display = "none";
    selectedID = "a-answer-" + id;
    document.getElementById(selectedID).style.display = "block";
    
    if(selectedQ) selectedQ.className = "";
    selectedQ = obj;
    obj.className = "selected";
}

URL = window.parent.location.href;
befit = (URL.indexOf('befit') > -1); 
cc = (URL.indexOf('caloriecounter') > -1); 
ct = (URL.indexOf('calorietracker') > -1); 


function download() {
if (befit) {
document.getElementById("befit").style.display = "block";
document.getElementById("prod-name").innerHTML = "Download BeFit (Full Version)";
document.getElementById("cc").style.display = "none";
document.getElementById("ct").style.display = "none";
}
else if  (cc) {
document.getElementById("cc").style.display = "block";
document.getElementById("prod-name").innerHTML = "Download Calorie Counter (Full Version)";
document.getElementById("ct").style.display = "none";
document.getElementById("befit").style.display = "none";
}
else if  (ct) {
document.getElementById("ct").style.display = "block";
document.getElementById("prod-name").innerHTML = "Download Calorie Tracker (Full Version)";
document.getElementById("cc").style.display = "none";
document.getElementById("befit").style.display = "none";
}


}
