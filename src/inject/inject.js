chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {

	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. (post jquery may17)  This message was sent from scripts/inject.js  4");
		// ----------------------------------------------------------

		console.log(' $ = ', $);
		// $("input[name='votea']").click();

		setInterval(function(){ $(" button#meet-me-button-yes-var").click();   }, 2500);

	}
	}, 10);
});
