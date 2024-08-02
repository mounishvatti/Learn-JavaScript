const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

let intervalId;

const changeBg = function(){
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#000000'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

start.addEventListener('click', function(){
    console.log('Start');
    if(!intervalId){
        intervalId = setInterval(changeBg, 2000);
    }
});

stop.addEventListener('click', function(){
    clearInterval(intervalId);
    intervalId = null;
});