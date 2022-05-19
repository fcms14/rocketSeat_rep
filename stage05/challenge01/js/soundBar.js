const iframe = document.querySelectorAll('iframe');
let choice;
let sound;
let element;

const utubeVideos = {
    forest: "https://www.youtube.com/embed/h0CJgLE4NiY?autoplay=1",
    rain: "https://www.youtube.com/embed/mPZkdNFkNps?autoplay=1",
    coffee: "https://www.youtube.com/embed/SORD03t7nlo?autoplay=1",
    fire: "https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1",
    t30: "https://www.youtube.com/embed/8V9TCD0TTtk?autoplay=1"
}

function soundSelect(id) {

    if (id == 't30') {
        sound = new Audio(`sounds/${id}.mp3`);
        sound.play();
    }
    else {
        let range = document.querySelector(`[id="volume${id}"]`);
        range.value = 0.5;

        if (choice == id) {
            sound.pause();
            choice = null;
            element.classList.toggle('active');
        }

        else {

            if (choice != null && choice != id) {
                sound.pause();
                element.classList.toggle('active');
            }

            choice = id

            sound = new Audio(`sounds/${choice}.wav`);
            sound.play();
            sound.loop = true;

            element = document.getElementById(`${id}`);
            element.classList.toggle('active');

            if (iframe[0].src != utubeVideos[choice]) {
                iframe[0].src = utubeVideos[choice];
            }
        }
    }
}

function volumeSet(volume) {
    if (sound != null) {
        sound.volume = volume;
    }
}

export { soundSelect, volumeSet }