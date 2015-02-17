'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    //$("#addBtn").click(addProfile);
}

function addProfile(e) {
	e.preventDefault();
	console.log("add button was clicked from the modal");
	

	//window.location.href = "myprofiles";
}
