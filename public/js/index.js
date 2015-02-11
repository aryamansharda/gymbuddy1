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
    $("#loginButton".click(validate));
}

function register(e) {
	window.location.href = "register";
}

function validate(e)
{
	var username = document.getElementById("username").value;
	var password = document.getElementById("pwd").value;
	window.alert(username);

	/*if (validateEmail()) {
    	window.location.href = "register";
	} */ 
}

//Regex validation
function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 

function validateUsername(username) { 
    var re = /^[a-z0-9_-]{3,16}$/;
    return re.test(username);
} 

function validatePassword(password) { 
    var re = /^[a-z0-9_-]{6,18}$/;
    return re.test(password);
} 

