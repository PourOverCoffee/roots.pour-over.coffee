user_token = localStorage.getItem('user_token')
if (!user_token) {
    user_token = (Math.random() * Math.pow(2, 70)).toString(36)
    localStorage.setItem('user_token', user_token)
}

session_token = (Math.random() * Math.pow(2, 70)).toString(36)

campaign = 'test_campaign'
product = 'test_product'
version = '1.0'
server = 'https://pourover.ambroselli.tech'

start_time = new Date()


function logSession() {
    // Log Session (POST http://localhost:3000/log/session)
    jQuery.ajax({
        url: server + "/log/session",
        type: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        contentType: "application/json",
        data: JSON.stringify({
            "campaign": campaign,
            "session_token": session_token,
            "product": product,
            "token": user_token,
            "version": version
        })
    })
    .done(function(data, textStatus, jqXHR) {
        console.log("HTTP Request Succeeded: " + jqXHR.status);
        console.log(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
    })
}

function logAction(action, identifier) {
    // Log Action (POST http://localhost:3000/log/action)
    jQuery.ajax({
        url: server + "/log/action",
        type: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        contentType: "application/json",
        data: JSON.stringify({
            "action": action || 'default,
            "session_token": session_token,
            "identifier": identifier || 'default',
            "elapsed_time": "" + Math.floor(((new Date()) - start_time) / 1000)
        })
    })
    .done(function(data, textStatus, jqXHR) {
        console.log("HTTP Request Succeeded: " + jqXHR.status);
        console.log(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
    })
    .always(function() {
        /* ... */
    });
}

// always log the session on load
logSession()