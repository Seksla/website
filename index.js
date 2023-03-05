var r = document.querySelector(':root');

const backboards = document.querySelectorAll('.bk_backboard');
const backboardsHolder = document.querySelector('#bk_backboard_holder');
const ball = document.querySelector('#bk_ball');
const animationDelay = 1;
const linkList = [
    'calendar.html',
    'participants.html',
    'match_result.html',
    'gallery.html',
]
let angle = 0;
let rotateBall;
for (let x = 0; x < backboards.length; x++) {
    backboards[x].addEventListener('click', () => {
        clearInterval(rotateBall);
        r.style.setProperty('--placeToLand', backboards[x].offsetLeft + backboards[x].offsetWidth/2 + "px");
        r.style.setProperty('--placeToLand2', backboardsHolder.offsetTop + backboards[x].offsetHeight/2 + "px");
        r.style.setProperty('--placeToTop', backboardsHolder.offsetTop - ball.offsetHeight + "px");
        ball.style.animation = "throwBall "+animationDelay+"s 1 linear";
        /*---------------------------------------------------*/
        RNG_NUM = Math.floor(Math.random() * (10 - 1)) + 1;
        rotateBall = setInterval(() => {
            RNG_NUM > 5 ? angle+=1 : angle-=1 
            ball.style.transform = "rotate("+angle+"deg)";
        }, 1);
        console.log()
        setTimeout(() => {
            clearInterval(rotateBall);
            ball.style.animation = "";
            window.open('Pages/'+ linkList[backboards[x].id], "_self");
        }, animationDelay*1000);
    });
    
    
}

toggleDay = false;
const switchDelay = 0.5
function Switch() {
    const ball_star = document.querySelector('#ball_star');
    const switchBackground = document.querySelector('#switch');
    const switchText = document.querySelector('#switch_text');
    const lights = document.querySelector('#lights');
    const darkOverlay = document.querySelector('#darkness');
    toggleDay = !toggleDay;
    if (toggleDay == true) {
        ball_star.style.left = "80%";
        ball_star.style.animation = "switchSun "+switchDelay+"s 1 linear";
        setTimeout(() => {ball_star.style.filter = "brightness(1.2) blur(2px) grayscale(0%)";}, switchDelay*1000);
        switchBackground.style.backgroundImage = "url('https://live-production.wcms.abc-cdn.net.au/d18cf9d4f9ba4983ec312050ce5711bf?impolicy=wcms_crop_resize&cropH=1153&cropW=2048&xPos=0&yPos=286&width=862&height=485')";
        switchText.innerText = "Kosarasok délutánja"
        lights.style.opacity = "0%"
        darkOverlay.style.backgroundColor = "rgba(88, 10, 10, 0.4)";
    } else {
        ball_star.style.left = "10%";
        ball_star.style.animation = "switchMoon "+switchDelay+"s 1 linear";
        setTimeout(() => {ball_star.style.filter = "brightness(1) blur(0px) grayscale(100%)";}, switchDelay*1000);
        switchBackground.style.backgroundImage = "url('data:image/jpeg;base64,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')"; 
        switchText.innerText = "Kosarasok éjszakája";
        lights.style.opacity = "100%";
        darkOverlay.style.backgroundColor = "rgb(0, 0, 0, 0.7)";
    }
}