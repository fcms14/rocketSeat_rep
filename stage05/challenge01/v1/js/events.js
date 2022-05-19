import {
    displayMinutes,
    displaySeconds,
    controlPlay,
    controlPause,
    controlStop,
    controlPlus,
    controlMinus,
    soundForest,
    soundRain,
    soundCoffee,
    soundFireplace,
    volumeForest,
    volumeRain,
    volumeCoffee,
    volumeFireplace,
    day,
    night
} from "./elements.js"

import Controls from "./controls.js";
const controls = Controls({
    controlPlay,
    controlPause,
    day,
    night
})

import Timer from "./timer.js"
const timer = Timer({
    displayMinutes,
    displaySeconds
})

export default function ({ }) {

    controlPlay.addEventListener('click', function () {
        controls.playPause();
        timer.start();
    })
    controlPause.addEventListener('click', function () {
        controls.playPause();
        timer.pause();
    })
    controlStop.addEventListener('click', function () {
        controls.stop();
        timer.stop();
    })
    controlPlus.addEventListener('click', function () {
        timer.plus();
    })
    controlMinus.addEventListener('click', function () {
        timer.minus();
    })

    soundForest.addEventListener('click', function () {
        controls.playSound(this);
    })
    soundRain.addEventListener('click', function () {
        controls.playSound(this);
    })
    soundCoffee.addEventListener('click', function () {
        controls.playSound(this);
    })
    soundFireplace.addEventListener('click', function () {
        controls.playSound(this);
    })
    
    volumeForest.addEventListener('click', function () {
        controls.volume(this);        
    })
    volumeRain.addEventListener('click', function () {
        controls.volume(this);
    })
    volumeCoffee.addEventListener('click', function () {
        controls.volume(this);
    })
    volumeFireplace.addEventListener('click', function () {
        controls.volume(this);
    })

    day.addEventListener('click', function () {
        controls.dayNnight();
    })
    night.addEventListener('click', function () {
        controls.dayNnight();
    })


}