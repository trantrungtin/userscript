// ==UserScript==
// @name           eEs Ordenes del Ministerio de Defensa (eRepublik)
// @namespace      www.erepublik.com
// @description    eEs Ordenes del Ministerio de Defensa (eRepublik)
// @version        1
// @include        http://www.erepublik.com/es
// @include        http://www.erepublik.com/en
// ==/UserScript==

GM_xmlhttpRequest({
	method: 'GET',
	url: 'http://erepublikspain.superforos.com/viewtopic.php?p=120095#120095',

	onload:function(response){
            //Retrieve and truncate string
            var order_string = response.responseText.match('orden.*?#');
            order_string = order_string.join("");   //Array->string
            order_string = order_string.substring(order_string.indexOf('>')+1,order_string.length-1)

            var tags = order_string.split('|');
			var orders = tags[0];
			var region = tags[1];
			var link = tags[2];
			var date_issued = tags[3];

			latest=document.getElementById('latestnews');

			params_el = document.createElement("h3");
			params_el.textContent = orders + ' ' + region;

			link_el = document.createElement("a"); 
			link_el.setAttribute('href',link);
			link_el.innerHTML = link;

			updated_el=document.createElement("h3")
			updated_el.textContent ='Last updated: ' + date_issued;

            //Insert elements on page
            if(order_string.length) {   //Only insert if string is uncommented
                latest.parentNode.insertBefore(params_el, latest);
                latest.parentNode.insertBefore(updated_el, latest);	
                latest.parentNode.insertBefore(link_el, latest);
            }
		}	
		}
	);
