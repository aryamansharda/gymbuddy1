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
	window.alert(document.getElementById("username").value);
	window.alert(document.getElementById("pwd").value);

	window.alert($document.getElementById("username").value);
	window.alert($document.getElementById("pwd").value);

	window.alert(document.getElementById("#username").value);
	window.alert(document.getElementById("#pwd").value);

	window.alert($document.getElementById("#username").value);
	window.alert($document.getElementById("#pwd").value);

	var dec = document.getElementById("textBox1").value;
	if (strValue) {
    	window.location.href = "register";
	}   
}
