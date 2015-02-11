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

	//window.alert($document.getElementById("username").value);
	//window.alert($document.getElementById("pwd").value);

	//window.alert("1" + document.getElementById("#username").value);
	//window.alert("2" + document.getElementById("#pwd").value);

	var dec = document.getElementById("textBox1").value;

	/*if (validateEmail()) {
    	window.location.href = "register";
	}   */
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

