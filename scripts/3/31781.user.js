// ==UserScript==
// @name          H3421312bomberman
// @namespace     Soul Assassin,modified by bomberman
// @description   BB
// @include        http://ro*.triburile.ro/*
// @include        http://en*.tribalwars.net/*
// @include        http://en*.ds.ignames.net/*
// @include        http://nl*.tribalwars.nl/*
// @include        http://cs*.divokekmeny.cz/*
// @include        http://sv*.tribalwars.se/*
// @include        http://no*.tribalwars.no/*
// @include        http://s*.tribalwars.es/*
// @include        http://s*.tribalwars.fr/*
// @include        http://s*.tribalwars.it/*
// @include        http://pl*.plemiona.pl/*
// ==/UserScript==
      
      // ======== Variables globales del juego ========
      
      var TW_Use_Cache  = true;
      var TW_Image_Base = "/graphic/";
      var TW_World      = null;
      var TWT_World     = null;
      var TW_Domain     = null;
      var TW_DotWhat    = null;
      var TW_Hash       = null;
      var TW_Screen     = null;
      var TW_Mode       = null;
      var TW_Is_Premium = false;
      var TW_Quickbar   = null;
      var TW_Village_Id = null;
      var TW_Player_Id  = null;
      var TW_Villages   = null;
      var TW_Lang       = null;
      var TW_Mpt        = null;
      var TW_Is_Opera   = window.opera ? true : false;
      
      
      // ======== Lugar donde insertar el Texto ========
      
      (function(){

      	if (location.href.match( /forum\.php/ )) {
      		CambiaForo();
      		return;
      	}

      	if (location.href.match( /intro_igm/ )) {
      		CambiaForo();
      		return;
      	}

      	if (location.href.match( /screen=mail/ )) {
      		CambiaCuadroTexto();
      		//return;
      	}

	if (location.href.match( /screen=memo/ )) {
      		CambiaForo();
      		return;
      	}

	if (location.href.match( /screen=settings/ )) {
      		CambiaForo();
      		return;
      	}


      })();
      function CambiaForo() {
      	
      	var adframes = $$("iframe");
      	for (i = 0; i < adframes.length; i++) {
      		adframes[i].src = 'about:blank';
      	}
      	var posts = $$("div");
      	for (i = 0; i < posts.length; i++) {
      		if (posts[i].innerHTML.match(/<iframe/,"gi") != null) {
      			posts[i].style.display = "none";
      		}
      	}
      	
      	CambiaCuadroTexto();
      }
      
      function CambiaCuadroTexto() {
      
      	var body = $$("body");
      
      	var random = new Date;
      	random = random.getTime();
      
      	var xhtml = "<table class='bbcodearea'> " +
      		    "<tr>    " +
		    '	<td>|</td>' + 
      		    '	<td><a tabindex="10" href="javascript:insertBB(\'player\','+random+');"><img src="'+ TW_Image_Base +'/face.png" alt="Jugador" /></a></td>' +
      		    '	<td><a tabindex="11" href="javascript:insertBB(\'village\','+random+');"><img src="'+ TW_Image_Base +'/buildings/main.png" alt="Pueblo" /></a></td>' +
      		    '	<td><a tabindex="12" href="javascript:insertBB(\'tribe\','+random+');"><img src="'+ TW_Image_Base +'/command/support.png" alt="Tribu" /></a></td>' +
		    '   <td>|</td>'+
      		    '	<td><a tabindex="13" href="javascript:insertBB(\'b\','+random+');"><img src="http://www.realobjects.com/fileadmin/od/eopro5/eopro/eophelp/en_US/resources/bold.gif" alt="Negrita" /></a></td>' +
      		    '	<td><a tabindex="14" href="javascript:insertBB(\'i\','+random+');"><img src="http://etsiit.ugr.es/icons/editor/italic.png" alt="Cursiva" /></a></td>' +
		    '	<td><a tabindex="15" href="javascript:insertBB(\'c\','+random+');"><img src="http://img441.imageshack.us/img441/2318/codein3.png" alt="Code" /></a></td>' +
      		    '	<td><a tabindex="16" href="javascript:insertBB(\'u\','+random+');"><img src="http://etsiit.ugr.es/icons/editor/underline.png" alt="Subrayado" /></a></td>' +
      		    '	<td>|</td>' +
      		    '	<td><a tabindex="17" href="javascript:insertBB(\'quote\','+random+');"><img src="http://www.offthemap.com/images/site/blockquote.jpg" alt="Cita" /></a></td>' +
      		    '	<td><a tabindex="18" href="javascript:insertBB(\'url\','+random+');"><img src="http://runbut.com/Images/Hyperlink.jpg" alt="URL" /></a></td>' +
      		    '	<td><a tabindex="19" href="javascript:insertBB(\'Xurl\','+random+');"><img src="http://img50.imageshack.us/img50/6742/cuervozi7.png" alt="XURL" /></a></td>' +
      		    '	<td><a tabindex="20" href="javascript:insertBB(\'img\','+random+');"><img src="http://www.zaburi.com/images/icons/image_add.png" alt="Imagen" /></a></td>' +
		    '	<td>|</td>' +
		    '	<td><a tabindex="21" href="javascript:insertBB(\'large text\','+random+');"><img src="http://forum.tribalwars.net/images/icons/icon14.gif" /></a></td>' +
		    '	<td><a tabindex="22" href="javascript:insertBB(\'small text\','+random+');"><img src="http://forum.tribalwars.net/images/icons/icon13.gif" /></a></td>' +
		    '	<td>|</td>' +
      		    "</tr>   " +
		    '	<td>|</td>' +
                    '	<td><a tabindex="138" href="javascript:insertBB(\'tender01\','+random+');"><img src="http://img244.imageshack.us/img244/51/tenderwl6tv3.png" /></a></td>' +
                    '	<td><a tabindex="34" href="javascript:insertBB(\'smily lol\','+random+');"><img src="http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_lol.gif" /></a></td>' +
                    '	<td><a tabindex="35" href="javascript:insertBB(\'smily smile\','+random+');"><img src="http://forum.tribalwars.net/images/smilies/smile.gif" /></a></td>' +
                    '	<td><a tabindex="36" href="javascript:insertBB(\'smily idea\','+random+');"><img src="http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_idea.gif" /></a></td>' +
                    '	<td><a tabindex="37" href="javascript:insertBB(\'smily wink\','+random+');"><img src="http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_wink.gif" /></a></td>' +
                    '	<td><a tabindex="38" href="javascript:insertBB(\'smily evil\','+random+');"><img src="http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_evil.gif" /></a></td>' +
		    '	<td><a tabindex="39" href="javascript:insertBB(\'smily twisted\','+random+');"><img src="http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_twisted.gif" /></a></td>' +
                    '	<td><a tabindex="40" href="javascript:insertBB(\'smily eek\','+random+');"><img src="http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_eek.gif" /></a></td>' +
                    '	<td><a tabindex="41" href="javascript:insertBB(\'smily surprised\','+random+');"><img src="http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_surprised.gif" /></a></td>' +
                    '	<td><a tabindex="42" href="javascript:insertBB(\'smily cry\','+random+');"><img src="http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_cry.gif" /></a></td>' +
                    '	<td><a tabindex="43" href="javascript:insertBB(\'smily smile2\','+random+');"><img src="http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_smile.gif" /></a></td>' +
		    '	<td><a tabindex="44" href="javascript:insertBB(\'smily cool\','+random+');"><img src="http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_cool.gif" /></a></td>' +
		    '	<td><a tabindex="45" href="javascript:insertBB(\'smily sad\','+random+');"><img src="http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_sad.gif" /></a></td>' +
                    '	<td><a tabindex="46" href="javascript:insertBB(\'smily confused\','+random+');"><img src="http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_confused.gif" /></a></td>' +
		    '	<td><a tabindex="47" href="javascript:insertBB(\'smily rolleyes\','+random+');"><img src="http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_rolleyes.gif" /></a></td>' +
		    '	<td><a tabindex="48" href="javascript:insertBB(\'smily briggin\','+random+');"><img src="http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_biggrin.gif" /></a></td>' +
		    '	<td><a tabindex="49" href="javascript:insertBB(\'smily redface\','+random+');"><img src="http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_redface.gif" /></a></td>' +
		    '	<td><a tabindex="50" href="javascript:insertBB(\'smily razz\','+random+');"><img src="http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_razz.gif" /></a></td>' +
		    '	<td><a tabindex="51" href="javascript:insertBB(\'smily neutral\','+random+');"><img src="http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_neutral.gif" /></a></td>' +
		    '	<td>|</td>' +
   		    "   </tr>   " +
		    '	<td>|</td>' +
		    '	<td><a tabindex="52" href="javascript:insertBB(\'enfadado\','+random+');"><img src="http://avatares.miarroba.com/src/1450838/2c8c8416.gif" /></a></td>' +
		    '	<td><a tabindex="53" href="javascript:insertBB(\'risas\','+random+');"><img src="http://avatares.miarroba.com/src/1450838/bb8a41b2.gif" /></a></td>' +
		    '	<td><a tabindex="54" href="javascript:insertBB(\'beso\','+random+');"><img src="http://img122.imageshack.us/img122/9479/besock1.gif" /></a></td>' +
		    '	<td><a tabindex="55" href="javascript:insertBB(\'corazon\','+random+');"><img src="http://img112.imageshack.us/img112/3645/corazonjl0.gif" /></a></td>' +
		    '	<td><a tabindex="56" href="javascript:insertBB(\'hamster\','+random+');"><img src="http://img112.imageshack.us/img112/3021/hamsterhj6.gif" /></a></td>' +
		    '	<td><a tabindex="57" href="javascript:insertBB(\'ara?a\','+random+');"><img src="http://img240.imageshack.us/img240/3405/araaku1.gif" /></a></td>' +
		    '	<td><a tabindex="58" href="javascript:insertBB(\'oveja\','+random+');"><img src="http://img511.imageshack.us/img511/4282/ovejano8.gif" /></a></td>' +
		    '	<td><a tabindex="59" href="javascript:insertBB(\'marihuana\','+random+');"><img src="http://img77.imageshack.us/img77/2666/hojamarihuanata2.png" /></a></td>' +
		    '	<td><a tabindex="60" href="javascript:insertBB(\'cerveza\','+random+');"><img src="http://img77.imageshack.us/img77/8070/cervezapt0.png" /></a></td>' +
		    '	<td><a tabindex="61" href="javascript:insertBB(\'dinero\','+random+');"><img src="http://img384.imageshack.us/img384/9544/sacodineroun2.gif" /></a></td>' +
		    '	<td><a tabindex="62" href="javascript:insertBB(\'paz\','+random+');"><img src="http://img119.imageshack.us/img119/8813/simbolopazpd8.png" /></a></td>' +
		    '	<td><a tabindex="63" href="javascript:insertBB(\'espada\','+random+');"><img src="http://img104.imageshack.us/img104/7513/espadagy6.gif" /></a></td>' +
		    '	<td><a tabindex="64" href="javascript:insertBB(\'caca\','+random+');"><img src="http://img369.imageshack.us/img369/4199/escrementozk5.png" /></a></td>' +
		    '	<td><a tabindex="65" href="javascript:insertBB(\'fumado\','+random+');"><img src="http://img369.imageshack.us/img369/1283/carafumadoxi0.gif" /></a></td>' +
		    '	<td><a tabindex="66" href="javascript:insertBB(\'calavera\','+random+');"><img src="http://img129.imageshack.us/img129/8434/calaverane8.gif" /></a></td>' +
		    '	<td><a tabindex="67" href="javascript:insertBB(\'playmobilsoul\','+random+');"><img src="http://img361.imageshack.us/img361/9100/playmobilsoulot2.png" /></a></td>' +
		    '	<td><a tabindex="68" href="javascript:insertBB(\'playboy\','+random+');"><img src="http://img162.imageshack.us/img162/5818/playboyws4.png" /></a></td>' +
		    '	<td><a tabindex="69" href="javascript:insertBB(\'xD\','+random+');"><img src="http://www.emoticonesanimados.com.ar/img/d3fc8a1e5d60581f9008ace99cfcf60e.gif" /></a></td>' +
		    '	<td>|</td>' +
		    "</tr>   " +
		    '	<td>|</td>' +
		    '	<td><a tabindex="70" href="javascript:insertBB(\'unit spear\','+random+');"><img src="http://www.tribalwars.net/graphic/unit/unit_spear.png" /></a></td>' +
		    '	<td><a tabindex="71" href="javascript:insertBB(\'unit sword\','+random+');"><img src="http://www.tribalwars.net/graphic/unit/unit_sword.png" /></a></td>' +
		    '	<td><a tabindex="72" href="javascript:insertBB(\'unit axe\','+random+');"><img src="http://www.tribalwars.net/graphic/unit/unit_axe.png" /></a></td>' +
		    '	<td><a tabindex="73" href="javascript:insertBB(\'unit archer\','+random+');"><img src="http://www.tribalwars.net/graphic/unit/unit_archer.png" /></a></td>' +
		    '	<td>|</td>' +
		    '	<td><a tabindex="74" href="javascript:insertBB(\'unit scout\','+random+');"><img src="http://www.tribalwars.net/graphic/unit/unit_spy.png" /></a></td>' +
		    '	<td><a tabindex="75" href="javascript:insertBB(\'unit lcav\','+random+');"><img src="http://www.tribalwars.net/graphic/unit/unit_light.png" /></a></td>' +
		    '	<td><a tabindex="76" href="javascript:insertBB(\'unit hcav\','+random+');"><img src="http://www.tribalwars.net/graphic/unit/unit_heavy.png" /></a></td>' +
		    '	<td><a tabindex="77" href="javascript:insertBB(\'unit marcher\','+random+');"><img src="http://www.tribalwars.net/graphic/unit/unit_marcher.png" /></a></td>' +
		    '	<td>|</td>' +
		    '	<td><a tabindex="78" href="javascript:insertBB(\'unit ram\','+random+');"><img src="http://www.tribalwars.net/graphic/unit/unit_ram.png" /></a></td>' +
		    '	<td><a tabindex="79" href="javascript:insertBB(\'unit catapult\','+random+');"><img src="http://www.tribalwars.net/graphic/unit/unit_catapult.png" /></a></td>' +
		    '	<td>|</td>' +
		    '	<td><a tabindex="80" href="javascript:insertBB(\'unit paladin\','+random+');"><img src="http://www.tribalwars.net/graphic/unit/unit_knight.png" /></a></td>' +
		    '	<td><a tabindex="81" href="javascript:insertBB(\'unit noble\','+random+');"><img src="http://www.tribalwars.net/graphic/unit/unit_snob.png" /></a></td>' +
		    '	<td>|</td>' +
		    '	<td><a tabindex="82" href="javascript:insertBB(\'madera\','+random+');"><img src="http://tribalwars.es/graphic/holz.png" /></a></td>' +
		    '	<td><a tabindex="83" href="javascript:insertBB(\'barro\','+random+');"><img src="http://tribalwars.es/graphic/lehm.png" /></a></td>' +
		    '	<td><a tabindex="84" href="javascript:insertBB(\'hierro\','+random+');"><img src="http://tribalwars.es/graphic/eisen.png" /></a></td>' +
		    '	<td>|</td>' +
                    "   </tr>   " +
                    '	<td>|</td>' +
                    '	<td><a tabindex="100" href="javascript:insertBB(\'logohh16\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_14.gif" /></a></td>' +
                    '	<td><a tabindex="99" href="javascript:insertBB(\'logohh15\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_06.gif" /></a></td>' +
                    '	<td><a tabindex="87" href="javascript:insertBB(\'logohh3\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_16.gif" /></a></td>' +
                    '	<td><a tabindex="124" href="javascript:insertBB(\'logohh40\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_08.gif" /></a></td>' +
		    '	<td><a tabindex="85" href="javascript:insertBB(\'logohh1\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_18.gif" /></a></td>' +
                    '	<td><a tabindex="123" href="javascript:insertBB(\'logohh39\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_26.gif" /></a></td>' +
		    '	<td><a tabindex="86" href="javascript:insertBB(\'logohh2\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_02.gif" /></a></td>' +
		    '	<td><a tabindex="89" href="javascript:insertBB(\'logohh5\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_05.gif" /></a></td>' +
		    '	<td><a tabindex="90" href="javascript:insertBB(\'logohh6\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_20.gif" /></a></td>' +
		    '	<td><a tabindex="91" href="javascript:insertBB(\'logohh7\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_10.gif" /></a></td>' +
	            '	<td><a tabindex="92" href="javascript:insertBB(\'logohh8\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_15.gif" /></a></td>' +
		    '	<td><a tabindex="93" href="javascript:insertBB(\'logohh9\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_04.gif" /></a></td>' +
		    '	<td><a tabindex="94" href="javascript:insertBB(\'logohh10\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_12.gif" /></a></td>' +
		    '	<td><a tabindex="95" href="javascript:insertBB(\'logohh11\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_13.gif" /></a></td>' +
		    '	<td><a tabindex="96" href="javascript:insertBB(\'logohh12\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_17.gif" /></a></td>' +
		    '	<td><a tabindex="97" href="javascript:insertBB(\'logohh13\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_19.gif" /></a></td>' +
		    '	<td><a tabindex="98" href="javascript:insertBB(\'logohh14\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_11.gif" /></a></td>' +
                    '	<td>|</td>' +
			    "</tr>   " +
                    '	<td>|</td>' +
		    '	<td><a tabindex="102" href="javascript:insertBB(\'logohh18\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_08.gif" /></a></td>' +
		    '	<td><a tabindex="103" href="javascript:insertBB(\'logohh19\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_01.gif" /></a></td>' +
		    '	<td><a tabindex="104" href="javascript:insertBB(\'logohh20\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_07.gif" /></a></td>' +
		    '	<td><a tabindex="105" href="javascript:insertBB(\'logohh21\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_14.gif" /></a></td>' +
		    '	<td><a tabindex="106" href="javascript:insertBB(\'logohh22\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_06.gif" /></a></td>' +
		    '	<td><a tabindex="107" href="javascript:insertBB(\'logohh23\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_30.gif" /></a></td>' +
		    '	<td><a tabindex="108" href="javascript:insertBB(\'logohh24\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_10.gif" /></a></td>' +
		    '	<td><a tabindex="109" href="javascript:insertBB(\'logohh25\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_29.gif" /></a></td>' +
		    '	<td><a tabindex="110" href="javascript:insertBB(\'logohh26\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_12.gif" /></a></td>' +
		    '	<td><a tabindex="111" href="javascript:insertBB(\'logohh27\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_02.gif" /></a></td>' +
		    '	<td><a tabindex="112" href="javascript:insertBB(\'logohh28\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_22.gif" /></a></td>' +
		    '	<td><a tabindex="113" href="javascript:insertBB(\'logohh29\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_24.gif" /></a></td>' +
		    '	<td><a tabindex="114" href="javascript:insertBB(\'logohh30\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_28.gif" /></a></td>' +
		    '	<td><a tabindex="115" href="javascript:insertBB(\'logohh31\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_16.gif" /></a></td>' +
		    '	<td><a tabindex="116" href="javascript:insertBB(\'logohh32\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_23.gif" /></a></td>' +
		    '	<td><a tabindex="117" href="javascript:insertBB(\'logohh33\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_04.gif" /></a></td>' +
		    '	<td><a tabindex="118" href="javascript:insertBB(\'logohh34\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_07.gif" /></a></td>' +
                    '	<td>|</td>' +
		    "</tr>   " +
                    '	<td>|</td>' +
		    '	<td><a tabindex="119" href="javascript:insertBB(\'logohh35\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_27.gif" /></a></td>' +
		    '	<td><a tabindex="120" href="javascript:insertBB(\'logohh36\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_20.gif" /></a></td>' +
		    '	<td><a tabindex="121" href="javascript:insertBB(\'logohh37\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_17.gif" /></a></td>' +
		    '	<td><a tabindex="122" href="javascript:insertBB(\'logohh38\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_15.gif" /></a></td>' +
		    '	<td><a tabindex="101" href="javascript:insertBB(\'logohh17\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_03.gif" /></a></td>' +
                    '	<td><a tabindex="88" href="javascript:insertBB(\'logohh4\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_09.gif" /></a></td>' +
		    '	<td><a tabindex="125" href="javascript:insertBB(\'logohh41\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_19.gif" /></a></td>' +
		    '	<td><a tabindex="126" href="javascript:insertBB(\'logohh42\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_03.gif" /></a></td>' +
		    '	<td><a tabindex="127" href="javascript:insertBB(\'logohh43\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_21.gif" /></a></td>' +
		    '	<td><a tabindex="128" href="javascript:insertBB(\'logohh44\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_01.gif" /></a></td>' +
		    '	<td><a tabindex="129" href="javascript:insertBB(\'logohh45\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_11.gif" /></a></td>' +
		    '	<td><a tabindex="130" href="javascript:insertBB(\'logohh46\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_13.gif" /></a></td>' +
		    '	<td><a tabindex="131" href="javascript:insertBB(\'logohh47\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_09.gif" /></a></td>' +
		    '	<td><a tabindex="132" href="javascript:insertBB(\'logohh48\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_18.gif" /></a></td>' +
		    '	<td><a tabindex="133" href="javascript:insertBB(\'logohh49\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_05.gif" /></a></td>' +
		    '	<td><a tabindex="134" href="javascript:insertBB(\'logohh50\','+random+');"><img src="http://www.discotecamasia.com/foros/Smileys/masiablue/pati.gif" /></a></td>' +
                    '	<td>|</td>' +
                    "</tr>   " +
                     '	<td>|</td>' +
		    '	<td><a tabindex="23" href="javascript:insertBB(\'white text\','+random+');"><img src="http://i211.photobucket.com/albums/bb9/RakizzteanEmpire/White.gif" /></a></td>' +
		    '	<td><a tabindex="24" href="javascript:insertBB(\'black text\','+random+');"><img src="http://i211.photobucket.com/albums/bb9/RakizzteanEmpire/Black.gif" /></a></td>' +
		    '	<td><a tabindex="25" href="javascript:insertBB(\'brown text\','+random+');"><img src="http://img522.imageshack.us/img522/2029/brownlt9.jpg" /></a></td>' +	
		    '	<td><a tabindex="26" href="javascript:insertBB(\'red text\','+random+');"><img src="http://i211.photobucket.com/albums/bb9/RakizzteanEmpire/red.jpg" /></a></td>' +
		    '	<td><a tabindex="27" href="javascript:insertBB(\'orange text\','+random+');"><img src="http://img301.imageshack.us/img301/9283/orangeuv4.jpg" /></a></td>' +	
		    '	<td><a tabindex="28" href="javascript:insertBB(\'yellow text\','+random+');"><img src="http://i211.photobucket.com/albums/bb9/RakizzteanEmpire/yellow.jpg" /></a></td>' +
		    '	<td><a tabindex="29" href="javascript:insertBB(\'green text\','+random+');"><img src="http://i211.photobucket.com/albums/bb9/RakizzteanEmpire/green.jpg" /></a></td>' +
		    '	<td><a tabindex="30" href="javascript:insertBB(\'cyan text\','+random+');"><img src="http://i211.photobucket.com/albums/bb9/RakizzteanEmpire/cyan.jpg" /></a></td>' +
		    '	<td><a tabindex="31" href="javascript:insertBB(\'blue text\','+random+');"><img src="http://i211.photobucket.com/albums/bb9/RakizzteanEmpire/blue.jpg" /></a></td>' +
		    '	<td><a tabindex="32" href="javascript:insertBB(\'violet text\','+random+');"><img src="http://i211.photobucket.com/albums/bb9/RakizzteanEmpire/violet.jpg" /></a></td>' +
		    '	<td><a tabindex="33" href="javascript:insertBB(\'pink text\','+random+');"><img src="http://img265.imageshack.us/img265/2923/pinkuk4.jpg" /></a></td>' +
		    '	<td>|</td>' +
		    "   </table>";
      
      	document.body.innerHTML = document.body.innerHTML.replace( /<textarea\s/gi, xhtml+"<textarea id=\"txt_"+random+"\" ");
      	
      	NuevaFuncionTW("insertBB", function(insertType, ident){
      
      			txt = document.getElementById("txt_"+ident);
      
      			var start = txt.selectionStart;
      			var end   = txt.selectionEnd;
      			var txtlength = 0;
      			var insertButton = '';
      			var txtinsertBefore = '';
      			var txtinsertAfter = '';
      			var selection = '';
      			var selectionBefore = '';
      			var selectionAfter = '';
      
      			switch (insertType) {
      				case 'player':
      					txtinsertBefore = "[player]";
      					txtinsertAfter = "[/player]";
      					insertButton = 'P';
      					break;
      				case 'village':
      					txtinsertBefore = "[village]";
      					txtinsertAfter = "[/village]";
      					insertButton = 'V';
      					break;
      				case 'tribe':
      					txtinsertBefore = "[ally]";
      					txtinsertAfter = "[/ally]";
      					insertButton = 'A';
      					break;
      				case 'b':
      					txtinsertBefore = "[b]";
      					txtinsertAfter = "[/b]";
      					insertButton = 'B';
      					break;
      				case 'i':
      					txtinsertBefore = "[i]";
      					txtinsertAfter = "[/i]";
      					insertButton = 'I';
      					break;
      				case 'c':
      					txtinsertBefore = "[code]";
      					txtinsertAfter = "[/code]";
      					insertButton = 'c';
      					break;
      				case 'u':
      					txtinsertBefore = "[u]";
      					txtinsertAfter = "[/u]";
      					insertButton = 'U';
      					break;
      				case 'quote':
      					txtinsertBefore = "[quote=Nombre Persona Aqui]";
      					txtinsertAfter = "[/quote]";
      					insertButton = 'Q';
      					break;
      				case 'url':
      					txtinsertBefore = "[url]";
      					txtinsertAfter = "[/url]";
      					insertButton = 'L';
      					break;
      				case 'Xurl':
      					txtinsertBefore = "[url=Link]";
      					txtinsertAfter = "Nombre[/url]";
      					insertButton = 'X';
      					break;
      				case 'img':
      					txtinsertBefore = "[img]";
      					txtinsertAfter = "[/img]";
      					insertButton = 'M';
      					break;
				case 'large text':
      					txtinsertBefore = "[size=20]";
      					txtinsertAfter = "[/size]";
      					insertButton = 'R';
      					break;
				case 'small text':
      					txtinsertBefore = "[size=7.5]";
      					txtinsertAfter = "[/size]";
      					insertButton = 'S';
      					break;
				case 'tender01':
      					txtinsertBefore = "[img]http://img244.imageshack.us/img244/51/tenderwl6tv3.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '138';
      					break;
				case 'smily lol':
      					txtinsertBefore = "[img]http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_lol.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '1';
      					break;
				case 'smily smile':
      					txtinsertBefore = "[img]http://forum.tribalwars.net/images/smilies/smile.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '2';
      					break;
				case 'smily idea':
      					txtinsertBefore = "[img]http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_idea.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '3';
      					break;
                                case 'smily wink':
      					txtinsertBefore = "[img]http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_wink.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '4';
      					break;
				case 'smily evil':
      					txtinsertBefore = "[img]http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_evil.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '5';
      					break;
				case 'smily twisted':
      					txtinsertBefore = "[img]http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_twisted.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '6';
      					break;
                                case 'smily eek':
      					txtinsertBefore = "[img]http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_eek.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '7';
      					break;
				case 'smily surprised':
      					txtinsertBefore = "[img]http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_surprised.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '8';
      					break;
				case 'smily cry':
      					txtinsertBefore = "[img]http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_cry.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '9';
      					break;
				case 'smily smile2':
      					txtinsertBefore = "[img]http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_smile.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '10';
      					break;
				case 'smily cool':
      					txtinsertBefore = "[img]http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_cool.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '11';
      					break;
				case 'smily sad':
      					txtinsertBefore = "[img]http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_sad.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '12';
      					break;
				case 'smily confused':
      					txtinsertBefore = "[img]http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_confused.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '13';
      					break;
				case 'smily rolleyes':
      					txtinsertBefore = "[img]http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_rolleyes.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '14';
      					break;
				case 'smily briggin':
      					txtinsertBefore = "[img]http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_biggrin.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '15';
      					break;
				case 'smily redface':
      					txtinsertBefore = "[img]http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_redface.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '16';
      					break;
				case 'smily razz':
      					txtinsertBefore = "[img]http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_razz.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '17';
      					break;
				case 'smily neutral':
      					txtinsertBefore = "[img]http://forum.tribalwars.net/images/smilies/phpbb_smilies/icon_neutral.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '18';
      					break;
				case 'enfadado':
      					txtinsertBefore = "[img]http://avatares.miarroba.com/src/1450838/2c8c8416.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '19';
      					break;
				case 'risas':
      					txtinsertBefore = "[img]http://avatares.miarroba.com/src/1450838/bb8a41b2.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '20';
      					break;
				case 'beso':
      					txtinsertBefore = "[img]http://img122.imageshack.us/img122/9479/besock1.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '21';
      					break;
				case 'corazon':
      					txtinsertBefore = "[img]http://img112.imageshack.us/img112/3645/corazonjl0.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '22';
      					break;
				case 'hamster':
      					txtinsertBefore = "[img]http://img112.imageshack.us/img112/3021/hamsterhj6.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '23';
					break;
				case 'ara?a':
      					txtinsertBefore = "[img]http://img240.imageshack.us/img240/3405/araaku1.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '24';
					break;
				case 'oveja':
      					txtinsertBefore = "[img]http://img511.imageshack.us/img511/4282/ovejano8.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '25';
					break;
				case 'marihuana':
      					txtinsertBefore = "[img]http://img77.imageshack.us/img77/2666/hojamarihuanata2.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '26';
					break;
				case 'cerveza':
      					txtinsertBefore = "[img]http://img77.imageshack.us/img77/8070/cervezapt0.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '27';
					break;
				case 'dinero':
      					txtinsertBefore = "[img]http://img384.imageshack.us/img384/9544/sacodineroun2.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '28';
					break;
				case 'paz':
      					txtinsertBefore = "[img]http://img119.imageshack.us/img119/8813/simbolopazpd8.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '29';
					break;
				case 'espada':
      					txtinsertBefore = "[img]http://img104.imageshack.us/img104/7513/espadagy6.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '30'
					break;
				case 'caca':
      					txtinsertBefore = "[img]http://img369.imageshack.us/img369/4199/escrementozk5.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '31'
					break;	
				case 'fumado':
      					txtinsertBefore = "[img]http://img369.imageshack.us/img369/1283/carafumadoxi0.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '32'
					break;
				case 'calavera':
      					txtinsertBefore = "[img]http://img129.imageshack.us/img129/8434/calaverane8.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '33'
					break;
				case 'playmobilsoul':
      					txtinsertBefore = "[img]http://img361.imageshack.us/img361/9100/playmobilsoulot2.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '34'
					break;
				case 'playboy':
      					txtinsertBefore = "[img]http://img162.imageshack.us/img162/5818/playboyws4.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '35'
					break;
				case 'xD':
      					txtinsertBefore = "[img]http://www.emoticonesanimados.com.ar/img/d3fc8a1e5d60581f9008ace99cfcf60e.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '36'
      					break;
				case 'unit spear':
      					txtinsertBefore = "[img]http://www.tribalwars.net/graphic/unit/unit_spear.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '37';
      					break;
				case 'unit sword':
      					txtinsertBefore = "[img]http://www.tribalwars.net/graphic/unit/unit_sword.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '38';
      					break;
				case 'unit axe':
      					txtinsertBefore = "[img]http://www.tribalwars.net/graphic/unit/unit_axe.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '39';
      					break;
				case 'unit archer':
      					txtinsertBefore = "[img]http://www.tribalwars.net/graphic/unit/unit_archer.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '40';
      					break;
				case 'unit noble':
      					txtinsertBefore = "[img]http://www.tribalwars.net/graphic/unit/unit_snob.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '41';
      					break;
				case 'unit scout':
      					txtinsertBefore = "[img]http://www.tribalwars.net/graphic/unit/unit_spy.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '42';
      					break;
				case 'unit lcav':
      					txtinsertBefore = "[img]http://www.tribalwars.net/graphic/unit/unit_light.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '43';
      					break;
				case 'unit hcav':
      					txtinsertBefore = "[img]http://www.tribalwars.net/graphic/unit/unit_heavy.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '44';
      					break;
				case 'unit marcher':
      					txtinsertBefore = "[img]http://www.tribalwars.net/graphic/unit/unit_marcher.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '45';
      					break;
				case 'unit paladin':
      					txtinsertBefore = "[img]http://www.tribalwars.net/graphic/unit/unit_knight.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '46';
      					break;
				case 'unit ram':
      					txtinsertBefore = "[img]http://www.tribalwars.net/graphic/unit/unit_ram.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '47';
      					break;
				case 'unit catapult':
      					txtinsertBefore = "[img]http://www.tribalwars.net/graphic/unit/unit_catapult.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '48';
      					break;
				case 'madera':
      					txtinsertBefore = "[img]http://tribalwars.es/graphic/holz.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '49';
      					break;
				case 'barro':
      					txtinsertBefore = "[img]http://tribalwars.es/graphic/lehm.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '50';
      					break;
				case 'hierro':
      					txtinsertBefore = "[img]http://tribalwars.es/graphic/eisen.png";
      					txtinsertAfter = "[/img]";
      					insertButton = '51';
      					break;
				case 'black text':
      					txtinsertBefore = "[color=black]";
      					txtinsertAfter = "[/color]";
      					insertButton = '52';
      					break;
				case 'white text':
      					txtinsertBefore = "[color=white]";
      					txtinsertAfter = "[/color]";
      					insertButton = '53';
      					break;
				case 'brown text':
      					txtinsertBefore = "[color=brown]";
      					txtinsertAfter = "[/color]";
      					insertButton = '54';
      					break;
				case 'red text':
      					txtinsertBefore = "[color=red]";
      					txtinsertAfter = "[/color]";
      					insertButton = '55';
      					break;
				case 'yellow text':
      					txtinsertBefore = "[color=yellow]";
      					txtinsertAfter = "[/color]";
      					insertButton = '56';
      					break;
				case 'green text':
      					txtinsertBefore = "[color=green]";
      					txtinsertAfter = "[/color]";
      					insertButton = '57';
      					break;
				case 'cyan text':
      					txtinsertBefore = "[color=cyan]";
      					txtinsertAfter = "[/color]";
      					insertButton = '58';
      					break;
				case 'blue text':
      					txtinsertBefore = "[color=blue]";
      					txtinsertAfter = "[/color]";
      					insertButton = '59';
      					break;
				case 'violet text':
      					txtinsertBefore = "[color=violet]";
      					txtinsertAfter = "[/color]";
      					insertButton = '60';
      					break;
				case 'pink text':
      					txtinsertBefore = "[color=pink]";
      					txtinsertAfter = "[/color]";
      					insertButton = '61';
      					break;
				case 'orange text':
      					txtinsertBefore = "[color=orange]";
      					txtinsertAfter = "[/color]";
      					insertButton = '62';
      					break;
				case 'logohh1':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_18.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '63';
      					break;
				case 'logohh2':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_02.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '64';
      					break;
				case 'logohh3':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_16.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '65';
      					break;
				case 'logohh4':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_09.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '66';
      					break;
				case 'logohh5':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_05.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '67';
      					break;
				case 'logohh6':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_20.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '68';
      					break;
				case 'logohh7':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_10.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '69';
      					break;
				case 'logohh8':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_15.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '70';
      					break;
				case 'logohh9':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_04.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '71';
      					break;
				case 'logohh10':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_12.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '72';
      					break;
				case 'logohh11':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_13.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '73';
      					break;
				case 'logohh12':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_17.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '74';
      					break;
				case 'logohh13':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_19.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '75';
      					break;
				case 'logohh14':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_11.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '76';
      					break;
				case 'logohh15':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_06.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '77';
      					break;
				case 'logohh16':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_14.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '78';
      					break;
				case 'logohh17':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_03.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '79';
      					break;
				case 'logohh18':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_08.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '80';
      					break;
				case 'logohh19':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_01.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '81';
      					break;
				case 'logohh20':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/BlueColorz5_PDT_07.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '82';
      					break;
				case 'logohh21':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_14.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '83';
      					break;
				case 'logohh22':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_06.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '84';
      					break;
				case 'logohh23':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_30.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '85';
      					break;
				case 'logohh24':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_11.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '86';
      					break;
				case 'logohh25':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_29.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '87';
      					break;
				case 'logohh26':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_12.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '88';
      					break;
				case 'logohh27':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_02.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '89';
      					break;
				case 'logohh28':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_22.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '90';
      					break;
				case 'logohh29':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_24.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '91';
      					break;
				case 'logohh30':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_28.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '92';
      					break;
				case 'logohh31':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_16.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '93';
      					break;
				case 'logohh32':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_23.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '94';
      					break;
				case 'logohh33':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_04.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '95';
      					break;
				case 'logohh34':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_07.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '96';
      					break;
				case 'logohh35':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_27.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '97';
      					break;
				case 'logohh36':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_20.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '98';
      					break;
				case 'logohh37':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_17.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '99';
      					break;
				case 'logohh38':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_15.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '100';
      					break;
				case 'logohh39':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_26.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '101';
      					break;
				case 'logohh40':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_08.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '102';
      					break;
				case 'logohh41':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_19.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '103';
      					break;
				case 'logohh42':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_03.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '104';
      					break;
				case 'logohh43':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_21.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '105';
      					break;
				case 'logohh44':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_01.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '106';
      					break;
				case 'logohh45':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_11.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '107';
      					break;
				case 'logohh46':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_13.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '108';
      					break;
				case 'logohh47':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_09.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '109';
      					break;
				case 'logohh48':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_18.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '110';
      					break;
				case 'logohh49':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/Colorz_Blue_PDT_05.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '111';
      					break;
				case 'logohh50':
      					txtinsertBefore = "[img]http://www.discotecamasia.com/foros/Smileys/masiablue/pati.gif";
      					txtinsertAfter = "[/img]";
      					insertButton = '112';
      					break;
      			}
      
      		if (start == end) {
      					txt.value = txt.value.substr(0, start) + txtinsertBefore + txtinsertAfter + txt.value.substr(end, txt.value.length);
      				} else {
      					txtlength = txt.value.length;
      					selection = txt.value.substr(start, (end - start));
      					selectionBefore = txt.value.substr(0, start);
      					selectionAfter = txt.value.substr(end, txtlength);
      
      					if (insertButton == 'V' && selection.match(/(\d+){3}([\/|]+){1}(\d+){3}/gi)) {
      						selection = selection.replace(/(.*)(\d+)(\d+)(\d+)([\/|]+){1}(\d+)(\d+)(\d+)(.*)/gi, "$2$3$4|$6$7$8");
      					}
      
      					txt.value = selectionBefore + txtinsertBefore + selection + txtinsertAfter + selectionAfter;
      					
      				}
      		});
      
      	
      }  
      
      
      // ======== Funciones necesarias ========
      
      // Atajos DOM
      function $(elm_id){
      	return document.getElementById(elm_id);
      }
      
      function $$(tag_name){
      	return document.getElementsByTagName(tag_name);
      }  
      
      function NuevaFuncionTW(func, new_func){
      
    	if(typeof unsafeWindow == "object"){
      		unsafeWindow[func] = new_func;
      	}else if(TW_Is_Opera){
      		window[func] = new_func;
      		/*
      		window.opera.defineMagicFunction(
      			func,
      			function(oRealFunc, oThis, oParam1, oParam2){
      				return oParam1.getElementById('oParam2').style;
      			}
      		);
      		*/
      	}
      }