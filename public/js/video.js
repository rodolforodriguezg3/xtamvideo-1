
// Display the user defined video controls
var videoControls = document.getElementById('video-controls');
var stop = document.getElementById('stop');
var mute = document.getElementById('mute');
var progress = document.getElementById('progress');
var progressBar = document.getElementById('progress-bar');

videoControls.setAttribute('data-state', 'visible');

//funcionalidad de botones play pause mute
var changeButtonState = function (type) {
    // Play/Pause button
    if (type == 'playpause') {
        var videos = document.querySelectorAll('[data-type="video"]');
        for (var v = 0; v < videos.length; v++) {
            var video = videos[v];
            if (video.paused || video.ended) {
                playpause.setAttribute('data-state', 'play');
            } else {
                playpause.setAttribute('data-state', 'pause');
            }
            if (type == 'mute') {
                mute.setAttribute('data-state', video.muted ? 'unmute' : 'mute');
            }
        }

    }
}

stop.addEventListener('click', function (e) {
    var videos = document.querySelectorAll('[data-type="video"]');
    for (var v = 0; v < videos.length; v++) {
        var video = videos[v];
        video.pause();
        video.currentTime = 0;
        progress.value = 0;
        // Update the play/pause button's 'data-state' which allows the correct button image to be set via CSS
        changeButtonState('playpause');
    }
});

mute.addEventListener('click', function (e) {
    var videos = document.querySelectorAll('[data-type="video"]');
    for (var v = 0; v < videos.length; v++) {
        var video = videos[v];
        video.muted = !video.muted;
        changeButtonState('mute');
    }
});

//navegador bloquea los elementos play pause
playpause.addEventListener('click', function (e) {
    var videos = document.querySelectorAll('[data-type="video"]');
    for (var v = 0; v < videos.length; v++) {
        var video = videos[v];
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
        video.addEventListener('loadedmetadata', function () {
            progress.setAttribute('max', video.duration);
        });

        // As the video is playing, update the progress bar
        video.addEventListener('timeupdate', function () {
            // For mobile browsers, ensure that the progress element's max attribute is set
            if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
            progress.value = video.currentTime;
            progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
        });
    }
});

// React to the user clicking within the progress bar
progress.addEventListener('click', function (e) {
    var videos = document.querySelectorAll('[data-type="video"]');
    for (var v = 0; v < videos.length; v++) {
        var video = videos[v];
        var pos = (e.pageX - this.offsetLeft) / this.offsetWidth;
        video.currentTime = pos * video.duration;
    }
});

// Busqueda por filtros
function SubmitFormData() {

    var videos = document.querySelectorAll('[data-type="video"]');
    var ids = [];
    for (var v = 0; v < videos.length; v++) {
        var video = videos[v];
        ids.push(video.id);
        console.log(video.id)
    }
    
    var fechastart = $("#fechastart").val();
    var fechafinish = $("#fechafinish").val();
    var horastart = $("#horastart").val();
    var horafinish = $("#horafinish").val();
    var array = ids;
    var URLdomain = window.location.host;
    //$host = Config::get('constant.ruta.host');
    console.log(URLdomain);
    $.get("http://" + URLdomain + "/xtamvideo/resources/views/grabaciones/create_m3u8.blade.php", { startdate: fechastart, finishdate: fechafinish, starttime: horastart, finishfime: horafinish, array: array },       
     function (data) {
            $('#videoCont').html(data);
            //$('#myForm')[0].reset();
        });
}

//Script popup de exportar videos
function selectvideos(){
    var videos = document.querySelectorAll('[data-type="video"]');
    var select = document.getElementById("camid");
    var ids = [];

        while(select.length > 1){
             select.remove(1);
        }   

    for (var v = 0; v < videos.length; v++) {
        var video = videos[v];
        var name = video.getAttribute("name");
        var route = video.getAttribute("src");
        var value = video.getAttribute("value");
        ids.push(video.id);
        var x = document.createElement("option");
        x.setAttribute("name" , value);
        x.setAttribute("value" , name);
        x.setAttribute("id" , video.id );
        x.setAttribute("src" , route);
        x.innerHTML = (name);
        select.appendChild(x);
    }
}
//Script popup de exportar videos - cambiar nombre a mostrar
function changename(obj)
{
    var cname = obj.value;
    //var cname = obj.getAttribute(name);
    var txt = document.getElementById('chkname');
    txt.value = cname ;
    txt.value = txt.value.replace(/ /g, "");
    
    
}

//Exportar videos
function descargas()
{
        var select =  document.getElementById("camid");
        var myValue = select.value;
        var url = "";
        var formato = "";

        for (var v = 0; v < select.length; v++) {
            if(myValue === select[v].getAttribute("value"))
            {
                url = select[v].getAttribute("name");
            }
        }

        var format =  document.getElementById("formcam");
        var f = format.value;
        //var f = format.innerHTML;

        for (var v = 0; v < format.length; v++) {
            if(f === format[v].getAttribute("value"))
            {
                formato = format[v].innerHTML;
            }
        }      

        var z = document.getElementById("chkname").value;
        var name = z.replace(/ /g, "");

        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET", "../format/code/download.php?ruta="+url+"&name="+name+"&formato="+formato);
        xmlhttp.send();
}

function eliminarElemento()
{
    location.reload();
}