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
    $("#loginButton").click(validate);
}

function register(e) {
	window.location.href = "register";
}

function validate(e)
{
	var username = document.getElementById("username").value;
	var password = document.getElementById("pwd").value;

	if (validateEmail(username)) {
    	if (validatePassword) {
    		//let the user login
    	}
    	else
    	{
    		//alert user that password was incorrect. 
    	}
	} 
	else
	{
		//alert user
	}
}

//Regex validation
function validateUsername(username) { 
    var re = /^[a-z0-9_-]{3,16}$/;
    return re.test(username);
} 

function validatePassword(password) { 
    var re = /^[a-z0-9_-]{6,18}$/;
    return re.test(password);
} 

