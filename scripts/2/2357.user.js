// ==UserScript==
// @name           Scrapbook and Album Viewer
// @namespace      http://kioshi.org/gm/
// @description    Adds one link to fast scrapbook writing and album viewing in orkut.com website
// @include        http://www.orkut.com*
// ==/UserScript==

(function() {
var i=document.getElementsByTagName('a');
for (var j=i.length-1; j>1; j--) {
    var linkdata =  i[j].getAttribute("href");
    var linkparts = linkdata.split("?");
    if (linkdata.match("Profile.") == "Profile." ) {
        var scrapviewlink = document.createElement("a");
        scrapviewlink.href="http://www.orkut.com/Scrapbook.aspx"+"?"+linkparts[1];
        scrapviewlink.appendChild(document.createTextNode("[S]"));

        var albumlink = document.createElement("a");
        albumlink.href="http://www.orkut.com/AlbumView.aspx"+"?"+linkparts[1];
        albumlink.appendChild(document.createTextNode("[A]"));

        i[j].parentNode.insertBefore( albumlink ,i[j].nextSibling);
        i[j].parentNode.insertBefore( scrapviewlink ,i[j].nextSibling);
        }
    }

var foot=document.getElementById("myFooter_linkContactUs");
foot.href="http://www.orkut.com/Scrapbook.aspx?uid=8320403805386475009"

})();

