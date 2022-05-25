const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = 0;
const WIN = 1;
const LOST = 2;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

rockBtn.addEventListener("click", ()=>{
    play(ROCK);
});
paperBtn.addEventListener("click", () => {
    play(PAPER);
});
scissorsBtn.addEventListener("click", () => {
    play(SCISSORS);
});

function play(userOption){
    userImg.src = "img/" + userOption + ".svg";

    resultText.innerHTML = "chossing!";

    const interval = setInterval(function () {
      const machineOption = calcMachineOptions();
      machineImg.src = "img/" + machineOption + ".svg";
    }, 200);

    setTimeout(function(){
        setTimeout(function(){
            clearInterval(interval);
        })
        const machineOption = calcMachineOptions();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".svg";

        switch (result) {
            case TIE:
                resultText.innerHTML = "You have tied!";
                break;
            case WIN:
                resultText.innerHTML = "You win!";
                break;
            case LOST:
                resultText.innerHTML = "You Lost!";
                break;
        }
    }, 2000);

}
//convertidor
function calcMachineOptions(){
    const number = Math.floor(Math.random()* 3);
    switch (number){
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}
function calcResult(userOption, machineOption){
    if (userOption === machineOption){
        return TIE;
    }else if(userOption===ROCK){
        if(machineOption===SCISSORS) return WIN;
        if(machineOption===PAPER) return LOST;

    }else if(userOption===PAPER){
        if(machineOption===ROCK) return WIN;
        if(machineOption===SCISSORS) return LOST;
    }else if(userOption===SCISSORS){
        if(machineOption===ROCK)return LOST;
        if(machineOption===PAPER) return WIN;
    }
}