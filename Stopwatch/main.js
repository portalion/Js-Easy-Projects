const startBtn = document.querySelector(".stopwatch__button--start");
const stopBtn = document.querySelector(".stopwatch__button--stop");
const resetBtn = document.querySelector(".stopwatch__button--reset");
const timer = document.querySelector(".stopwatch__time");

let running = false;
let miliseconds = 0;
let interval;


startBtn.addEventListener('click', () => {
    if(!running)interval = setInterval(() => 
    {
        miliseconds++; 
        timer.textContent = Math.floor(miliseconds/6000) + ':' + 
            ((miliseconds/100)%100 < 10 ? '0' : '') + Math.floor(miliseconds/100)%100 + ':' + 
            (miliseconds%100 < 10 ? '0' : '') + miliseconds%100;
        running = true;
    })
});

stopBtn.addEventListener('click', () =>
{
    if(running)clearInterval(interval);
    running = false;
})

resetBtn.addEventListener('click', ()=>
{
    if(running)
    {
        clearInterval(interval);
        running = false;
    }
    miliseconds = 0;
    timer.textContent = '0:00:00';
})