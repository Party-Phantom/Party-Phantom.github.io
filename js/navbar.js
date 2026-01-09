let menuOpened = false;

function closeMenu() {
    menuOpened=false;
    document.getElementById("menucloser").style.opacity = "0";
    document.getElementById("menucloser").style.transform = "rotate(90deg)";
    document.getElementById('menu-toggle').checked = false;
    document.getElementById("linesButton").style.opacity = "1";
    document.getElementById("linesButton").style.transform = "rotate(0deg)";
    document.getElementById("linesButton").style.transition = "all 0.5s ease-in-out";
    document.getElementById("main-page-contents").style = "-webkit-filter: blur(0px); filter: blur(0px); margin-top: 40px;";
    document.getElementById("imgbanner").style.filter = "blur(0px)";
}

function openMenu() {
    if (!menuOpened) {
        menuOpened = true;
        document.getElementById('menu-toggle').checked = false;
        document.getElementById("menucloser").style.opacity = "1";
        document.getElementById("menucloser").style.transform = "rotate(0deg)";
        document.getElementById("linesButton").style.opacity = "0";
        document.getElementById("linesButton").style.transform = "rotate(-90deg)";
        document.getElementById("linesButton").style.transition = "all 0.5s ease-in-out";
        document.getElementById("main-page-contents").style = "-webkit-filter: blur(2px); filter: blur(2px); margin-top: 40px;";
        document.getElementById("imgbanner").style.filter = "blur(2px)";
    } else {
        document.getElementById('menu-toggle').checked = true;
        menuOpened = false;
        document.getElementById("menucloser").style.opacity = "0";
        document.getElementById("menucloser").style.transform = "rotate(90deg)";
        document.getElementById("linesButton").style.opacity = "1";
        document.getElementById("linesButton").style.transform = "rotate(0deg)";
        document.getElementById("linesButton").style.transition = "all 0.5s ease-in-out";
        document.getElementById("main-page-contents").style = "-webkit-filter: blur(0px); filter: blur(0px); margin-top: 40px;";
        document.getElementById("imgbanner").style.filter = "blur(0px)";
    }
    
}
