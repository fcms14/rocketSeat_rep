import {soundSelect} from './soundBar.js';

const displayElement = document.getElementById('timer');
const t30Svg = document.getElementById('t30');
const initialTicks = (displayElement.textContent.slice(0, 2) * 60) + displayElement.textContent.slice(3,5);

let ticksLeft = initialTicks;
let userTicks = ticksLeft;
let timer;

function finishTask() {
    if (allTasks !== null && taskActive != null) {
        allTasks[taskActive].timeSpent += Math.round(userTicks - ticksLeft);
        localStorage.setItem("description", JSON.stringify(allTasks));
        loadTasks();
    }
}


// dependencies: ticksLeft integer
function convert(ticksLeft) {    

    const years = Math.floor(ticksLeft / (365 * 24 * 60 * 60))
    ticksLeft = ticksLeft - (years * (365 * 24 * 60 * 60));

    const days = Math.floor(ticksLeft / (24 * 60 * 60))
    ticksLeft = ticksLeft - (days * (24 * 60 * 60));

    const hours = Math.floor(ticksLeft / (60 * 60));
    ticksLeft = ticksLeft - (hours * (60 * 60));

    const minutes = Math.floor(ticksLeft / 60);
    const seconds = ticksLeft % 60;

    const timeLeft = {years, days, hours, minutes, seconds};

    return timeLeft;
}

function display(timeLeft) {

    displayElement.innerHTML = "";

    displayElement.innerHTML += timeLeft.years > 0  ? timeLeft.years + " y<br>" : "";
    displayElement.innerHTML += timeLeft.days > 0   ? timeLeft.days + " d<br>" : "";
    displayElement.innerHTML += timeLeft.hours > 0  ? timeLeft.hours + ":" : "";
    displayElement.innerHTML +=                     String(timeLeft.minutes).padStart(2, "0") + ":";
    displayElement.innerHTML +=                     String(timeLeft.seconds).padStart(2, "0")

}

function countDown() {
    timer = setTimeout(function () {
        if (ticksLeft > 0) {
            --ticksLeft;

            const timeLeft = convert(ticksLeft);

            display(timeLeft);
            countDown();

            switch (ticksLeft){
                case 40: 
                    t30Svg.classList.remove('hide');
                    break;
                case 31:
                    soundSelect('t30');
                    break;
                case 7:
                    t30Svg.classList.add('ignitionSvg');
                    break;
            }
        }
        else {
            stop();
            t30Svg.classList.remove('ignitionSvg');
            t30Svg.classList.add('launchSvg');
            setTimeout(function (){
                t30Svg.classList.remove('launchSvg');
                t30Svg.classList.add('hide');
            }, 2000)
        }

    }, 1000)
}

function timeSet() {
    let value = Number(prompt(`Digite o tempo em minutos`));
    while (isNaN(value) || value < 1) {
        value = Number(prompt("Digite APENAS NÚMEROS"));
    }
    ticksLeft = value * 60;
    userTicks = ticksLeft;
    const timeLeft = convert(ticksLeft);
    display(timeLeft);
}

function play() {
    document.getElementById('pause').classList.toggle('hide');
    document.getElementById('play').classList.toggle('hide');
    countDown();
}

function pause() {
    document.getElementById('pause').classList.toggle('hide');
    document.getElementById('play').classList.toggle('hide');
    clearTimeout(timer);    
}

function stop() {
    document.getElementById('pause').classList.add('hide');
    document.getElementById('play').classList.remove('hide');
    clearTimeout(timer);
    finishTask();

    ticksLeft = userTicks
    const timeLeft = convert(ticksLeft);
    display(timeLeft);
}

function plus() {
    ticksLeft += 300;
    userTicks += 300;
    const timeLeft = convert(ticksLeft);
    display(timeLeft);
}

function minus() {
    if (ticksLeft > 300) {
        ticksLeft -= 300;
        userTicks -= 300;
        const timeLeft = convert(ticksLeft);
        display(timeLeft);
    }
}

export {timeSet, play, pause, stop, plus, minus}