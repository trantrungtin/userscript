// ==UserScript==
// @name           Facebook AutoLike & Auto Confirm By. Fadel Network
// @namespace      AutoLike
// @description    Auto Like and Auto Confirm Friend Request :)
// @include        http://www.facebook.com/*
// ==/UserScript==

// ==Credits==
body = document.body;
if(body != null) {
	div = document.createElement("div");
	div.style.position = "fixed";
	div.style.bottom = "+6px";
	div.style.left = "+6px";
	div.style.backgroundColor = "#eceff5";
	div.style.border = "2px solid #94a3c4";
	div.style.padding = "2px";
	div.innerHTML = "<a style=\"font-weight:bold;color:#333333\" href=\"http://www.facebook.com/phreakers\">By. Fadel Network</a>"
	
	body.appendChild(div);
}

// ==============
//auto confirm
body = document.body;
if(body != null) {
    div = document.createElement("div");
    div.style.position = "fixed";
    div.style.bottom = "+46px";
    div.style.left = "+6px";
    div.style.backgroundColor = "#eceff5";
    div.style.border = "2px solid #94a3c4";
    div.style.padding = "2px";
    div.innerHTML = "<a style=\"font-weight:bold;color:#333333\" href=\"JavaScript:AutoKonfirm()\">Auto Konfirm</a>"

    body.appendChild(div);

    unsafeWindow.AutoKonfirm = function() {

        buttons = document.getElementsByTagName("label");
        for(i = 0; i < buttons.length; i++) {
            myClass = buttons[i].getAttribute("class");
            if(myClass != null && myClass.indexOf("uiButtonConfirm") >= 0)
                    buttons[i].click();
        }

    };
}
// ==============
// ==Statuses==
body = document.body;
if(body != null) {
	div = document.createElement("div");
	div.style.position = "fixed";
	div.style.bottom = "+26px";
	div.style.left = "+6px";
	div.style.backgroundColor = "#eceff5";
	div.style.border = "2px solid #94a3c4";
	div.style.padding = "2px";
	div.innerHTML = "<a style=\"font-weight:bold;color:#333333\" href=\"JavaScript:AutoLike()\">Like Kabeh Status</a>"
	
	body.appendChild(div);
	
	unsafeWindow.AutoLike = function() {
	
		buttons = document.getElementsByTagName("button");
		for(i = 0; i < buttons.length; i++) {
			myClass = buttons[i].getAttribute("class");
			if(myClass != null && myClass.indexOf("like_link") >= 0)
				if(buttons[i].getAttribute("name") == "like")
					buttons[i].click();
		}
		
	};
}
// ==============