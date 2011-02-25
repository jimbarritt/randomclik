var randomclik = randomclik || {};

randomclik.go = function(url, webRoverId) {
    console.log("Going to navigate to here '" + url + "' in web rover iFrame [" + webRoverId +"]");

    var webRoverIFrameElement = document.getElementById(webRoverId);
    webRoverIFrameElement.src = url;
}