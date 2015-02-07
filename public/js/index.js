'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

    $("#registerButton").click(register);

}

function register(e) {
    //window.location.href = "register";
    $("#registerButton").hide();
}
