// Mailman Discard Default
//
// If you're like me and you administer several Mailman lists, you
// usually spend a good deal of time discarding spam that's queued-up
// in the moderation database. I got tired of clicking on the "Discard"
// radio button for each message like a sucker, so I decided that they
// should be set to "Discard" by default instead of "Hold". Et voilÂ.
// ==UserScript==
// @namespace   http://info.cnt.org/~paul/greasemonkey/

var allDiscards;

allDiscards = document.evaluate(
    "//input[@value='3' and @type='radio' and starts-with(@name,'senderaction')]", 
    document, 
    null, 
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, 
    null);

for (var i = 0; i < allDiscards.snapshotLength; i++) {
    var thisDiscard = allDiscards.snapshotItem(i);
    thisDiscard.checked = true;
}