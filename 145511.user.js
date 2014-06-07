// ==UserScript==
// @name        okgjj
// @namespace   okgjj
// @description okgjj
// @include     http://www.okgj.com/*
// @version     1
// ==/UserScript==

(function(){
 
	var newLogo = "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";
	allElements = document.getElementsByTagName("img");
     for (var i = 0; i < allElements.length; i++) {
			if(allElements[i].src.indexOf('/skins/images/logo.png')>-1){
				allElements[i].src = "data:image/png;base64,"+newLogo;
			}
			
       
     }

  })();