'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
                  initializePage();
                  })

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // Add any additional listeners here
    // example: $("#div-id").click(functionToCall);
    $("#logoutButton").click(logout);
    $("#helpButton").click(help);
    $("#myprofilesButton").click(myProfile);
    
    var name = "gymBuddyUser=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (!c.indexOf(name) == 0)
            window.location.href = "/";
    }
}

function logout(e) {
    // Cancel the default action, which prevents the page from reloading
    e.preventDefault();
    document.cookie = "gymBuddyUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    window.location.href = "/";
}

function myProfile(e) {
    // Cancel the default action, which prevents the page from reloading
    e.preventDefault();
    window.location.href = "/myprofiles";
}
function help(e) {
    // Cancel the default action, which prevents the page from reloading
    e.preventDefault();
    window.location.href = "/help";
}
