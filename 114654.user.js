// ==UserScript==
// @name           Default Weapon
// @namespace      Default Weapon
// @include        http://www.erepublik.com/en/military/battlefield/*
// ==/UserScript==

(function(a){var b=document.getElementById("a69925ed4a6ac8d4b191ead1ab58e853").value,c=document.URL,d=c.substring(49);unsafeWindow.XMLHttpRequest.prototype.open=function(i,f,g,e,h){this.addEventListener("readystatechange",function(){if(this.readyState==4&&this.status==200){if(this.responseText.indexOf(',"weaponId":10,')>0){console.log("change");GM_xmlhttpRequest({method:"POST",url:"http://www.erepublik.com/en/military/change-weapon",headers:{Accept:"application/json, text/javascript, */*","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest",Referer:c,DNT:"1"},data:"_token="+b+"&battleId="+d,onload:function(l){if(l.readyState==4&&l.status!=200){return}var k=l.responseText,j=k.indexOf("weapon_q")+8;if(j>8){j=k.substring(j,k.indexOf(".",j));document.getElementsByClassName("opacity_fix fighter_weapon_image")[2].src="http://www.erepublik.com/images/modules/pvp/weapons/weapon_q"+j+".png"}}})}}},false);a.call(this,i,f,g,e,h)}})(unsafeWindow.XMLHttpRequest.prototype.open);