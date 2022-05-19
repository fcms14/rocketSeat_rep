const displayMinutes = document.querySelector('.minutes');
const displaySeconds = document.querySelector('.seconds');

const controlPlay = document.querySelector('.play');
const controlPause = document.querySelector('.pause');
const controlStop = document.querySelector('.stop');
const controlPlus = document.querySelector('.plus');
const controlMinus = document.querySelector('.minus');

const soundForest = document.querySelector('.forest');
const soundRain = document.querySelector('.rain');
const soundCoffee = document.querySelector('.coffee');
const soundFireplace = document.querySelector('.fireplace');

const volumeForest = document.getElementById('forest');
const volumeRain = document.getElementById('rain');
const volumeCoffee = document.getElementById('coffee');
const volumeFireplace = document.getElementById('fireplace');

const night = document.querySelector('.day');
const day = document.querySelector('.night');

export {
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
    night,
    day
}