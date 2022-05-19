const initialTicks = displayElement.textContent.slice(0, 2) * 60;

const displayElement = document.getElementById('timer');
let ticksLeft = initialTicks;
let timer;

function convert(ticksLeft) {
    const timeLeft = [];

    const days = Math.floor(ticksLeft / (24 * 60 * 60))
    ticksLeft = ticksLeft - (days * (24 * 60 * 60));

    const hours = Math.floor(ticksLeft / (60 * 60));
    ticksLeft = ticksLeft - (hours * (60 * 60));

    const minutes = Math.floor(ticksLeft / 60);
    const seconds = ticksLeft % 60;

    timeLeft.push(days, hours, minutes, seconds);

    return timeLeft;
}

function display(timeLeft) {
    let displayText = timeLeft[0] > 0 ? timeLeft[0] + " d<br>" : "";
    displayText = displayText != "" ||
        timeLeft[1] > 0 ? displayText + timeLeft[1] + ":" : "";
    displayText = displayText + String(timeLeft[2]).padStart(2, "0") + ":";
    displayText = displayText + String(timeLeft[3]).padStart(2, "0");

    displayElement.innerHTML = displayText;
}

function countDown() {
    timer = setTimeout(function () {
        if (ticksLeft > 0) {
            --ticksLeft;

            const timeLeft = convert(ticksLeft);

            display(timeLeft);
            countDown();
        }
        else {
            stop();
        }

    }, 1000)
}

function set() {
    let value = Number(prompt(`Digite o tempo em minutos`));
    while (isNaN(value) || value < 1) {
        value = Number(prompt("Digite APENAS NÚMEROS"));
    }
    ticksLeft = value * 60;
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

    ticksLeft = initialTicks
    const timeLeft = convert(ticksLeft);
    display(timeLeft);
}

function plus() {
    ticksLeft += 300;
    const timeLeft = convert(ticksLeft);
    display(timeLeft);
}

function minus() {
    if (ticksLeft > 300) {
        ticksLeft -= 300;
        const timeLeft = convert(ticksLeft);
        display(timeLeft);
    }
}
