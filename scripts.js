window.onscroll = function(){
    var top =	 window.scrollY || document.documentElement.scrollTop;
    var topNav =	 window.pageYOffset;

    if (top < 200) {
        document.getElementById('logo').style.color = "#FBCAEF";
        document.getElementById('logo').style.transition = "all .5s";
    } else if (top < 400) {
        document.getElementById('logo').style.color = "#FDD187";
        document.getElementById('logo').style.transition = "all .5s";
    } else if (top < 600) {
        document.getElementById('logo').style.color = "#D1F0B1";
        document.getElementById('logo').style.transition = "all .5s";
    } else if (top < 800) {
        document.getElementById('logo').style.color = "#99D3FF";
        document.getElementById('logo').style.transition = "all .5s";
    } else if (top < 1000) {
        document.getElementById('logo').style.color = "#7F6A93";
        document.getElementById('logo').style.transition = "all .5s";
    } else {
        document.getElementById('logo').style.color = "#f69dda";
        document.getElementById('logo').style.transition = "all .5s";
    }

    if (topNav < 200) {
        document.getElementById('nav').style.backgroundColor = "#0c051c";
        document.getElementById('logo').style.fontSize = "1em";
        document.getElementById('logo').style.transition = "all .5s";
        document.getElementById('links').style.display = "flex";
    } else {
        document.getElementById('logo').style.fontSize = "1.5em";
        document.getElementById('links').style.display = "none";
        document.getElementById('links').style.transition = "all .5s";
        document.getElementById('logo').style.transition = "all .5s";
    }

    };

      