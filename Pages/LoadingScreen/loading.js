window.addEventListener("load", () => {
    var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart; 
    document.querySelector('#loading_screen').style.top = "-100vh";
    //console.log('Page load time is '+ loadTime/1000+"s");
});