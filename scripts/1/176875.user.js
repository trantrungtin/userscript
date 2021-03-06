// ==UserScript==
// @name			InnoReader Colorized Feeds
// @namespace		IRF
// @description		This script set colorfull feeds in InooReader
// @version			1.0.1
// @description  Fixes a few UI elements for easy reading with InoReader
// @match      https://inoreader.com/*
// @match      http://inoreader.com/*
// @homepage   http://www.kraeg.ru/
// @copyright  2013, Kirill V. Krasnov
// ==/UserScript==

.ar.article_unreaded[data-suid$="0"]{background-color: hsla(  0,100%,90%,1);}
.ar.article[data-suid$="0"]{background-color: hsla(  0,70%,95%,1);}
.ar.article_unreaded[data-suid$="1"]{background-color: hsla( 30,100%,88%,1);}
.ar.article[data-suid$="1"]{background-color: hsla( 30,100%,95%,1);}
.ar.article_unreaded[data-suid$="2"]{background-color: hsla( 45,100%,85%,1);}
.ar.article[data-suid$="2"]{background-color: hsla( 45,100%,95%,1);}
.ar.article_unreaded[data-suid$="3"]{background-color: hsla( 60,100%,82%,1);}
.ar.article[data-suid$="3"]{background-color: hsla( 60,100%,95%,1);}
.ar.article_unreaded[data-suid$="4"]{background-color: hsla( 75,100%,83%,1);}
.ar.article[data-suid$="4"]{background-color: hsla( 75,100%,95%,1);}
.ar.article_unreaded[data-suid$="5"]{background-color: hsla( 90,100%,83%,1);}
.ar.article[data-suid$="5"]{background-color: hsla( 90,100%,95%,1);}
.ar.article_unreaded[data-suid$="6"]{background-color: hsla(105,100%,85%,1);}
.ar.article[data-suid$="6"]{background-color: hsla(105,100%,95%,1);}
.ar.article_unreaded[data-suid$="7"]{background-color: hsla(120,100%,88%,1);}
.ar.article[data-suid$="7"]{background-color: hsla(120,100%,95%,1);}
.ar.article_unreaded[data-suid$="8"]{background-color: hsla(220,100%,88%,1);}
.ar.article[data-suid$="8"]{background-color: hsla(220,100%,95%,1);}
.ar.article_unreaded[data-suid$="9"]{background-color: hsla(280,100%,88%,1);}
.ar.article[data-suid$="9"]{background-color: hsla(280,100%,95%,1);}
/*.ar.article[data-suid]:hover{background-color: white;}*/
.ar.article > .article_card:hover{
		box-shadow: 0px 0px 1mm 1px hsla( 240, 50%, 50%, 1.0);
	}
.ar.article_expanded > .article_card[id]:hover, .ar[id]:hover:not(.article_expanded){
		background-color: white !important; 
	}
.ar.article_current_collapsed[id]:not(.article_unreaded):not(:hover){
		background-color: hsla( 0, 0%, 90%, 1.0) !important;
		outline: 1px dotted;
	}

	

	
	.ar:not(.article_expanded):hover{
		box-shadow: 0px 0px 1mm 1px hsla( 240, 50%, 50%, 1.0);
	}
	.ar:not(.article_unreaded):not(.article_expanded):not(:hover){
		background-color: hsla( 0, 0%, 90%, 1.0) !important;
	}
	
	
	.ar:not(.article_expanded){
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	}
	.article_header > div{
	vertical-align: bottom;
	}
	.article_header,.article_header_text{
	line-height: 22pt;
	}
	.article_header > div:first-child > a > img{
	vertical-align: text-bottom !important;
	}