//drag and drop
function allowDrop(ev) {
    ev.preventDefault();
}

function noAllowDrop(ev) {
    ev.stopPropagation();
}

function drag(ev) {
    ev.dataTransfer.setData("Data", ev.target.id);
}

var supportsProgress = (document.createElement('progress').max !== undefined);
if (!supportsProgress) {
    progress.setAttribute('data-state', 'fake');
}

function drop(ev) {

    ev.preventDefault();
    var data = ev.dataTransfer.getData("Data");
    var son = document.getElementById(data);
    var route = son.getAttribute("value");
    var x = document.createElement("VIDEO");
    x.setAttribute("id", son.id);
    x.setAttribute("data-type", "video");
    x.setAttribute("ondragover", "noAllowDrop(event)");
    x.setAttribute("class", "video-js vjs-default-skin col-md-3");
    x.setAttribute("name",son.name);   
    x.setAttribute("value", son.value);
    x.setAttribute("style","width: 37%");
    x.addEventListener('play', function () {
        changeButtonState('playpause');
    }, false);
    x.addEventListener('pause', function () {
        changeButtonState('playpause');
    }, false);

    if (route != null) {
        if (Hls.isSupported()) {
            var y = new Hls();
            y.loadSource(route);
            y.attachMedia(x);
            document.getElementById("Controls").style.display = "";
            y.on(Hls.Events.MANIFEST_PARSED, function () {
                //x.play();
            });

        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            document.getElementById("Controls").style.display = "";
            video.addEventListener('canplay', function () {
            });
        }

    ev.target.append(x);
    son.parentNode.removeChild(son);

    }
}