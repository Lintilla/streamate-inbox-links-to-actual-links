// ==UserScript==
// @name         Turn Streamate Inbox Links into Actual Links
// @version      0.2
// @description  The links in the Streamate inbox don't use the HTML <a> element. They don't work properly, especially if you want to open links in new tabs. This script replaces their fake links with real ones.
// @author       LintillaTaylor (that.lintilla.chick@gmail.com)
// @namespace    https://github.com/Lintilla/streamate-inbox-links-to-actual-links
// @supportURL   https://github.com/Lintilla/streamate-inbox-links-to-actual-links/issues
// @match        https://www.streamatemodels.com/smm/email/inbox/*
// @grant        none
// ==/UserScript==

var url

$('.inbox_mail_row').each(function(i) {
	$(this).attr("style", "cursor:auto;")
	url = $(this).attr("data-url");
	$('em', this).replaceWith(function(){
		return $("<a />").attr("href", url).append($(this).contents());
	});
});