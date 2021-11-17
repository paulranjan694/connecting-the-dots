// buttons
const start = document.getElementById("start");
const stop = document.getElementById("stop");

// circles
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");

stop.disabled = true;

let setIntervalid;
// storing different animation name, responsible for changing the color
const animationsColorChange = ["right-color", "down-color", "left-color", "top-color"];
const ANIMATION_DURATION = 2.5;

// disabling the button when animation is on
const btnDisabled = (value)=>{
    if(value){
        start.disabled = true;
        stop.disabled = false;
        start.classList.add("disable");
        stop.classList.remove("disable");
    }else{
        start.disabled = false;
        start.classList.remove("disable");
        stop.disabled = true;
        stop.classList.add("disable");
    }
}

const colorAnimation = (index) => {
    first.style.animationName=`horizontal, ${animationsColorChange[(index) % animationsColorChange.length]}`;
    second.style.animationName=`vertical, ${animationsColorChange[(index + 1) % animationsColorChange.length]}`;
    third.style.animationName=`horizontal, ${animationsColorChange[(index + 2) % animationsColorChange.length]}`;
    fourth.style.animationName=`vertical, ${animationsColorChange[(index + 3) % animationsColorChange.length]}`;
}

// animation start button
start.addEventListener('click', function(){
    let idx=0;
    // disabling the start button
    btnDisabled(true);

    // setting the animation duration
    first.style.animationDuration=`${ANIMATION_DURATION}s`;
    second.style.animationDuration=`${ANIMATION_DURATION}s`;
    third.style.animationDuration=`${ANIMATION_DURATION}s`;
    fourth.style.animationDuration=`${ANIMATION_DURATION}s`;

    // setting the color animation name
    colorAnimation(idx);

    ++idx;
    // repeating the color animation 
    setIntervalid = setInterval(() => {
        colorAnimation(idx);
        ++idx;
    }, ANIMATION_DURATION*1000);

});

// stop button
stop.addEventListener('click', function(){
    // enabling the start button
    btnDisabled(false);
    clearInterval(setIntervalid);
    // making the animation to initial state
    first.style.animationName='';
    second.style.animationName='';
    third.style.animationName='';
    fourth.style.animationName='';
});



