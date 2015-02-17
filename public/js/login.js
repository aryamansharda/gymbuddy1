'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    if ($("#backButton").size() == 0)
        window.location.href = "dashboard";
    $("#backButton").click(back);
}

function back(e) {
    window.location.href = "/";
}