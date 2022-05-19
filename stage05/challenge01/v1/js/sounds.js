export default function () {

    const wavs = {
        coffee: new Audio("./sounds/Cafeteria.wav"),
        rain: new Audio("./sounds/Chuva.wav"),
        forest: new Audio("./sounds/Floresta.wav"),
        fireplace: new Audio("./sounds/Lareira.wav")
    };

    wavs.coffee.loop = true
    wavs.rain.loop = true
    wavs.forest.loop = true
    wavs.fireplace.loop = true

    function play(choice) {
        switch (choice) {
            case 'coffee': wavs.coffee.play(); break;
            case 'rain': wavs.rain.play(); break;
            case 'forest': wavs.forest.play(); break;
            case 'fireplace': wavs.fireplace.play(); break;
        }
    }

    function pause(choice) {
        switch (choice) {
            case 'coffee': wavs.coffee.pause(); break;
            case 'rain': wavs.rain.pause(); break;
            case 'forest': wavs.forest.pause(); break;
            case 'fireplace': wavs.fireplace.pause(); break;
        }
    }

    function volume(obj) {
        let choice = obj.id;

        switch (choice) {
            case 'coffee': wavs.coffee.volume = obj.value; break;
            case 'rain': wavs.rain.volume = obj.value; break;
            case 'forest': wavs.forest.volume = obj.value; break;
            case 'fireplace': wavs.fireplace.volume = obj.value; break;
        }
    }

    return {
        play,
        pause,
        volume
    }
}