// ==UserScript==
// @name	Tieba Imagizer
// @namespace	http://gera2ld.blog.163.com/
// @author	Gerald <gera2ld@163.com>
// @icon	http://s.gravatar.com/avatar/a0ad718d86d21262ccd6ff271ece08a3?s=80
// @version	1.2.6
// @description	贴吧图化 - Gerald倾情打造
// @homepage	http://userscripts.org/scripts/show/156579
// @downloadURL	https://userscripts.org/scripts/source/156579.user.js
// @updateURL	https://userscripts.org/scripts/source/156579.meta.js
// @include	http://tieba.baidu.com/*
// @exclude	http://tieba.baidu.com/tb/*
// @require	http://userscripts.org/scripts/source/186749.user.js
// ==/UserScript==
function o(e){var o="http://static.tieba.baidu.com/tb/static-frs/component/sign_shai/flash_image_loader.js";unsafeWindow.FlashImageLoader?e():$.getScript(o,e)}function t(){if(!utils.colorInput){var e=document.createElement("input");if(e.setAttribute("type","color"),"color"==e.type)return utils.colorInput=function(e,o,t,a){return utils.bindProp($("<input type=color id="+e+' class="ge_rsep colorbox">'),"value",o,t,a,["change","keyup"])};utils.addStyle("#colors{display:none;position:absolute;background:white;border:2px ridge;padding:10px;cursor:default;}#colors .colors{width:261px;cursor:pointer;margin:2px;border-collapse:separate;border-spacing:1px;background:black;}#colors .colors td{display:table-cell !important;width:12px;height:12px;border:none;emptycells:show;}.colorbox{width:12px;height:12px;border:1px solid;display:inline-block;position:relative;top:3px;}");var o,t,a,i=$("<div id=colors>").click(function(e){e.stopPropagation()});o=function(e){var o=$(e.target).attr("data");o&&("mouseover"==e.type?(t&&t.css("outline","none"),t=$(e.target).css("outline","1px outset yellow"),$("#ge_vcolor").val(o)):i.owner.setColor(o))},a=$("<table class=colors>").appendTo(i).mouseover(o).click(o);for(var n=["00","33","66","99","cc","ff"],l=["#ffffff","#ff0000","#00ff00","#0000ff","#ffff00","#00ffff","#ff00ff"],e=0;12>e;e++){o=$("<tr>").appendTo(a),t=6>e?"#"+n[e]+n[e]+n[e]:l[e-6],$("<td>").appendTo(o).css({background:t}).attr("data",t),e||$('<td rowspan=12 style="background:white;">').appendTo(o);for(var r=0;18>r;r++)t="#"+n[3*Math.floor(e/6)+Math.floor(r/6)]+n[r%6]+n[e%6],$("<td>").appendTo(o).css({background:t}).attr("data",t)}a=$("<form>").appendTo(i),$('<span id=ge_scolor class="ge_rsep colorbox">').appendTo(a),o=function(){$("#ge_scolor").css("background",this.value)},$('<input type=text id=ge_vcolor style="width:60px" class=ge_rsep>').appendTo(a).change(o).keyup(o),o=function(e){e.preventDefault(),i.owner.setColor($("#ge_scolor").css("background-color"))},$("<span class=ge_sbtn>OK</span>").appendTo(a).click(o),a.submit(o),t=null,utils.colorInput=function(e,o,t,a){var n=$("<span id="+e+" class=colorbox>"),l=utils.getObj(o,t);return n.css({border:"1px outset white",cursor:"pointer",background:l}).attr("data",l).click(function(e){i.owner!=n?(i.owner=n,i.appendTo(n).css({top:"auto",bottom:"auto"}).show(),i.offset().top+i.height()>pageYOffset+innerHeight?i.css("bottom","14px"):i.css("top","14px"),$("#ge_scolor").css("background",e=n.attr("data")),$("#ge_vcolor").val(e)):(i.owner=null,i.hide())}),n.setColor=function(e){e=e.replace(/rgb\((\d+),\s?(\d+),\s?(\d+)\)/i,function(e,o,t,a){e=[o,t,a];for(o in e)e[o]=parseInt(e[o]).toString(16),e[o].length<2&&(e[o]="0"+e[o]);return"#"+e.join("")}),n.attr("data",e).css("background",e),utils.setObj(o,e),i.owner=null,i.hide(),a()},n[0].val=function(){return n.attr("data")},n[0]}}}function a(a){function l(){var e={},o=[];return $("#w2iitalic").prop("checked")&&o.push("italic"),$("#w2ibold").prop("checked")&&o.push("bold"),o.push($("#w2isize").val()+"px"),v.val()&&o.push(v.val()),e.font=o.join(" "),e.color=x.val(),e.background=$("#w2iabgclr").prop("checked")?k.val():"inherit",e}function r(){b&&(h.html(b),b=null,T.addClass("ge_disabled"))}function s(){o(function(){utils.uploadImage=function(e,o){function t(){alert("图片上传发生错误！"),r(),n()}function a(e,a){var i=JSON.parse(a);if(i.error_code)t();else{var l="http://imgsrc.baidu.com/forum/pic/item/"+i.info.pic_id_encode+".jpg";$(o).replaceWith('<img class="BDE_Image" src="'+l+'" pic_type="0" onload="EditorUI.resizeImage(this,560)">'),n()}}function i(){unsafeWindow.FlashImageLoader.bind("uploadComplete",a),unsafeWindow.FlashImageLoader.bind("uploadError",t)}function n(){unsafeWindow.FlashImageLoader.unbind("uploadComplete",a),unsafeWindow.FlashImageLoader.unbind("uploadError",t)}$.get("/dc/common/imgtbs",function(o){i(),unsafeWindow.FlashImageLoader.uploadBase64("http://upload.tieba.baidu.com/upload/pic",e.replace(/^data:.*?;base64,/,""),{tbs:o.data.tbs})},"json")},w.removeClass("ge_disabled").text("开始图化").unbind("click").click(c)})}function p(e){function o(e){e.parentNode.removeChild(e)}function t(e){for(var o=[e];e.parentNode!==a.body&&(e=e.parentNode);)o.unshift(e);return o}var i,n,l=e.startContainer,r=e.endContainer,s=e.startOffset,p=e.endOffset,d=e.document,c=d.createDocumentFragment();if(1==l.nodeType&&(l=l.childNodes[s]||(i=l.appendChild(d.createTextNode("")))),1==r.nodeType&&(r=r.childNodes[p]||(n=r.appendChild(d.createTextNode("")))),l===r&&3==l.nodeType)return c.appendChild(d.createTextNode(l.substringData(s,p-s))),l.deleteData(s,p-s),e.collapse(!0),c;for(var u,f,b=c,h=t(l),g=t(r),w=0;h[w]==g[w];)w++;for(var m,$=w;m=h[$];$++){for(u=m.nextSibling,m==l?i||(3==e.startContainer.nodeType?b.appendChild(d.createTextNode(l.nodeValue.slice(s))):b.appendChild(l)):(f=m.cloneNode(!1),b.appendChild(f));u&&u!==r&&u!==g[$];)m=u.nextSibling,b.appendChild(u),u=m;b=f}b=c,h[w]||(b.appendChild(h[w-1].cloneNode(!1)),b=b.firstChild);for(var v,$=w;v=g[$];$++){if(u=v.previousSibling,v==r?n||3!=e.endContainer.nodeType||(b.appendChild(d.createTextNode(r.substringData(0,p))),r.deleteData(0,p)):(f=v.cloneNode(!1),b.appendChild(f)),$!=w||!h[w])for(;u&&u!==l;)v=u.previousSibling,b.insertBefore(u,b.firstChild),u=v;b=f}return e.setStartBefore(g[w]?h[w]?g[w]:h[w-1]:g[w-1]).collapse(!0),i&&o(i),n&&o(n),c}function d(e){return $("<div>").append(e.childNodes||e.html()).html(function(e,o){return o.replace(/<br>(<\/p>)?|<\/p>/gi,"\n")}).text().replace(/\s+$/,"")}function c(){b=h.html(),T.removeClass("ge_disabled");var o=parseInt($("#w2isize").val()),t=$('<img title="双击撤销">').attr("src",n),r=a.selection.getRange(),s=null;if(r.collapsed||(s=d(p(r))),s&&/\S/.test(s))r.insertNode(t[0]);else{if(s=d(h),!/\S/.test(s))return;h.html(t)}var c=s.split("\n"),u=0,f=document.createElement("canvas"),g=f.getContext("2d"),w=Math.round(1.5*o),m=[];s=l(),g.font=s.font,c.forEach(function(e){e=e.replace(/\s+$/,"");do{for(var o=0,t=0;t<e.length&&(o+=g.measureText(e[t]).width,!(o>560));t++)o>u&&(u=o);m.push(e.substr(0,t)),e=e.substr(t)}while(e)}),f.height=w*m.length,f.width=u,$("#w2ishadow").prop("checked")&&(g.shadowColor="gray",g.shadowBlur=g.shadowOffsetY=g.shadowOffsetX=Math.ceil(o/25)),$("#w2iabgclr").prop("checked")&&(g.fillStyle=s.background,g.fillRect(0,0,u,f.height)),g.font=s.font,g.fillStyle=g.strokeStyle=s.color,e=$("#w2istroke").prop("checked")?g.strokeText:g.fillText,i=0,m.forEach(function(t){e.call(g,t,0,o+w*i++)}),utils.uploadImage(f.toDataURL(),t)}function u(e){e=l();var o,t="";for(o in e)e[o]+=" !important";$("#w2ipreview").prop("checked")?f.html("#ueditor_replace{font:"+e.font+";color:"+e.color+";background:"+e.background+"}"):f.html("");for(o in e)t+=o+":"+e[o]+";";v.css("cssText",t)}var f=utils.addStyle(),b=null,h=a.$body,g=utils.addPopup($("#tb_rich_poster"),utils.addSButton("图 化")).panel;utils.uploadImage=null;var w=$('<div class="ge_sbtn ge_disabled" style="margin:0 0 2px;">图化组件初始化失败，点击重试</div>').appendTo(g).click(s);s(),utils.addStyle("#w2iface{max-width:800px;max-height:400px;}");var m=utils.list("w2ifaces","w2ifaceid",null,["微软雅黑"]).load(),v=$("<select id=w2iface>").appendTo($("<label>字体：</label>").appendTo(g)).change(function(){m.load(v.prop("selectedIndex")),u()});m.list.forEach(function(e){$("<option>"+e+"</option>").appendTo(v)}),v.prop("selectedIndex",m.last),$("<span class=ge_sbtn>+</span>").appendTo(g).click(function(e){(e=prompt("请输入字体名称："))&&(m.load(m.push(e)),$("<option>").text(e).appendTo(v),v.val(e),u())}),$("<span class=ge_sbtn>-</span>").appendTo(g).click(function(e){e=v.prop("selectedIndex"),v.children(":eq("+e+")").remove(),m.pop(e),m.load(v.prop("selectedIndex")),u()}),t();var x,k;utils.bindProp($("<input type=checkbox id=w2ipreview>").appendTo(g),"checked","w2ipreview",!1,u),$("<label for=w2ipreview>预览</label><br><label for=w2icolor>颜色：</label>").appendTo(g),$(x=utils.colorInput("w2icolor","w2icolor","#2222ff",u)).appendTo(g).addClass("ge_rsep"),$("<label for=w2isize>大小：</label>").appendTo(g),utils.bindProp($('<input type=number id=w2isize min=9 class=ge_rsep style="height:18px;width:40px;">').appendTo(g),"value","w2isize",22,u),utils.bindProp($("<input type=checkbox id=w2iabgclr>").appendTo(g),"checked","w2iabgclr",!1,u),$("<label for=w2iabgclr>背景色：</label>").appendTo(g),$(k=utils.colorInput("w2ibgclr","w2ibgclr","#efe4b0",u)).appendTo(g),$("<br>").appendTo(g),utils.bindProp($("<input type=checkbox id=w2ibold>").appendTo(g),"checked","w2ibold",!1,u),$("<label for=w2ibold class=ge_rsep>加粗</label>").appendTo(g),utils.bindProp($("<input type=checkbox id=w2iitalic>").appendTo(g),"checked","w2iitalic",!1,u),$("<label for=w2iitalic class=ge_rsep>倾斜</label>").appendTo(g),utils.bindProp($("<input type=checkbox id=w2ishadow>").appendTo(g),"checked","w2ishadow",!1,u),$("<label for=w2ishadow class=ge_rsep>阴影</label>").appendTo(g),utils.bindProp($("<input type=checkbox id=w2istroke>").appendTo(g),"checked","w2istroke",!1,u),$("<label for=w2istroke class=ge_rsep>镂空</label>").appendTo(g);var T=$('<span class="ge_sbtn ge_disabled" title="回到最后一次图化前的状态">撤销图化</span>').appendTo(g).click(r);v.prop("selectedIndex",m.last),u()}var n="http://tb2.bdstatic.com/tb/static-postor/images/loading_33e098e1.gif";unsafeWindow.PosterContext&&unsafeWindow.PosterContext.isPostAllowed()&&utils.wait(unsafeWindow,"test_editor",a);