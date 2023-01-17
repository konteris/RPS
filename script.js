function getComputerChoice(){
    const outcomes = ['Rock', 'Paper', 'Scissors']
    let randomNum = Math.floor(Math.random()*outcomes.length);
    return(outcomes[randomNum]);
}

function playRound(playerSelection, computerSelection)
{
    let outcome;
    let player = playerSelection.toLowerCase();
    let pc = computerSelection.toLowerCase();
    if(player === pc)
        outcome = 0;
    else if((player==="rock" && pc==="scissors")|| (player==="scissors" && pc==="paper")
     || (player==="paper" && pc==="rock"))
        outcome = 1;
    else
        outcome = -1;
    return outcome; 
}

function game(){
    let yourScore = 0, pcScore = 0;
    for(let i = 0; i < 5; i++)
    {
        let playerSelection = prompt("Rock scissors or paper?").toLowerCase();
        let computerSelection = getComputerChoice().toLowerCase();
        let result = playRound(playerSelection, computerSelection);
        if(result > 0)
        {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            yourScore++;
        }
        else if(result<0)
        {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            pcScore++;
        }
        else
            console.log("Tie game!");
    }
    console.log("Your score: " + yourScore +", computer score: "+pcScore);
}
game();