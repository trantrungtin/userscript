// ==UserScript==

// @name           I_GShotBox

// @version        0

// @namespace      ShotBox

// @description    Es un simple sistema de mensajes, para la alianza Ikariam Ghost. Fuente (http://userscripts.org/scripts/show/28514) por "godormad".

// @include        http://s*.ikariam.*/index.php*

// ==/UserScript==

// ===========================================================================



//Taz2781

//



var version="0.15";

var displayedflag = 0;



unsafeWindow.displayshout = function() {

	if(displayedflag == 0) {

		document.getElementById("shoutframe").innerHTML = '<iframe width="208" border="0" frameborder="0" height="100%" src="http://www4.shoutmix.com/?mortimer" style="margin-left:0px;"></iframe>';

		displayedflag = 1;

	}

}




unsafeWindow.showshout = function() {
document.getElementById("shoutbar").style.left="0px";

}

unsafeWindow.hideshout = function() {
 document.getElementById("shoutbar").style.left="-216px";	

}





vshoutbar = document.createElement("div");

vshoutbar.setAttribute("id", "shoutbar");



var body = document.getElementsByTagName("body");



body[0].appendChild(vshoutbar);




document.getElementById("shoutbar").innerHTML ='<div id="shouttab" ondblclick="showshout()" onclick="hideshout()"><a style="height:100%;width:100%;"></a></div>'

	+ '<div style="color:#542C0F;line-height: 35px; font-size: 12px; font-weight: bold;width:205px;position:absolute;top:0px;left:0px;height:30px;background:url(http://img444.imageshack.us/img444/7013/backshoutsv0.png);background-repeat:no-repeat;">'

	+ '<a style="border-bottom:1px #542C0F dotted; color: #542C0F;" href="http://s8.ikariam.es/index.php?view=allyPage&allyId=1009&oldView=island&id=818">Ikariam Ghost</a></div>'

	+ '<div id="shoutframe" style="position:absolute;top:30px;bottom:3px;righ:4px;" onmouseover="displayshout()">Mouse over this area to load the shoutbox</div>'

	+ '<div style="width:210px;position:absolute;bottom:0px;left:0px;height:3px;background:url(http://img403.imageshack.us/img403/5998/shoutbarbgbotly1.gif);background-repeat:no-repeat;"></div>';



GM_addStyle("#shoutbar { background:url(http://img179.imageshack.us/img179/8825/shoutbarbgmideu5.gif); padding-top:33px; width:210px; position:fixed; left:-216px; top:-4px; bottom:150px; border:1px black solid; z-index:50;");

GM_addStyle("#shouttab { background:url(http://wilmar.info/ikgm.gif); width:29px; height:100px; position:absolute; right:-30px; top:15px; } ");

GM_addStyle("#shouttab:click { left: 0px; } ");
