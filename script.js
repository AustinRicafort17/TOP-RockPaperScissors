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
    choice = prompt("Enter either 'rock', 'paper' or 'sciccors'").toUpperCase()
    return choice
}


// const HumanChoice = GetHumanChoice()
// const ComputerChoice = GetComputerChoice()



function PlayRound(Human,Computer){
    if (Human === "ROCK" && Computer === "ROCK"){
        return "draw"
    }
    else if (Human === "ROCK" && Computer === "PAPER"){
        return "HumanWin"
    }
    else if (Human === "ROCK" && Computer === "SCISSORS" ){
        return "ComputerWin"
    }
    else if (Human === "PAPER" && Computer === "ROCK"){
        return "HumanWin"
    }
    else if (Human === "PAPER" && Computer === "PAPER"){
        return "draw"
    }
    else if (Human === "PAPER" && Computer === "SCISSORS"){
        return "ComputerWin"
    }
    else if (Human === "SCISSORS" && Computer === "ROCK"){
        return "ComputerWin"
    }
    else if (Human === "SCISSORS" && Computer === "PAPER"){
        return "HumanWin"
    }
    else if (Human === "SCISSORS" && Computer === "SCISSORS"){
        return "draw"
    }
}

function Playgame(){

    alert("ROUND 1") ; round1 =  PlayRound(GetHumanChoice(),GetComputerChoice())
    alert("ROUND 2") ; round2 = PlayRound(GetHumanChoice(),GetComputerChoice())
    alert("ROUND 3") ; round3 = PlayRound(GetHumanChoice(),GetComputerChoice())
    alert("ROUND 4") ; round4 = PlayRound(GetHumanChoice(),GetComputerChoice())
    alert("ROUND 5") ; round5 = PlayRound(GetHumanChoice(),GetComputerChoice())

}

Playgame()

console.log(round1)
console.log(round2)
console.log(round3)
console.log(round4)
console.log(round5)


let draw = 0
let HumanScore = 0
let ComputerScore = 0



