// ==UserScript== 
// @name    ReSozluk 
// @namespace   ReSozluk
// @description Sozlukte resim gostergeci
// @include http://www.eksisozluk.com/show.asp* 
// @include http://www.sourtimes.org/show.asp* 
// @include http://eksisozluk.com/show.asp* 
// @include http://sozluk.sourtimes.org/show.asp* 
// @include http://beta.eksisozluk.com* 
// ==/UserScript== 

/*
ReSozluk - a user script to show images in Eksisozluk.
Copyright (C) 2010-2011 Samet Atdag - samet2@gmail.com

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details on this link:
<http://www.gnu.org/licenses/>
*/
function JSONscriptRequest(fullUrl) {
    this.fullUrl = fullUrl; 
    this.noCacheIE = '&noCacheIE=' + (new Date()).getTime();
    this.headLoc = document.getElementsByTagName("head").item(0);
    this.scriptId = 'JscriptId' + JSONscriptRequest.scriptCounter++;
}

JSONscriptRequest.scriptCounter = 1;
JSONscriptRequest.prototype.buildScriptTag = function () {
    this.scriptObj = document.createElement("script");
    this.scriptObj.setAttribute("type", "text/javascript");
    this.scriptObj.setAttribute("charset", "utf-8");
    this.scriptObj.setAttribute("src", this.fullUrl + this.noCacheIE);
    this.scriptObj.setAttribute("id", this.scriptId);
}
JSONscriptRequest.prototype.removeScriptTag = function () {
    this.headLoc.removeChild(this.scriptObj);  
}
JSONscriptRequest.prototype.addScriptTag = function () {
    this.headLoc.appendChild(this.scriptObj);
}

function callbackfunc(jsonData) {
    var result = jsonData.responseData.results[0];
    var link = document.createElement('a');
    link.setAttribute('href',result.unescapedUrl);
    link.setAttribute('target','_blank');
    var image = document.createElement('img');
    image.setAttribute('src',result.tbUrl);
    image.setAttribute('style','width:150px;');
    link.appendChild(image);
    if (document.URL.indexOf("beta.eksisozluk.com") >= 0) {
        var a = document.getElementById("aside");
        a.insertBefore(link, a.firstChild);
    } else {
        var a = document.getElementsByClassName("rightcol")[0];
        a.insertBefore(link, a.firstChild);
    }
    aObj.removeScriptTag();
}

window.addEventListener("load", modifyText, false);
function modifyText() {
    var title = ""
    if (document.URL.indexOf("beta.eksisozluk.com") >= 0) {
        title = document.getElementById("title").children[0].text;
    } else {
        title = document.getElementsByName('t')[0].value;
    }
    request = 'http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=' + title + '&callback=callbackfunc';
    aObj = new JSONscriptRequest(request);
    aObj.buildScriptTag();
    aObj.addScriptTag();
}
