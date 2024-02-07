function addMattesAndshadowss() {
  if(!document.getElementById || !document.createElement)
    return(false);
  var elements=document.getElementsByTagName("img");
  for ( i=0; i < elements.length; i++){
    var isshadows = false;
    var extraWidth = 10;
    var extraHeight = 14;
    var thisElem=elements[i];
    
    if (thisElem.className) {
    
      /* Tokenize the className */

      var classTokens = thisElem.className.split(' ');
      var whichToken = 0;
      for (whichToken = 0; whichToken < classTokens.length; whichToken++) {
        if (classTokens[whichToken] == "shadows")
          isshadows = true;
        if (classTokens[whichToken] == "nomatte")
          extraWidth = 0;
      }
      
      /* If this is a shadows object, create the necessary elements and insert them into the DOM tree. */

      if (isshadows) {
        var shadowsDiv = document.createElement('div');
        shadowsDiv.className = 'shadows';
        shadowsDiv.style.width = (thisElem.width + extraWidth) + "px";
        shadowsDiv.style.height = (thisElem.height + extraHeight) + "px";
        shadowsDiv.appendChild(thisElem.cloneNode(true));
        var topleft = document.createElement('div');
        topleft.className="topleft";
        shadowsDiv.appendChild(topleft);
        var topright = document.createElement('div');
        topright.className="topright";
        shadowsDiv.appendChild(topright);
        var bottomleft = document.createElement('div');
        bottomleft.className="bottomleft";
        shadowsDiv.appendChild(bottomleft);        
        var bottomright = document.createElement('div');
        bottomright.className="bottomright";
        shadowsDiv.appendChild(bottomright);
        thisElem.parentNode.replaceChild(shadowsDiv, thisElem);
      }
      
    }
  }
}
function addMattesAndgravatars() {
  if(!document.getElementById || !document.createElement)
    return(false);
  var elements=document.getElementsByTagName("img");
  for ( i=0; i < elements.length; i++){
    var isgravatar = false;
    var extraWidth = 10;
    var extraHeight = 14;
    var thisElem=elements[i];
    
    if (thisElem.className) {
    
      /* Tokenize the className */

      var classTokens = thisElem.className.split(' ');
      var whichToken = 0;
      for (whichToken = 0; whichToken < classTokens.length; whichToken++) {
        if (classTokens[whichToken] == "gravatar")
          isgravatar = true;
        if (classTokens[whichToken] == "nomatte")
          extraWidth = 0;
      }
      
      /* If this is a gravatar object, create the necessary elements and insert them into the DOM tree. */

      if (isgravatar) {
        var gravatarDiv = document.createElement('div');
        gravatarDiv.className = 'gravatar';
        gravatarDiv.style.width = (thisElem.width + extraWidth) + "px";
        gravatarDiv.style.height = (thisElem.height + extraHeight) + "px";
        gravatarDiv.appendChild(thisElem.cloneNode(true));
        var topleft = document.createElement('div');
        topleft.className="topleft";
        gravatarDiv.appendChild(topleft);
        var topright = document.createElement('div');
        topright.className="topright";
        gravatarDiv.appendChild(topright);
        var bottomleft = document.createElement('div');
        bottomleft.className="bottomleft";
        gravatarDiv.appendChild(bottomleft);        
        var bottomright = document.createElement('div');
        bottomright.className="bottomright";
        gravatarDiv.appendChild(bottomright);
        thisElem.parentNode.replaceChild(gravatarDiv, thisElem);
      }
      
    }
  }
}
