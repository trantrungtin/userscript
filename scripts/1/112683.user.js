// ==UserScript==
// @name           Clone Turning Page Button in nicovideo
// @namespace      http://pc12.2ch.net/test/read.cgi/streaming/1275642556/
// @version        3.2.0
// @description    『niconico』のページ移動ボタンを上部にも表示
// @include        http://live.nicovideo.jp/*
// @include        http://www.nicovideo.jp/my/*
// @include        http://www.nicovideo.jp/user/*
// @run-at         document-start
// @updateURL      https://userscripts.org/scripts/source/112683.meta.js
// @icon           data:image/vnd.microsoft.ico;base64,AAABAAEAMDAAAAEAGACoHAAAFgAAACgAAAAwAAAAYAAAAAEAGAAAAAAAABsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABnaW1WWFoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIiY41NjkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg4eIREhcLDBDR0tMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADs7O0kJikHBwq4uboAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMTU8CAQYCAQY4OT4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeYWMCAQYCAQYnKCr3+PgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADn6Ojm5ufm5+jo6OqcnZ8HBwoCAQYCAQYHBwqIiYvo6Onm5+jm5+jm5+jm5+jm5+jm5+jm5+jm5+jo6OqoqasLDBACAQYCAQYCAQZnaW3n6Ojm5+jm5+jm5ufw8PEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJyss4OT4UFhoUFhoUFhoUFhoJCQ4CAQYCAQYCAQYCAQYJCQ4UFhoUFhoUFhoUFhoUFhoUFhoUFhoUFhoUFhoUFhoJCQ4CAQYCAQYCAQYCAQYHBwoUFhoUFhoUFhoUFhoREhdhY2j09PUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADR0tMhIiYAAAACAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQZeYWMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWWFoCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYREhfv7/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9QEYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYODxLb3N4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9QEYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYODxLd3d4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9QEYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYODxLd3d4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9QEYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYODxLd3d4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9QEYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYCAQYODxLd3d4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9QEYCAQYCAQYJCQ4ODxICAQYCAQYCAQYCAQYC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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////n/+f//////8P/w///////w//B//////gAAAAP////4AAAAAP////AAAAAA////8AAAAAB////wAAAAAH////AAAAAAf///8AAAAAB////wAAAAAH////AAAAAAf///8AAAAAB////wAAAAAH////AAAAAAf///8AAAAAB////wAAAAAH////AAAAAAf///8AAAAAB////wAAAAAH////AAAAAAf///8AAAAAB////wAAAAAH////AAAAAAf///8AAAAAB////wAAAAAH////AAAAAA////+AAAAAD////8AAAAA///////gB////////8GD////////g8H///////8H4P///////g/wf//////8H/g///////w//D///////n/+f/////////////////////////////////////////////////////////8=
// @screenshot     data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAAAAB3RJTUUH3AUDBiYx5fCpxgAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABnRSTlMAoACgAKARL2aPAAAOiElEQVR42u2dXW8cVxmAh9/kH8BN7pFASFwgISGBkIr4pgqqqPhWr+hf4L4qSKQSlDRUDaUg6ogW7DbUSR3biRs7prZTu3HTpsuQUVabmXPOvOc9XzM7z6NttN6ZffedM+eZ98zZmW01A4CiVDQBABICICEAICEAEgIAEgIgIQAgIQASPs7K11frR/e5cYXFF8MzixKkm6ExYeHSbJsWa9t1ibU+3f2nPO3UTefoh90OINmobPu6knTKxYekl8ftE7Fy664vPKYU2bRsBym3hMbu62i9Uk1nzMoooXuTJW+Jta/nCVeOnjd/3d19HRJ6dXdHIwZWaeGavZZKEm69aAvodeDz7VjyAYJQKvdOSdR0jn4i1KmbT/dPydHHUT8lW9G7ryt5J3Y3sWQzhPXTawN6K1is4ahjcySjOPmmuStMikO1Vz6KcqduOtvGOtrWeNgNqf+S9u/tAO7OWbk7q+34ESihbQzgew7QK6GjxPWWdLk/QgnV5yG6IVbEYZ6k3EVvOq8+3e0J7hNCd5H3TViurjGTSn76lFpC4RmzbXTnflE4nyQcUCWSUFJJhAd44QBbXluE5Tpi0+kKi++Uga4qGjfWN+H5e6vekzR1JZSfLguHprrxpO8ZqSQryY73GmTKC5TXCC3RrKPwHC+w6dSFxasSejVmb98QxjdMzHhJGHhOKDmop5CwtzL0uup7jqeue/kllEzV9raeu8vGHd7HHTK4Z2jSJRxUCd1nDr2JOg5aSSuhcCJHLqGXdToJ1TOWIV9LxPrEwKbT9ekos6OZE/aYHRX2e/mhunf0Ivla0ms4Ktwi3ylcXT0PMTDWNGmi8uI74+01OyqsBL5TLwqFfOd4XZVQ+D2hcGZSeI7ke16R+pzQfVh1DP0lU0G+EkparLeCBUqueNG9F9RN5/v9hETgXr17E56FfU+4uE4l/IZNPlM6S3y9j9e3DjPZVQHCo8Ysy7VX8m/b1Ml4baD8EFa26SSzo+7zoIiDfK9uzAXcAIWpJIWl+MO3Eo7oscSbRtMJE6YSApSuhDQBABICIKHPhJvvlJH8ul75RaEz/ytoe6e/wud4dVfAhE8D5t8EKClhxMvzW4uEX6x5Xcgf8u1z9BsRek/ZfW/4mAXcAo+Hg5NQca19b+Hy3a/u6+Mk11j09mn356q3VH0xV6wjV+9xxPd2W6wYbiWU/0aAYteq+5PjKgdFgVJs6cznKkH1VLt7+NDb/u7GpBgORUL1WFR9P5Wk5/X+BEjg7fkz1X196i1VD2iNuynwPoNYZ5KQREKv+hB4A9jM59cKeiV0388ReGGn10lmzkqIhJOuhO5Lt4V9wnFdX++v90h+NUN4U5X8/jffE+CQ2w5nqlsKQy7FRsIyEqq/nHBcG62Q0Pai1/G79wbN8N9oUlRCuYS+lVB+vw8SjkZC+Q9yBHZNRSWUlKDe327yOp/0FSl8OOpVCdWbgISjlNBrKOU1U+e+n9g4G+F7/5jwQ3WDRvlps2J2yjZalv96iFduGFhGQvkv/8l/Ck2++71uD/WanZf/klfIlurqT+BH+9Z2JByZhLO+u4lDupRjFkf49XrvXIvjsOL1oSm2VFIM5UeiWd+N51y2NqbhKAAUk5C7MNlS32EIUAkBkBAAkBAACQEACQGQEACQEAAJAQAJAZAQAJAQAAkBAAkBkBAAkBAACQEACQGQEACQEAAJAUAo4XPPX+BR8HHx0uXNG9t0RCohFGPv4Ghjc5d2QEIoCRIioenVSinn4hub59UCNDcSglXCqg+hmYtrztdHPyQEj0rYLWW95dFY/aiESPjrZ5+VPLpvXFlZMT430qzQu1rShONLaNNGLSH1cLISnvQRS8IoHqoTXkymQfJx8zU9CpRjzZZpVEIknPfp3154sfX43Qt/euHFSxf//IqxT3d7cMtJN5kTDv/0+l1VVxXFOaFbQirhxCV8/Z/r88cb/766fvXaxvXNV/7yV2Ofdpc7r0UZEo6SpGjSJVDCiVdC20FtahJeefOtf62/c3Xj3eubW9s7N1/7299bfdrdUxV+pk44lYTGvkIljOvh1CrhlTfffmPtP2tvb2w87M63dndv3769euWKo087lGsN/1JIKExYPjB2j1oro0W2F202UgnlHk5tOPr7P7xUD+feubZ5Y2un7soHBwf/fcja+lsKCY1LY3kYkrAtja54IgltlbC3JMor52Q9nOA54R8vvlyXk5u3bu3v7x8eHt59xLXr70pmR/NLqEhYPhw1rtM/VmwdvyWDUqOKODnNiZmXXr68c/PW3t5eXUzqrly/cnp6Wv+7tb2t/orCNoMaZXZUkXDIOe2Ma0eRMLWEl199renQR0dH9Z8fPmJ3d7f3KwrbSZTjvCt/wrrqjYRImE/Cf7y+ura2vrFx7cbW1u577+3fuXPn4KD+b29vX/612+JwziFbFAm9EpbL7ziUIGFhlvhWpvALUCaScLWzd8ij7OPk5N6ySljkUszRJUwlBCgMEgIgIQASAgASAiAhACAhABICABICICEAICEAEgJATgmfAYCiUAkBGI4CICEAICEAEgIAEgIgIQAgIQASAgASAiAhACAhABICABICICEAICEAEoI/XwgjVijijCUOEiaR8HNaujv1VyqIM6I4SJhEws9r6e7UX6ogzojiIGESCb+opbtTf66COCOKg4RJJPySnWYd29LuTv2ZhWYF29L8cZpQgXEW1xnCduXJBwmTSPhlC/N1bCt0d+pPTNSLWk9aZI7TRLAFUeQTK074dmVoZyRMIuFX7DTr2JZ2d+rTJupFrSctMsdpItiCKPIZSJzegFHaGQmTSPhVO806tqXdnfpjJ/U6xtfzx2lWsC0VxpmvMJA47sbxyscRCgmTSPg1O806tqXdnfqUk3od4+vyOM0KtqXCOE2EWHHCtytWHHeQWO2MhEkk/IadZh3b0u5O/ZGdegXbIq84jlDCOM3bh5ZPeJxY7ezOBwmTSPiEnWYd29LuTj1voV563o4wzjyILZo8zpyB5BMlTp52RsIkEn7bTrOObWl3pz5pol70pBPfOLaAwji9WWXOJ+J2uZs6Sj5ImETC79lp1rEt7e7UH5hYXMe4gjDOPJRtqTxOEyo8Tqx8IsZxbHKUfJAwiYQ/1NLdqd9XQZwRxUHCJBKe19Ldqd9VQZwRxUHCJBI+paW7U7+jgjgjioOESSR8Wkt3p35LBXFGFAcJk0j4Uy3dnfpNFcQZURwkTCLhL7R0d+oTKogzojhImERCfr6BOPy8BcBoQEIAJARAQgBAQgAkBAAkBEBCAEBCACQEACQEQEIAQEIAJAQAJASYiITPAEBRqIQADEcBkBAAkBBgwhL+BgCKgoQASAiAhACAhABICABICICEAICEAEgIAEgIgIQAgIQAE5KQa9gBuJUJAAkBAAkBkBAAkBAACQEACQGQEACQEAAJAQAJAZAQAJAQAAkBIIOEzz1/YeKPi5cub97YpisAlbAYewdHG5u7tAMgYUmQEAYq4blz51rPzz0OEgLkkHDx366cSAiQVUIqIUBCCbtSGSVcynqIhDCUStjyikoIMEQJqYQAac8JjTOiY6+ElQkkhLFKONJK6DAQCYFKmNtDhqMwDglbT5bjDNBoIBLCsCS0jTaX0kkkhEFLaHSS2VGAYhIuN0gISIiEgIRICICEpeCmXigs4c7eIY+Tk3t0BaASAiAhACAhABICABICICEAICHAlCRcBYCiVJ8CQFGQEKC0hA8AoChICFBawk8AoChICFBawo8BoChICICEABOX8D4AFAUJAUpL+BEAFAUJYUysPGTZJDwDGDCNdbY/l2OjkBDG1GVXLIx6o6p7ACOh6biLT1rP435Q9LC2zUFCQML+T0m6RUgIIzMwqSetgHk8rD4EGBuNG3nCJvqsRZAQRqbc4nxMHrGTevj/SngKMGwaB1p/tl7MnEPcsEgI4zMwqRjZPJwHrE4ABkzTU41/thblTyZWKCSEURpYysMU21V9ADAGmo4rf31EICFAaQnvAkBRkBAACQEmLuExABQFCQFKS3gEAEVBQoDSEh4CQFGQEKC0hO8DQFGQEAAJASYu4SoAFKXaAYCiVAcAUJRqBgBFQUIAJARAQgBAQgAkBAAkBEBCAEBCACScOA8ePDg7Oyv1/wCrP7pOgL0wOQkne9WssTlqDcpmVSdgPDSUzcp4aCCrWFlNtBLaJKzLkW1RnqzqBGyHhk8LYTs0kFWsrJBwBBI2WRXsWGSVNCskHI2EDwpBVqmzQkIkREIkREKZhJ8UgqxSZ4WESIiESIiEMgk/LgRZpc4KCZEQCZEQCWUS3i8EWaXOCgmREAmREAllEn5UCLJKnVXl20uEF2EiIRKSVRIJu0JSCee8+pnP1o90Ep75s/KIswDiZrXyOAPJqpthzqyqCRqYQsLGwEFJOO9Mw+nurUzyd/fUh618Eo7dwOgSzg0cjoTD7O4DlzC8RGeScDlOC8c4HL3nQ9OTbH96ETErd5Jls5onkz8r5cTM2Avj0ks45O6OhHoJHbKNzsMxSqj+1YymV6nfniKr+ahvIFktJhOSmC6rSmFgtx4i4WAlDOzriSQs1d0laQxXwq5vXS2RMKmEp/40/ek0jIhZtfIJSS96Vl2yZaWXsDVJwznh0CSMYuAUJIzYbpkkNE6QMjuaQcITH5qedBKDdFmFJBkxq4hNp8uKa0eXWcIWQ+juUVJCQiRMmJVjF35QCLJKnRUSIiESIiESyiS8WwiySp0VEiIhEiIhEsokPC4EWaXOCgmREAmREAllEh4VgqxSZ4WESIiESIiEMgkPC0FWqbNCQiREQiREQpmE7xeCrFJnhYRIiIRIiIRIOHEJV6eKUYPmB7MKYvw/nje7sCCOjkVW4VlNtBLauH///vHx8UEh6o+uEzAeGvb393cKUX+08dBAVrGyQkIODcpDA1nFygoJAQqDhABICICEAICEAEgIAIX4HyhHwj1BFHBIAAAAAElFTkSuQmCC
// @author         100の人
// ==/UserScript==

