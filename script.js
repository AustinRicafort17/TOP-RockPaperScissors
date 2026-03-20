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
        return "draw" ; alert("It's a DRAW!")
    }
    else if (Human === "ROCK" && Computer === "PAPER"){
        return "ComputerWin" ; alert("You lose! paper beats rock")
    }
    else if (Human === "ROCK" && Computer === "SCISSORS" ){
        return "HumanWin" ; alert("You Win! rock bears scissors")
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

    alert("ROUND 1") ; round1 = PlayRound(GetHumanChoice(),GetComputerChoice())
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


function Score1(){
    if (round1 === "ComputerWin"){
        ComputerScore = ComputerScore + 1
    }
    else if (round1 === "HumanWin"){
        HumanScore = HumanScore + 1
    }
    else if (round1 === "draw"){
        draw = draw + 1
    }
}
function Score2(){
    if (round2 === "ComputerWin"){
        ComputerScore = ComputerScore + 1
    }
    else if (round2 === "HumanWin"){
        HumanScore = HumanScore + 1
    }
    else if (round2 === "draw"){
        draw = draw + 1
    }
}
function Score3(){ 
        if (round3 === "ComputerWin"){
        ComputerScore = ComputerScore + 1
    }
    else if (round3 === "HumanWin"){
        HumanScore = HumanScore + 1
    }
    else if (round3 === "draw"){
        draw = draw + 1
    }
}
function Score4(){ 
        if (round4 === "ComputerWin"){
        ComputerScore = ComputerScore + 1
    }
    else if (round4 === "HumanWin"){
        HumanScore = HumanScore + 1
    }
    else if (round4 === "draw"){
        draw = draw + 1
    }
}
function Score5(){ 
    if (round5 === "ComputerWin"){
        ComputerScore = ComputerScore + 1
    }
    else if (round5 === "HumanWin"){
        HumanScore = HumanScore + 1
    }
    else if (round5 === "draw"){
        draw = draw + 1
    }
}

Score1()
Score2()
Score3()
Score4()
Score5()


console.log(draw)
console.log(HumanScore)
console.log(ComputerScore)


function Scoreboard(){
    if(HumanScore > ComputerScore){
        alert(HumanScore + "You Win!")
    }
}

