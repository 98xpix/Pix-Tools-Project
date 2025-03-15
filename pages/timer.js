const display = document.getElementById('counter');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
        
    }
}

function pause(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date,now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}



document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".material-symbols-outlined");
    const sidebar = document.querySelector("aside");

    menuIcon.addEventListener("click", function () {
        if (sidebar.style.right === "0px") {
            sidebar.style.right = "-500px";
        } else {
            sidebar.style.right = "0px";
        }
    });
});