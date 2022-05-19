import {timeSet, play, pause, stop, plus, minus} from './functions.js';
import {soundSelect, volumeSet} from './soundBar.js';
import {toggleTheme} from './theme.js';

function listener() {
    const buttons   = document.querySelectorAll(`[data-group = "listener"]`);

    const actions = {
        play :      ()          => play(),
        pause :     ()          => pause(),
        stop :      ()          => stop(),
        plus :      ()          => plus(),
        minus :     ()          => minus(),
        timeSet :   ()          => timeSet(),
        soundSet :  (param)     => soundSelect(param),
        volumeSet : (param)     => volumeSet(param),
        toggleTheme : (param)   => toggleTheme(param),
    }
    
    for (let button of buttons){
        button.addEventListener('click', () => {
            const {name: action, value: param} = button;
            actions[action](param);
        })
    }
}

export {listener}