Fullscreen = function(elemet) {
    elemet = (elemet == undefined ? document.body : elemet);
    if (elemet.requestFullscreen) {
        elemet.requestFullscreen();
        return true;
    } else if (elemet.mozRequestFullScreen) {
        elemet.mozRequestFullScreen();
        return true;
    } else if (elemet.webkitRequestFullscreen) {
        elemet.webkitRequestFullscreen();
        return true;
    } else if (elemet.msRequestFullscreen) {
        elemet.msRequestFullscreen();
        return true;
    }
    return false;
}
ExitFullscreen = function() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}