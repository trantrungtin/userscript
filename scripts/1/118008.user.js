// ==UserScript==
// @name        MusicBrainz row highlight
// @version     1.2.2
// @author      Brian Schweitzer (brianfreud)
// @description Highlight the currently hovered row
// @include     http://musicbrainz.org/label/*
// @include     http://musicbrainz.org/artist/*
// @include     http://musicbrainz.org/release-group/*
// @include     http://musicbrainz.org/release/*
// @include     http://musicbrainz.org/recording/*
// @include     http://musicbrainz.org/work/*
// @match       http://musicbrainz.org/label/*
// @match       http://musicbrainz.org/label/*/*
// @match       http://musicbrainz.org/artist/*
// @match       http://musicbrainz.org/artist/*/*
// @match       http://musicbrainz.org/release-group/*
// @match       http://musicbrainz.org/release-group/*/*
// @match       http://musicbrainz.org/release/*
// @match       http://musicbrainz.org/release/*/*
// @match       http://musicbrainz.org/recording/*
// @match       http://musicbrainz.org/recording/*/*
// @match       http://musicbrainz.org/work/*
// @match       http://musicbrainz.org/work/*/*
// ==/UserScript==

/* ----------------------------------- */
// Script Update Checker
// http://userscripts.org/scripts/show/20145
var SUC_script_num = 118008;
try{function updateCheck(forced){if ((forced) || (parseInt(GM_getValue('SUC_last_update', '0')) + 86400000 <= (new Date().getTime()))){try{GM_xmlhttpRequest({method: 'GET',url: 'http://userscripts.org/scripts/source/'+SUC_script_num+'.meta.js?'+new Date().getTime(),headers: {'Cache-Control': 'no-cache'},onload: function(resp){var local_version, remote_version, rt, script_name;rt=resp.responseText;GM_setValue('SUC_last_update', new Date().getTime()+'');remote_version=parseInt(/@uso:version\s*(.*?)\s*$/m.exec(rt)[1]);local_version=parseInt(GM_getValue('SUC_current_version', '-1'));if(local_version!=-1){script_name = (/@name\s*(.*?)\s*$/m.exec(rt))[1];GM_setValue('SUC_target_script_name', script_name);if (remote_version > local_version){if(confirm('There is an update available for the Greasemonkey script "'+script_name+'."\nWould you like to go to the install page now?')){GM_openInTab('http://userscripts.org/scripts/show/'+SUC_script_num);GM_setValue('SUC_current_version', remote_version);}}else if (forced)alert('No update is available for "'+script_name+'."');}else GM_setValue('SUC_current_version', remote_version+'');}});}catch (err){if (forced)alert('An error occurred while checking for updates:\n'+err);}}}GM_registerMenuCommand(GM_getValue('SUC_target_script_name', '???') + ' - Manual Update Check', function(){updateCheck(true);});updateCheck(false);}catch(err){}

/* ----------------------------------- */
// Chrome support for jQuery
// http://erikvold.com/blog/index.cfm/2010/6/14/using-jquery-with-a-user-script
function addJQuery(callback) {
var script = document.createElement("script");script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js");script.addEventListener('load', function() {var script = document.createElement("script");script.textContent = "(" + callback.toString() + ")();";document.body.appendChild(script);}, false);document.body.appendChild(script);}addJQuery(main);
/* ----------------------------------- */

function main() {
    jQuery.noConflict();
    (function($) { 
        $(function() {
            $('td').hover(
                function () {
                    $(this).parent().children().each(function() {
                                                                $(this).data('oldColor', $(this).css("backgroundColor"));
                                                                });
                    $(this).parent().children().css("backgroundColor", "#FF6");
                },
                function () {
                    $(this).parent().children().each(function() {
                                                                $(this).css("backgroundColor", $(this).data('oldColor'));
                                                                });
                }
            );
        });
    })(jQuery);
}