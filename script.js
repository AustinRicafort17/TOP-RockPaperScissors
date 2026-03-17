

function GetComputerChoice (){
    result = Math.floor(Math.random() * 3 ) + 1 ;

    if (result === 1){
        return "ROCK"
    }
    else if (result === 2){
        return "PAPER"
    }
    else if (result === 3){
        return "SCISSORS"
    }
}


function GetHumanChoice (){
    choice = prompt("Enter either 'rock', 'paper' or 'sciccors'")
    return choice
}


let HumanScore = 0
let ComputerScore = 0


function PlayRound(Human,Computer){

    


}

const HumanChoice = GetHumanChoice()
const ComputerChoice = GetComputerChoice()
