let tempo = document.querySelector ("#timerRimanente");
let counter = document.querySelector ("#timerInput");
let startButton = document.querySelector ("#startButton");
let stopButton = document.querySelector ("#stopButton");
let resetButton = document.querySelector ("#resetButton");


let intervallo;
let conto;
let remainingTime = document.querySelector("#timerRimanente");

startButton.addEventListener("click",() => {
    clearInterval(intervallo)
    conto = counter.value;
    intervallo = setInterval(() => {
        if (conto < 0) { 
           clearInterval(intervallo); 
           remainingTime.innerHTML = "Tempo scaduto!";
        } else {
            remainingTime.innerHTML = conto;
            conto--;
        }
}, 1000);
});

stopButton.addEventListener("click",() =>{
 clearInterval(intervallo);

 });

resetButton.addEventListener("click",() =>{
 clearInterval(intervallo);
 remainingTime.innerHTML = "0";
 counter.value = "0";
});


