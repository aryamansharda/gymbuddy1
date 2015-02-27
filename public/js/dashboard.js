'use strict';

var global_username;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();

    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // Add any additional listeners here
    // example: $("#div-id").click(functionToCall);
    $("#logoutButton").click(logout);
    $("#myprofilesButton").click(myProfile);
    
    var name = "gymBuddyUser=";
    var ca = document.cookie.split(';');
    var username;
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        username = c.substring(name.length);
        if (!c.indexOf(name) == 0)
            window.location.href = "/";
    }

    global_username = username;
    
    function displayMatches(matches) {
        // compose the HTML
        var new_html =
        '<tr><th><center>My username is...</center><th><center>I\'m free to work out at...</center></th></tr>';
        
        for (var i =0; i < matches.length; i++)
        {
            new_html+='<tr onclick=loadMatchToView("' + matches[i]["_id"] + '") data-toggle="modal" data-target="#MatchInfoModal"><td><center>' +
                matches[i]["username"] +'</center></td><td>';
            
            if (matches[i]["monday"] != "")
                new_html+='Monday @ ' + matches[i]["monday"];
            if (matches[i]["tuesday"] != "")
                new_html+='Tuesday @ ' + matches[i]["tuesday"];
            if (matches[i]["wednesday"] != "")
                new_html+='Wednesday @ ' + matches[i]["wednesday"];
            if (matches[i]["thursday"] != "")
                new_html+='Thursday @ ' + matches[i]["thursday"];
            if (matches[i]["friday"] != "")
                new_html+='Friday @ ' + matches[i]["friday"];
            if (matches[i]["saturday"] != "")
                new_html+='Saturday @ ' + matches[i]["saturday"];
            if (matches[i]["sunday"] != "")
                new_html+='Sunday @ ' + matches[i]["sunday"];
            
            new_html+='</td></tr>';

        }
        
        $(".tftable")[0].innerHTML = new_html;
    }
    
    // issue the GET request
    $.get('/dashboard/' + username, displayMatches);

}

function loadMatchToView(pID) {
    $.get('/dashboard/' + global_username + "/" + pID, loadModalWithMatch);
}

function loadModalWithMatch(result) {
    var username = result[0].username;
    var spottingRange = result[0].spottingRange;
    var spottingSkill = result[0].spottingSkill;
    var runningRange = result[0].runningRange;
    var runningSkill = result[0].runningSkill;

    $('#matchedUsername').text("Username: " + username);
    if (spottingRange != "N/A")
        $('#matchedSpottingrange').text("Spotting Range: " + spottingRange);
    if (spottingSkill != "")
        $('#matchedSpottingskill').text("Spotting Skill: " + spottingSkill);
    if (runningRange != "N/A")
        $('#matchedRunningrange').text("Running Range: " + runningRange);
    if (runningSkill != "")
        $('#matchedRunningskill').text("Running Skill: " + runningSkill);

    function fetchUserData(other_result) {
        var name = other_result[0].name;
        var age = other_result[0].age;
        var gender = other_result[0].gender;
        var contact = other_result[0].contact;

        $('#matchedName').text("Name: " + name);
        $('#matchedAge').text("Age: " + age);
        $('#matchedGender').text("Gender: " + gender);
        $('#matchedContact').text("Contact: " + contact);
        $('#sms').attr("href", "sms:" + contact + " ?body=HCI");
        $('#sms').text("Send " + name + " a text!");
    }
    // issue a GET request
    $.get('/userdata/' + result[0].username, fetchUserData);
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

