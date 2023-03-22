var r = document.querySelector(':root');
const backboards = document.querySelectorAll('.bk_backboard');
const backboardsHolder = document.querySelector('#bk_backboard_holder');
const ball = document.querySelector('#bk_ball');
const animationDelay = 2;
const linkList = [
    'calendar',
    'participants',
    'match_result',
    'gallery',
]
let angle = 0;
let rotateBall;
for (let x = 0; x < backboards.length; x++) {
    backboards[x].addEventListener('click', () => {
        clearInterval(rotateBall);
        r.style.setProperty('--placeToLand', backboards[x].offsetLeft + backboards[x].offsetWidth/2 + "px");
        r.style.setProperty('--placeToLand2', backboardsHolder.offsetTop + backboards[x].offsetHeight/2 + "px");
        r.style.setProperty('--placeToTop', backboardsHolder.offsetTop - ball.offsetHeight + "px");
        console.log()
        if (window.innerWidth > 425) {
            ball.style.animation = "throwBall "+animationDelay+"s 1 linear";
            /*---------------------------------------------------*/
            RNG_NUM = Math.floor(Math.random() * (10 - 1)) + 1;
            rotateBall = setInterval(() => {
                RNG_NUM > 5 ? angle+=1 : angle-=1
                ball.style.transform = "rotate("+angle+"deg)";
            }, 1);
        };
        setTimeout(() => {
            clearInterval(rotateBall);
            ball.style.animation = "";
            window.open('Pages/'+ linkList[linkList.indexOf(backboards[x].id)] + ".html", "_self");
        }, animationDelay*1000);
    });
};



//Nincsenek commentek?
console.log(
    "░░░░░▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄░░░░░░░",
    "░░░░░█░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░▀▀▄░░░░",
    "░░░░█░░░▒▒▒▒▒▒░░░░░░░░▒▒▒░░█░░░",
    "░░░█░░░░░░▄██▀▄▄░░░░░▄▄▄░░░░█░░",
    "░▄▀▒▄▄▄▒░█▀▀▀▀▄▄█░░░██▄▄█░░░░█░",
    "█░▒█▒▄░▀▄▄▄▀░░░░░░░░█░░░▒▒▒▒▒░█",
    "█░▒█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄▒█",
    "░█░▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█░",
    "░░█░░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█░░",
    "░░░█░░░░██░░▀█▄▄▄█▄▄█▄████░█░░░",
    "░░░░█░░░░▀▀▄░█░░░█░█▀██████░█░░",
    "░░░░░▀▄░░░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█░░",
    "░░░░░░░▀▄▄░▒▒▒▒░░░░░░░░░░▒░░░█░",
    "░░░░░░░░░░▀▀▄▄░▒▒▒▒▒▒▒▒▒▒░░░░█░",
    "░░░░░░░░░░░░░░▀▄▄▄▄▄░░░░░░░░█░░")

toggleDay = false;
const switchDelay = 0.5
function Switch() {
    const ball_star = document.querySelector('#ball_star');
    const switchBackground = document.querySelector('#switch');
    const switchText = document.querySelector('#switch_text');
    const lights = document.querySelector('.lights');
    toggleDay = !toggleDay;
    if (toggleDay == true) {
        ball_star.style.left = "80%";
        ball_star.style.animation = "switchSun "+switchDelay+"s 1 linear";
        setTimeout(() => {ball_star.style.filter = "brightness(1.2) blur(2px) grayscale(0%)";}, switchDelay*1000);
        switchBackground.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1066072940191416372/1083421206616735844/sunset.jpg')";
        switchText.innerText = "Kosarasok délutánja"
        lights.style.opacity = "0%"
    } else {
        ball_star.style.left = "10%";
        ball_star.style.animation = "switchMoon "+switchDelay+"s 1 linear";
        setTimeout(() => {ball_star.style.filter = "brightness(1) blur(0px) grayscale(100%)";}, switchDelay*1000);
        switchBackground.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1066072940191416372/1083421207090704414/stars.jpg')"; 
        switchText.innerText = "Kosarasok éjszakája";
        lights.style.opacity = "100%";
    }
}

window.addEventListener('load', () => {ball.style.top = 100 - (ball.offsetHeight/(window.innerHeight/100))/2 + "%";});
window.addEventListener("resize", () => {ball.style.top = 100 - (ball.offsetHeight/(window.innerHeight/100))/2 + "%";});