(function(){
'use strict';



[
	// ニコニコ生放送 検索結果
	{
		URIs       : ['http://live.nicovideo.jp/search', 'http://live.nicovideo.jp/solrsearchasync'],
		target     : '#search_right',
		original   : '.pager',
		ref        : '.result_list',
	},
	
	// ニコニコ生放送 マイページ
	{
		URIs       : ['http://live.nicovideo.jp/my'],
		target     : '#e_m',
		original   : '.liveListInner4:not([id]) .pager',
		ref        : '.liveListInner4:not([id]) .ttl',
	},
	
	// ニコニコ生放送 放送中の番組
	{
		URIs       : ['http://live.nicovideo.jp/recent'],
		target     : '#sideContents, #pickupFrame',
		original   : '#mainContents .programPager, #pagerFrame',
		ref        : '.lvline[class*=col], #userFrame',
		watching   : '#mainContents, #onair_stream_list',
		watched    : '#Left_box, #userFrame + #pagerFrame',
	},
	
	// ニコニコ生放送 お気に入り＆注目の番組
	{
		URIs       : ['http://live.nicovideo.jp/'],
		target     : '#recentranking, #nicoLiveNews, #footer',
		original   : '#minitable .programPager, #program .foot',
		ref        : '.programListing, #program .data',
		watching   : '#minitable, #program',
		watched    : '.programListing, #program .data + .foot',
	},
	
	// ニコニコ動画 ユーザーページ
	{
		URIs       : ['http://www.nicovideo.jp/user/', 'http://www.nicovideo.jp/my/'],
		target     : '#footerWrap',
		original   : '.pagerWrap',
		ref        : '.spBox, .myContList, .stampList',
		watching   : '#stamp_list',
		watched    : '.stampList + .pagerWrap',
	},
].forEach(function(data){
	var isMatched = data.URIs.some(function(URI){
		return document.URL.indexOf(URI) === 0;
	});
	
	if(isMatched){
		startScript(function(){
			main(data);
		}, function(){
			return document.querySelector(data.target);
		});
	}
});



function main(data){

var style, sheet, cssRules;

// スタイルの設定
style = document.createElement('style');
document.head.appendChild(style);
sheet = style.sheet;
cssRules = sheet.cssRules;
[
	'.result_list{'
		+ 'border-top: 1px solid #888888;'
		+ '}',
	
	'#stamp_list .pagerWrap:first-child{'
		+ 'margin-bottom: 8px;'
		+ '}',
].forEach(function(rule){
	sheet.insertRule(rule, cssRules.length);
});



function cloneTurningPageButton(){
	// Greasemonkey
	var _greasemonkey = data.original.split(',');
	if(document.querySelectorAll(_greasemonkey[_greasemonkey.length - 1]).length > 1){
		return;
	}
	
	var original, turningPageButton, refChild;
	
	//ページ間移動ボタンを取得
	original = document.querySelector(data.original);
	if(!original){
		return;
	}
	
	//ページ間移動ボタンを複製
	turningPageButton = original.cloneNode(true);
	
	//ページ間移動ボタンを追加する場所の直後のノードを取得
	refChild = document.querySelector(data.ref);
	
	//ページ間移動ボタンを追加
	if(refChild){
		refChild.parentNode.insertBefore(turningPageButton, refChild);
	}
}
cloneTurningPageButton();



if(data.watching){
	data.watching = document.querySelector(data.watching);
	if(data.watching){
		data.watching.addEventListener('DOMNodeInserted', function(evt){
			if(evt.target.nodeType === Node.ELEMENT_NODE && evt.target === document.querySelector(data.watched)){
				cloneTurningPageButton();
			}
		});
	}
}



}



// 高速起動
function startScript(main, ref){
	var flag;
	(function checkRef(){
		if(!startMain()){
			window.setTimeout(checkRef, 1);
		}
	})();
	
	document.addEventListener('DOMContentLoaded', function stopScript(evt){
		evt.currentTarget.removeEventListener(evt.type, stopScript);
		startMain();
	});
	
	function startMain(){
		if(!flag && ref()){
			flag = true;
			main();
			return true;
		}
		else{
			false;
		}
	}
}



})();

