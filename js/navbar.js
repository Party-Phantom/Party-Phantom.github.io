let menuOpened = false;

function closeMenu() {
    menuOpened=false;
    document.getElementById('menu-toggle').checked = false;
    document.getElementById("linesButton").style.transform = "rotate(0deg)";
    document.getElementById("linesButton").style.transition = "all 0.5s ease-in-out";
    document.getElementById("main-page-contents").style = "-webkit-filter: blur(0px); filter: blur(0px);";
}

function openMenu() {
    if (!menuOpened) {
        menuOpened = true;
        document.getElementById('menu-toggle').checked = false;
        document.getElementById("linesButton").style.transform = "rotate(-90deg)";
        document.getElementById("linesButton").style.transition = "all 0.5s ease-in-out";
        document.getElementById("main-page-contents").style = "-webkit-filter: blur(2px); filter: blur(2px);";
    } else {
        document.getElementById('menu-toggle').checked = true;
        menuOpened = false;
        document.getElementById("linesButton").style.transform = "rotate(0deg)";
        document.getElementById("linesButton").style.transition = "all 0.5s ease-in-out";
        document.getElementById("main-page-contents").style = "-webkit-filter: blur(0px); filter: blur(0px);";
    }
    
}
