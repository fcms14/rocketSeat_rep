function toggleTheme(param){
    document.body.classList.toggle('darkTheme');
    let buttons = document.querySelectorAll('.dayNight')
    
    for(let x of buttons){
        x.classList.toggle('hide');
    }
    
    localStorage.setItem("themeOn", JSON.stringify(param));
    themeOn = JSON.parse(localStorage.getItem("themeOn"));
}

export {toggleTheme}