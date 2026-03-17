// 1 make a function that generates and poops out either "ROCK","PAPER" or "SCISSORS"
// 2 make a promt


function GenerateComputerChoice (){
    return Math.floor(Math.random() * 3 ) + 1 ;
}


let ComputerChoice = GenerateComputerChoice()

    function getComputerChoice(){
            if(ComputerChoice === 1){
                return "ROCK"
            }
            else if (ComputerChoice === 2){
                return "PAPER"
            }
            else if (ComputerChoice === 3){
                return "SCISSORS"
            }
        }

console.log(ComputerChoice)
console.log(getComputerChoice())




function GetHumanChoice (){



}




