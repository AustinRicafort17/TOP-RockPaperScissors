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
    let choice = prompt("Enter either 'rock', 'paper' or 'sciccors'").toUpperCase()

    if (choice == "ROCK" || choice == "PAPER" || choice == "SCISSORS"){
        return choice
    }
    else if (choice !== "ROCK" && choice !== "PAPER" && choice !== "SCISSORS"){
        alert("Not an option, Try one more time...");
        return choice = prompt("Enter either 'rock', 'paper' or 'scissors'").toUpperCase();
    }

}


// const HumanChoice = GetHumanChoice()
// const ComputerChoice = GetComputerChoice()



function PlayRound(Human,Computer){
    if (Human === "ROCK" && Computer === "ROCK"){
        alert("It's a DRAW!")
        return "draw"  
    }
    else if (Human === "ROCK" && Computer === "PAPER"){
        alert("You lose! paper beats rock")
        return "ComputerWin" ; 
    }
    else if (Human === "ROCK" && Computer === "SCISSORS" ){
        alert("You Win! rock bears scissors")
        return "HumanWin" ;
    }
    else if (Human === "PAPER" && Computer === "ROCK"){
        alert("You Win! paper beats rock")
        return "HumanWin"
    }
    else if (Human === "PAPER" && Computer === "PAPER"){
        alert("It's a DRAW!")
        return "draw"
    }
    else if (Human === "PAPER" && Computer === "SCISSORS"){
        alert("You lose! scissors beat paper")
        return "ComputerWin"
    }
    else if (Human === "SCISSORS" && Computer === "ROCK"){
        alert("You lose! rock beats scissors")
        return "ComputerWin"
    }
    else if (Human === "SCISSORS" && Computer === "PAPER"){
        alert("You win! scissors beat paper")
        return "HumanWin"
    }
    else if (Human === "SCISSORS" && Computer === "SCISSORS"){
        alert("It's a DRAW!")
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
        alert("YOU ->" + HumanScore + " COMPUTER ->" + ComputerScore + " Draws ->" + draw + " You Win!" )
    }
    else if(ComputerScore > HumanScore){
        alert("YOU ->" + HumanScore + " COMPUTER ->" + ComputerScore + " Draws ->" + draw + " You Lose!" )
    }
    else if (ComputerScore = HumanScore){
        alert("YOU ->" + HumanScore + " COMPUTER ->" + ComputerScore + " Draws ->" + draw + " It's a Draw!")
    }
}

Scoreboard()
