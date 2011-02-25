var randomclik = randomclik || {};

randomclik.go = function(url, webRoverId) {
    console.log("Going to navigate to here '" + url + "' in web rover iFrame [" + webRoverId +"]");

    var webRoverIFrameElement = document.getElementById(webRoverId);
    webRoverIFrameElement.src = url;

    setTimeout(randomclik.onTimeout, 1000);
}


randomclik.onTimeout = function() {
    console.log("Going to look for another page...");
}

