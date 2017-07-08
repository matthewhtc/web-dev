//declare variable(s)
var usernames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "terakilobyte", "thomasballinger", "beohoff", "brunofin", "comster404"];
var placeholder = "http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png";

//making json request function
function getJSON(username) {
    var url = "https://api.twitch.tv/kraken/streams/" + username + "?client_id=ox1o2j0rx04gyiuaet0kcuk6zpv4dc0"; //If the URL includes the string "callback=?" (or similar, as defined by the server-side API), the request is treated as JSONP instead. 
    $.getJSON(url, function(data) {

        if (data.stream != null) { //that is, if user is online
            if (data.stream.channel.logo === null) {
                $("ul").append("<li class='yellow row'><h4 class='left'><img src=" + placeholder + "><a href='https://www.twitch.tv/" + data.stream.channel.name + "' target='_blank'>" + data.stream.channel.display_name + "</a></h4><h4 class='right'>" + data.stream.channel.game + ": " + data.stream.channel.status + "</h4></li>");
            } else {
                $("ul").append("<li class='yellow row'><h4 class='left'><img src=" + data.stream.channel.logo + "><a href='https://www.twitch.tv/" + data.stream.channel.name + "' target='_blank'>" + data.stream.channel.display_name + "</a></h4><h4 class='right'>" + data.stream.channel.game + ": " + data.stream.channel.status + "</h4></li>");
            }
            
        } else if (data.status === 422) {
            $("ul").append("<li class='black row'><h4 class='left'><img src=" + placeholder + "><a href='https://www.twitch.tv/" + username + "' target='_blank'>" + username + "</a></h4><h4 class='right'>Account Closed</h4></li>")
        } else {
            offLine(username);
        }
    });
}

//seperate json request with a different URL when user is offline function
function offLine(username) {
    var offLineURL = "https://api.twitch.tv/kraken/channels/" + username + "?client_id=ox1o2j0rx04gyiuaet0kcuk6zpv4dc0";
    $.getJSON(offLineURL, function(data) {
        if (data.logo === null) {
            $("ul").append("<li class='black row'><h4 class='left'><img src=" + placeholder + "><a href='https://www.twitch.tv/" + data.name + "' target='_blank'>" + data.display_name + "</a></h4><h4 class='right'>offline</li>");
        } else {
            $("ul").append("<li class='black row'><h4 class='left'><img src=" + data.logo + "><a href='https://www.twitch.tv/" + data.name + "' target='_blank'>" + data.display_name + "</a></h4><h4 class='right'>offline</li>");
        }
    });
}

//iterate thru array of usernames
for (var i = 0; i < usernames.length; i++) {
    getJSON(usernames[i]);
}
