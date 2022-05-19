import Sound from "./sounds.js";
const wav = Sound();

export default function Controls({
    controlPlay,
    controlPause,
    day,
    night
}) {
    function playPause() {
        controlPlay.classList.toggle('hide');
        controlPause.classList.toggle('hide');
    }
    function stop() {
        controlPlay.classList.remove('hide');
        controlPause.classList.add('hide');
    }

    function playSound(sound){
        sound.classList.toggle('active');
        sound.classList.toggle('activeCard');
        
        if(sound.classList.length > 1 ){
            wav.play(sound.classList[0]);
        }
        else{
            wav.pause(sound.classList[0]);
        }
    }

    function volume(value){
        wav.volume(value);
    }

    function dayNnight(){
        day.classList.toggle('hide');
        night.classList.toggle('hide');
        document.body.classList.toggle('nightTheme');
    }

    return {
        playPause,
        stop,
        playSound,
        dayNnight,
        volume
    }
}