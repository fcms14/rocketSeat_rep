export default function Timer({
    displayMinutes,
    displaySeconds
}) {

    let timer;
    let initial = Number(displayMinutes.textContent);

    function displayRefresh(minutes, seconds) {
        displayMinutes.textContent = String(minutes).padStart(2, "0");
        displaySeconds.textContent = String(seconds).padStart(2, "0");
    }

    function plus() {
        let minutes = Number(displayMinutes.textContent);
        let seconds = Number(displaySeconds.textContent);
        minutes++;
        displayRefresh(minutes, seconds);
    }

    function minus() {
        let minutes = Number(displayMinutes.textContent);
        let seconds = Number(displaySeconds.textContent);
        if (minutes > 0) {
            minutes--;
        }
        displayRefresh(minutes, seconds);
    }

    function stop() {
        displayRefresh(initial, 0);
        clearTimeout(timer);
    }

    function pause() {
        clearTimeout(timer);
    }

    function start() {
        timer = setTimeout(function () {
            let seconds = Number(displaySeconds.textContent);
            let minutes = Number(displayMinutes.textContent);
            let timeOut = minutes == 0 && seconds == 0;

            if (timeOut) {
                return;
            }
            else {
                --seconds;
                if (seconds < 0) {
                    seconds = 59;
                    --minutes;
                }

                displayRefresh(minutes, seconds);

                start()
            }
        }, 1000)
    }

    return {
        start,
        pause,
        stop,
        minus,
        plus
    }

}